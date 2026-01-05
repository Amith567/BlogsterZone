from django.urls import path
from .import views
from .views import Homeview,Detailview,AddPostview,UpdatePostview,DeletePostview,Addcategory,Categoryview,like_post
urlpatterns=[
# path('',views.home,name='home'),
path('',Homeview.as_view(),name='home'),
path('article/<int:pk>',Detailview.as_view(),name='article'),
path('add_post/',AddPostview.as_view(),name='add_post'),
path('article/edit/<int:pk>',UpdatePostview.as_view(),name='update_post'),
path('article/<int:pk>/delete',DeletePostview.as_view(),name='delete_post'),
path('add_category/',Addcategory.as_view(),name='add_category'),
path('category/<str:cats>/',Categoryview,name='category_view'),
path('like/<int:pk>/',views.like_post,name='like_post')
]