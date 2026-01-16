from django.urls import path
from .views import register,update_profile,profile,userprofile
urlpatterns=[
    path('register/',register),
    path('profile/',profile),
    path('profile/update/',update_profile),
    path('profile/<int:user_id>/',userprofile),
]