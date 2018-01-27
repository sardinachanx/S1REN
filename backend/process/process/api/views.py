from rest_framework import viewsets
from .models import Disaster
from .serializers import DisasterSerializer


# Create your views here.

class DisasterViewSet(viewsets.ModelViewSet):
    queryset = Disaster.objects.all()
    serializer_class = DisasterSerializer
