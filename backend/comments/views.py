from .serializer import CommentsSerializer
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from .models import Comment
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def comment_view(request,blog_id):
    if request.method=='GET':
        comments=Comment.objects.filter(commented_on_id=blog_id)
        serializer=CommentsSerializer(comments,many=True)
        return Response(serializer.data)
    elif request.method=="POST":
        serializer=CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(
                commented_by=request.user,
                commented_on_id=blog_id
            )
            return Response({'detail':'comment added'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors)