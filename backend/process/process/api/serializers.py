from rest_framework import serializers
from .models import Keyword, RescueRequest, Cluster, FirstResponders


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ('id', 'name', 'type', 'longitude', 'latitude', "city", "state")


class ClusterSerializer(serializers.ModelSerializer):
    rescue_requests = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Cluster
        fields = ('id', 'cluster_id', 'rescue_requests')


class RescueRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RescueRequest
        fields = ('id', 'cluster', "longitude", "latitude", "message", "time")


class FirstRespondersSerializer(serializers.ModelSerializer):
    class Meta:
        model = RescueRequest
        fields = ('id', 'num')
