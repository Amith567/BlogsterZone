from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Like
from blogs.models import Blog

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def toggle_like(request,blog_id):
    try:
        blog=Blog.objects.get(id=blog_id)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    like=Like.objects.filter(user=request.user,blog=blog).first()
    if like:
        like.delete()
        return Response({'message':'like removed'},status=status.HTTP_200_OK)
    else:
        Like.objects.create(user=request.user,blog=blog)
        return Response({'message':'liked'},status=status.HTTP_201_CREATED)