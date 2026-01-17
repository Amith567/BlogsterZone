from django.db import models
from accounts.models import User
from blogs.models import Blog
class Comment(models.Model):
    commented_by=models.ForeignKey(User,
                                   on_delete=models.CASCADE,
                                   related_name='comments')
    commented_on=models.ForeignKey(Blog,
                                   on_delete=models.CASCADE,
                                   related_name='comments')
    created_at=models.DateTimeField(auto_now_add=True)
    message=models.CharField(max_length=100)

    def __str__(self):
        return f'commented by {self.commented_by} on {self.commented_on}'