from django.conf.urls import include, url
from rest_framework import routers

from .api import PostViewSet, SongFilesViewSet
from auth.api import RegistrationAPI, UserAPI, LoginAPI

router = routers.DefaultRouter()
router.register('posts', PostViewSet)
router.register('songs', SongFilesViewSet)


urlpatterns = [
    url("^", include(router.urls)),
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
]
