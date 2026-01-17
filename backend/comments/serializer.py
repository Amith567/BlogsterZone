from rest_framework import serializers
from .models import Comment

class CommentsSerializer(serializers.ModelSerializer):
    commented_user=serializers.CharField(
        source='commented_by.username',
        read_only=True
    )
    class Meta:
        model=Comment
        fields=[
            'id',
            'commented_user',
            'created_at',
            'message',
            'commented_by',            
        ]
