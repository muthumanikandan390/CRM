from django.urls import path,include
from .views import BalanceRentalModelViewSet
from rest_framework import routers

# from .views import *
router = routers.DefaultRouter()
router.register(r'crmapp', BalanceRentalModelViewSet , basename='BalanceRentalModel')
urlpatterns = [

        path('', include(router.urls)),

]