from django.db.models import Min, Max
from rest_framework import serializers

from .models import Shoe, Category


class CategoryListItemSerializer(serializers.ModelSerializer):
    stock = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["id", "name", "slug", "stock"]

    def get_stock(self, obj):
        gender = self.context["gender"]
        return Shoe.objects.filter(categories=obj, gender=gender).count()


class CategoryListSerializer(serializers.Serializer):
    men = serializers.SerializerMethodField()
    women = serializers.SerializerMethodField()

    class Meta:
        fields = ['men', 'women']

    def get_men(self, obj):
        shoes = Shoe.objects.filter(gender="Men")
        categories = Category.objects.filter(shoe__in=shoes).distinct()
        data = CategoryListItemSerializer(categories, many=True, context={"gender": "Men"}).data
        return data

    def get_women(self, obj):
        shoes = Shoe.objects.filter(gender="Women")
        categories = Category.objects.filter(shoe__in=shoes).distinct()
        data = CategoryListItemSerializer(categories, many=True, context={"gender": "Women"}).data
        return data


class ShoeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = ["id", "name", "image", "price", "rate"]


class ShoesMinMaxPriceSerializer(serializers.Serializer):
    min = serializers.SerializerMethodField()
    max = serializers.SerializerMethodField()
    class Meta:
        fields = ["min", "max"]


    def get_min(self, obj):
        return Shoe.objects.aggregate(Min('price'))['price__min']

    def get_max(self, obj):
        return Shoe.objects.aggregate(Max('price'))['price__max']
