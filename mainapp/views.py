from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from rest_framework import generics, views
from rest_framework.response import Response
from .serializers import TweetSerializer
from .models import Tweet, LastUpdateDate
from django.utils import timezone
from django.conf import settings
import os
import logging
import pandas as pd


class TopList(views.APIView):

    def get(self, request, format=None):

        # lpd = LastUpdateDate.objects.last()
        # if lpd is None:
        #     LastUpdateDate.objects.create()
        #     lpd = LastUpdateDate.objects.last()

        # if lpd.date + timezone.timedelta(days=1) <= timezone.now() or not Tweet.objects.exists():
        #     lpd.date = timezone.now()
        #     lpd.save()

        file_name = "{}analyzed.csv".format(settings.MEDIA_ROOT)
        print(file_name)
        df = pd.read_csv(file_name)
        Tweet.objects.all().delete()

        tweet_list = []
        for record in df.itertuples():
            # text = record.content.split('#')[0]
            # print(text)
            tweet = Tweet(tweet_id=record.id)
            tweet_list.append(tweet)
        Tweet.objects.bulk_create(tweet_list)

        tweets = Tweet.objects.all()
        serializer = TweetSerializer(tweets, many=True)
        return Response(serializer.data)


class FrontendAppView(View):

    def get(self, request):
        print(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(status=501)
