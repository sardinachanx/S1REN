from django.db import models

# Create your models here.

from django.db import models


class Cluster(models.Model):
    cluster_id = models.IntegerField()

    def __str__(self):
        return str(self.cluster_id)


class Keyword(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    longitude = models.DecimalField(decimal_places=8, max_digits=20)
    latitude = models.DecimalField(decimal_places=8, max_digits=20)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=3)

    def __str__(self):
        return "(" + self.name + ", " + self.type + self.longitude.__str__() + ", " + self.longitude.__str__() + ", " \
               + self.city + "," + self.state + ")"


class RescueRequest(models.Model):
    cluster = models.ForeignKey(Cluster, on_delete=models.CASCADE, default=1, related_name="rescue_requests")
    longitude = models.DecimalField(decimal_places=8, max_digits=20)
    latitude = models.DecimalField(decimal_places=8, max_digits=20)
    message = models.CharField(max_length=280)
    time = models.CharField(max_length = 250)

    def __str__(self):
        return "(" + self.cluster.__str__() + ", " + str(self.longitude) + ", " + str(self.latitude) + ", " + \
               self.message + ", " + self.time + ")"


class FirstResponders(models.Model):
    num = models.IntegerField(max_length= 10000)

    def __str__(self):
        return self.num.__str__()
