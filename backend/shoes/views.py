from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Category
from .serializers import CategoryListSerializer


class CategoryListAPIView(APIView):
    def get(self, request):
        serializer = CategoryListSerializer(data={})
        if serializer.is_valid():
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

