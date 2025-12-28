from django.db import models
from django.conf import settings
from blogs.models import Blog

class Like(models.Model):
    user=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='likes'
    )
    blog=models.ForeignKey(
        Blog,
        on_delete=models.CASCADE,
        related_name='likes'
    )
    created_at=models.DateField(auto_now_add=True)

    class Meta:
        unique_together=('user','blog')
    def __str__(self):
        return f"{self.user.email} liked {self.blog.title}"
