from django.db import models
from django.conf import settings

class Category(models.Model):
    name=models.CharField(max_length=20,unique=True)
    slug=models.SlugField(unique=True)

    def __str__(self):
        return self.name

class Blog(models.Model):
    visibility_choices=[
        ('public','Public'),('private','Private'),('protected','Protected'),
    ]
    author=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='blog'
    )
    title=models.CharField(max_length=100)
    content=models.TextField()
    visibility=models.CharField(max_length=10,choices=visibility_choices,default='public')
    created_at=models.DateField(auto_now_add=True)
    updated_at=models.DateField(auto_now=True)
    category=models.ForeignKey(Category,on_delete=models.SET_NULL,null=True,related_name='blog')

    def __str__(self):
        return f"{self.title,self.author}"
