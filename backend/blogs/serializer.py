from rest_framework import serializers
from .models import Category,Blog

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=['id','name','slug']

class BlogSerializer(serializers.ModelSerializer):
    like_count=serializers.SerializerMethodField()
    liked_by_user=serializers.SerializerMethodField()
    author=serializers.ReadOnlyField(source='author.username')
    author_id=serializers.ReadOnlyField(source='author.id')
    category=CategorySerializer(read_only=True)
    category_id=serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        write_only=True,
        source='category',
    )
    def get_like_count(self,obj):
        return obj.likes.count()
    def get_liked_by_user(self,obj):
        request=self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.likes.filter(user=request.user).exists()
        return False
    class Meta:
        model=Blog
        fields=[
            'id','author','author_id','title','content','visibility','category','category_id','created_at','updated_at','like_count','liked_by_user'
        ]
        