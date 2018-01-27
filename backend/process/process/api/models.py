from django.db import models

# Create your models here.

from django.db import models


class Disaster(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)

    def __str__(self):
        return "(" + self.name + ", " + self.type + ")"


class ClusterPacket(models.Model):
    cluster_size = models.IntegerField()

