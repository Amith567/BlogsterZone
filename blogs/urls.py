from django.urls import path
from .views import blog_deatail,blog_list_create

urlpatterns=[
    path('',blog_list_create),
    path('<int:id>/',blog_deatail),
]