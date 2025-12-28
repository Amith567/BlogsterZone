from rest_framework import serializers
from .models import Category,Blog

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=['id','name','slug']

class BlogSerializer(serializers.ModelSerializer):
    author=serializers.ReadOnlyField(source='author.username')
    category=CategorySerializer(read_only=True)
    category_id=serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        write_only=True,
        source='category',
    )
    class Meta:
        model=Blog
        fields=[
            'id','author','title','content','visibility','category','category_id','created_at','updated_at'
        ]
        