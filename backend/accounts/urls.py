from django.urls import path
from .views import register,update_profile,profile
urlpatterns=[
    path('register/',register),
    path('profile/',profile),
    path('profile/update/',update_profile),
]