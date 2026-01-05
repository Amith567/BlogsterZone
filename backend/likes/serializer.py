from rest_framework.serializers import Serializer
from .models import Like

class LikeSerializer(Serializer.ModelSerializer):
    class Meta:
        model=Like
        fields=['id','user','blog','created_at']
        read_only_fields=['user']
