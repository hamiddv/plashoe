from django.urls import path

from . import views

urlpatterns = [
    path('category-list/', views.CategoryListAPIView.as_view(), name='shoe_list'),
]