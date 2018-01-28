from django.contrib import admin
from .models import Keyword, RescueRequest, Cluster, FirstResponders
# Register your models here.
admin.site.register(Keyword)
admin.site.register(RescueRequest)
admin.site.register(Cluster)
admin.site.register(FirstResponders)
