from django.db import models
from django.utils import timezone


class LastUpdateDate(models.Model):
    date = models.DateTimeField(default=timezone.now)


class Tweet(models.Model):
    tweet_id = models.CharField(max_length=256)
    text = models.CharField(max_length=256, null=True)

    def __str__(self):
        return self.tweet
