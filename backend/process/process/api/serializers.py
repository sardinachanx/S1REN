from rest_framework import serializers
from .models import Keyword, RescueRequest


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ('id', 'name', 'type', 'longitude', 'latitude', "city", "state")


class RescueRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RescueRequest
        fields = ('id', 'cluster_id', "longitude", "latitude", "message")
