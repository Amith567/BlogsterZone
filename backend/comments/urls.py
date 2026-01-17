from django.urls import path
from .views import comment_view

urlpatterns=[
    path("blog/<int:blog_id>/",comment_view),
]