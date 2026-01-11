from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Blog
from django.db.models import Q
from .serializer import BlogSerializer

@api_view(['GET','POST'])
@permission_classes([AllowAny])
def blog_list_create(request):
    if request.method=='GET':
        if request.user.is_authenticated:
            blogs=Blog.objects.filter(
                Q(visibility='public')|Q(author=request.user)
            )
        else:
            blogs=Blog.objects.filter(visibility='public')
        serializer=BlogSerializer(blogs,many=True, context={'request': request})
        return Response(serializer.data)
    
    if request.method=='POST':
        if not request.user.is_authenticated:
            return Response(
                {'deatail':'Authentication required'},status=status.HTTP_401_UNAUTHORIZED
            )
        serializer=BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
@permission_classes([AllowAny])
def blog_deatail(request,id):
    try:
        blog=Blog.objects.get(id=id)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method=='GET':
        if blog.visibility!='public' and blog.author !=request.user:
            return Response(
                {'deatail':'not allowed'},
                status=status.HTTP_403_FORBIDDEN
            )
        serializer=BlogSerializer(blog, context={'request': request})
        return Response(serializer.data,status=status.HTTP_200_OK)
        
    if request.method=='PUT':
        if blog.visibility!='public' and request.user!=blog.author:
            return Response(
                {'deatail':'Permission denied'},
                status=status.HTTP_403_FORBIDDEN
            )
        serializer=BlogSerializer(blog,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    if request.method=='DELETE':
        if blog.visibility!='public' and blog.author!=request.user:
            return Response(
                {'deatail':'permission denied'},
                status=status.HTTP_403_FORBIDDEN
            )
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)