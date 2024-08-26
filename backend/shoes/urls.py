from django.urls import path

from . import views

urlpatterns = [
    path('category-list/', views.CategoryListAPIView.as_view(), name='shoe_list'),
    path("shoes-list/<str:gender>/", views.ShoeListAPIView.as_view(), name='shoe_list'),
    path('shoe-min-max-price/', views.ShoesMinMaxPriceAPIView.as_view(), name='min-max-price'),
]