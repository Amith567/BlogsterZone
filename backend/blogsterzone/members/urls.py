from django.urls import path
from .views import Registerview, LogoutView,Usereditview,Showprofileview,Userprofileedit
from django.contrib.auth import views as passview
urlpatterns = [
    path('register/', Registerview.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('edit_profile/',Usereditview.as_view(),name='edit_settings'),
    path('password/',passview.PasswordChangeView.as_view()),
    path('<int:pk>/profile/',Showprofileview.as_view(),name='show_profile'),
    path('<int:pk>/profile/edit/',Userprofileedit.as_view(),name='user_profile_edit')
]
