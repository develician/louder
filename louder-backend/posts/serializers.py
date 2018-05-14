from rest_framework import serializers
from django.forms.fields import FileField

from .models import Post, SongFiles


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'musician', 'cover', 'songs', 'tag')


class SongFilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongFiles
        fields = ('id', 'songFiles')
