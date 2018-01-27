from rest_framework import viewsets
from .models import Keyword, RescueRequest
from .serializers import KeywordSerializer, RescueRequestSerializer


# Create your views here.

class KeywordViewSet(viewsets.ModelViewSet):
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer


class RescueRequestViewSet(viewsets.ModelViewSet):
    queryset = RescueRequest.objects.all()
    serializer_class = RescueRequestSerializer
