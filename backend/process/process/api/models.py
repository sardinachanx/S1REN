from django.db import models

# Create your models here.

from django.db import models


class Keyword(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    longitude = models.DecimalField(decimal_places=8, max_digits=20)
    latitude = models.DecimalField(decimal_places=8, max_digits=20)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=3)

    def __str__(self):
        return "(" + self.name + ", " + self.type + self.longitude + ", " + self.longitude + ", " \
               + self.city + "," + self.state + ")"


class RescueRequest(models.Model):
    cluster_id = models.IntegerField()
    longitude = models.DecimalField(decimal_places=8, max_digits=20)
    latitude = models.DecimalField(decimal_places=8, max_digits=20)
    message = models.CharField(max_length=280)
    time = models.CharField(max_length = 250)

    def __str__(self):
        return "(" + self.cluster_id.__str__() + ", " + self.longitude + ", " + self.latitude + ", " + \
               self.message + self.time + ")"
