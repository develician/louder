from rest_framework import viewsets, permissions, generics, views

from .models import Post, SongFiles
from .serializers import PostSerializer, SongFilesSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = PostSerializer


class SongFilesViewSet(viewsets.ModelViewSet):
    queryset = SongFiles.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = SongFilesSerializer
