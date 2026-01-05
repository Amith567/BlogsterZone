from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db import models

class User(AbstractUser):
    phone=models.CharField(max_length=15,null=True,blank=True,unique=True)
    is_verified=models.BooleanField(default=False)

    def __str__(self):
        return self.username
    
class Profile(models.Model):
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    first_name=models.CharField(max_length=100,blank=True)
    last_name=models.CharField(max_length=100,blank=True)
    avatar=models.ImageField(upload_to='profiles',null=True,blank=True)
    bio=models.TextField(null=True,blank=True)
    dob=models.DateField(null=True,blank=True)
    portfolio=models.URLField(null=True,blank=True)
    facebook=models.URLField(null=True,blank=True)
    instagram=models.URLField(null=True,blank=True)
    twitter=models.URLField(null=True,blank=True)

    def __str__(self):
        return f"profile of {self.user.username}"
    