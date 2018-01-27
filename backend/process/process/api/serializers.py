from rest_framework import serializers
from .models import Disaster


class DisasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disaster
        fields = ('id', 'name', 'type')
