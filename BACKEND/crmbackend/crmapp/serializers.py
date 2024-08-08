from rest_framework import serializers

from .models import BalanceRentalModel


class CrmappSerializer(serializers.ModelSerializer):

  class Meta:
    model = BalanceRentalModel
    fields = "__all__"
