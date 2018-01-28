from rest_framework import serializers
from .models import Keyword, RescueRequest, Cluster


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ('id', 'name', 'type', 'longitude', 'latitude', "city", "state")


class ClusterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cluster
        fields = ('id', 'cluster_id')


class RescueRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RescueRequest
        fields = ('id', 'cluster', "longitude", "latitude", "message", "time")
