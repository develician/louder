from django.db import models
from tagging.fields import TagField

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=255, blank=False,
                             null=False, default="no title")
    body = models.TextField()
    musician = models.CharField(
        max_length=255, blank=False, null=False, default="no musician")
    cover = models.ImageField(
        upload_to='images', blank=True, null=True, default="images/no_image.png")
    # songs = models.FileField(upload_to='songs', max_length=100000, default="songs/no_song.mp3")
    songs = models.TextField()
    tag = TagField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class SongFiles(models.Model):
    songFiles = models.FileField(upload_to="songs", default="no_song.mp3")
