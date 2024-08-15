from rest_framework import serializers

from .models import Shoe, Category


class CategoryListItemSerializer(serializers.ModelSerializer):
    stock = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["name", "slug", "stock"]

    def get_stock(self, obj):
        gender = self.context["gender"]
        return Shoe.objects.filter(categories=obj, gender=gender).count()


class CategoryListSerializer(serializers.Serializer):
    men = serializers.SerializerMethodField()
    women = serializers.SerializerMethodField()

    class Meta:
        fields = ['men', 'women']



    def get_men(self, obj):
        shoes = Shoe.objects.filter(gender="Male")
        categories = Category.objects.filter(shoe__in=shoes).distinct()
        data = CategoryListItemSerializer(categories, many=True, context={"gender": "Male"}).data
        return data

    def get_women(self, obj):
        shoes = Shoe.objects.filter(gender="Female")
        categories = Category.objects.filter(shoe__in=shoes).distinct()
        data = CategoryListItemSerializer(categories, many=True, context={"gender": "Female"}).data
        return data
