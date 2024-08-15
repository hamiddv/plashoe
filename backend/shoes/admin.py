from django.contrib import admin

from .models import Shoe, Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    fields = ["name", "slug", "create_date", "update_date"]
    readonly_fields = ["create_date", "update_date", "slug"]


@admin.register(Shoe)
class ShoeAdmin(admin.ModelAdmin):
    list_display = ("name",)
    fields = ("gender", "name", "description", "stock", "free_shipping", "categories", "create_date", "update_date")
    readonly_fields = ["create_date", "update_date"]
