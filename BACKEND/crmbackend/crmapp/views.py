from django.shortcuts import render
from .models import BalanceRentalModel
from django.shortcuts import get_object_or_404
from crmapp.serializers import CrmappSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

# Create your views here.


class BalanceRentalModelViewSet(viewsets.ViewSet):

    def list(self , request ):
        queryset = BalanceRentalModel.objects.all()
        serializer = CrmappSerializer( queryset , many = True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'] )
    def product_count(self, request):
        product_count = BalanceRentalModel.objects.count()
        return Response({'product_count': product_count})

    @action(detail=False, methods=['get'] , url_path='product-detail/(?P<pk>[^/.]+)' )
    def specified_product(self, request , pk = None):
        specified_product = BalanceRentalModel.objects.get(pk=pk)
        serializer = CrmappSerializer(specified_product)
        return Response(serializer.data)










    # @action(detail=False, methods=['get'] )
    # def product_count(self, request):
    #     user_count = BalanceRentalModel.objects.count()
    #     return Response(user_count)
