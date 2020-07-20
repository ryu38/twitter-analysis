import tweepy
import datetime
import pandas as pd
import numpy as np
from django.conf import settings
from django.core.management.base import BaseCommand

import os
from os.path import join, dirname
from dotenv import load_dotenv


class Command(BaseCommand):

    help = 'analyze tweets'

    def handle(self, *args, **options):

        print('start loading tweets ...')

        load_dotenv(verbose=True)

        dotenv_path = join(dirname(__file__), '.env')
        load_dotenv(dotenv_path)

        CK = os.environ.get("CONSUMER_KEY")
        CS = os.environ.get("CONSUMER_SECRET")
        AT = os.environ.get("ACCESS_TOKEN")
        ATS = os.environ.get("ACCESS_TOKEN_SECRET")

        auth = tweepy.OAuthHandler(CK, CS)
        auth.set_access_token(AT, ATS)

        api = tweepy.API(auth, wait_on_rate_limit=True)

        q = '#Splatoon2 OR #スプラトゥーン2 min_faves:100 filter:native_video until:{}'.format(str(datetime.date.today() - datetime.timedelta(days=1)))
        tweets_data = []

        for tweet in tweepy.Cursor(api.search, q=q, tweet_mode='extended', wait_on_rate_limit=True).items(150):

            fav = tweet.favorite_count

            followers = tweet.user.followers_count
            if followers:
                percent2 = (fav/followers)
            else:
                percent2 = "inf"

            tweets_data.append([tweet.id, tweet.created_at, fav, followers, percent2, tweet.full_text])

        print(tweets_data)

        df = pd.DataFrame(tweets_data, columns=['id', 'date', 'fav', 'followers', 'f/fo', 'content'])
        df = df.sort_values("followers")

        x = df["followers"]  # pandas.core.series.Series
        y = df["fav"]

        def reg1dim(x, y):
            n = len(x)
            a = ((np.dot(x, y) - y.sum() * x.sum() / n) /
                 ((x ** 2).sum() - x.sum() ** 2 / n))
            b = (y.sum() - a * x.sum()) / n
            return a, b

        a, b = reg1dim(x, y)

        buz_factors = []
        for i in range(len(df)):
            factor = y.values[i] / (a * x.values[i] + b)
            buz_factors.append(factor)

        df["buz_factor"] = buz_factors
        df = df.sort_values("buz_factor")

        file_name = "{}analyzed.csv".format(settings.MEDIA_ROOT)
        df.to_csv(file_name)

        self.stdout.write(self.style.SUCCESS('analyzed!'))
