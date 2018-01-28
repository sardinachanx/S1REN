from rest_framework import viewsets
from .models import Keyword, RescueRequest, Cluster, FirstResponders
from .serializers import KeywordSerializer, RescueRequestSerializer, ClusterSerializer, FirstRespondersSerializer
from process.machinelearning import cluster
from rest_framework.response import Response


# Create your views here.

class KeywordViewSet(viewsets.ModelViewSet):
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer


class RescueRequestViewSet(viewsets.ModelViewSet):
    queryset = RescueRequest.objects.all()
    serializer_class = RescueRequestSerializer


class ClusterViewSet(viewsets.ModelViewSet):
    queryset = Cluster.objects.all()
    serializer_class = ClusterSerializer

    def destroy(self, request, *args, **kwargs):
        super().destroy(self, request, args, kwargs)
        cluster.label_coordinates_rr(FirstResponders.get_latest_by.num)


class FirstResponderViewSet(viewsets.ModelViewSet):
    queryset = FirstResponders.objects.all()
    serializer_class = FirstRespondersSerializer

    def update(self, request, *args, **kwargs):
        super().update(self, request, args, kwargs)
        cluster.label_coordinates_rr(FirstResponders.get_latest_by.num)
