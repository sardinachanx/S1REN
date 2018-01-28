from rest_framework import viewsets
from .models import Keyword, RescueRequest, Cluster, FirstResponders
from .serializers import KeywordSerializer, RescueRequestSerializer, ClusterSerializer, FirstRespondersSerializer


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


class FirstResponderViewSet(viewsets.ModelViewSet):
    queryset = FirstResponders.objects.all()
    serializer_class = FirstRespondersSerializer
