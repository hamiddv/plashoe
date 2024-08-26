from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Shoe
from .serializers import CategoryListSerializer, ShoeListSerializer, ShoesMinMaxPriceSerializer


class CategoryListAPIView(APIView):
    def get(self, request):
        serializer = CategoryListSerializer(data={})
        if serializer.is_valid():
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShoeListAPIView(ListAPIView):
    serializer_class = ShoeListSerializer

    def get_queryset(self):
        gender = self.kwargs.get('gender')
        category = self.request.query_params.get('category', None)
        name = self.request.query_params.get('name', None)
        min_price = self.request.query_params.get('minPrice', None)
        max_price = self.request.query_params.get('maxPrice', None)

        if gender.lower() == "men" or gender.lower() == "women":
            queryset = Shoe.objects.filter(gender="Men")

        else:
            queryset = Shoe.objects.all()

        if category:
            queryset = queryset.filter(categories__slug=category)

        if name:
            queryset = queryset.filter(name__icontains=name)

        if min_price and max_price:
            queryset = queryset.filter(price__gt=min_price, price__lte=max_price)

        return queryset


class ShoesMinMaxPriceAPIView(APIView):
    def get(self, request):
        serializer = ShoesMinMaxPriceSerializer(data={})
        if serializer.is_valid():
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
