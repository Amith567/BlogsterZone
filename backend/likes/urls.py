from django.urls import path
from .views import toggle_like

urlpatterns=[
    path("blogs/<int:blog_id>/like/",toggle_like),
]