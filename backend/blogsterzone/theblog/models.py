from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from datetime import datetime,date
from ckeditor.fields import RichTextField

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,null=True)
    bio=models.TextField()
    profile_pic=models.ImageField(null=True,blank=True,upload_to='profile/')
    websit_url=models.TextField(null=True,blank=True)
    facebook_url=models.TextField(null=True,blank=True)
    def __str__(self):
        return str(self.user)

class Post(models.Model):
    title=models.CharField(max_length=255)
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    body = RichTextField(blank=True,null=True)
    # body = models.TextField()
    tag=models.CharField(default='blog')
    publish_date=models.DateField(auto_now_add=True)
    category=models.CharField(max_length=255,default='blog')
    likes=models.ManyToManyField(User,related_name='blog_likes',blank=True)
    snippets=models.CharField(default='click the link above to read blog...')
    header_img=models.ImageField(null=True,blank=True,upload_to='images/')
    def __str__(self):
        return self.title+" | "+str(self.author)
    def get_absolute_url(self):
        return reverse('home')
    def total_likes(self):
        return self.likes.count()
    
class Category(models.Model):
    name=models.CharField(max_length=255)

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('home')