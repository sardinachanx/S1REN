from process.process.api.models import Keyword
import requests
import json

GOOGLE_API_KEY = "AIzaSyB35O5seLPZMk-AeFeXqUJopqWhz_dhbuQ"


class Tweet:
    message = ""
    hashtags = []
    longitude = 0.0
    latitude = 0.0
    city = ""
    state = ""

    def __init__(self, status):
        self.message = status.text
        temp = status.entities.hashtags
        for s in temp:
            self.hashtags.append(s.text)
        if ~status.geo_enabled or status.place is None:
            for k in Keyword.objects.all():
                if k.city in self.message:
                    self.city = k.city
                    r = json.loads(requests.get("https://maps.googleapis.com/maps/api/geocode/json?address=" +
                                                self.city.replace(' ', '+') + "&key=" + GOOGLE_API_KEY))[
                        "results"][0]["geometry"]["location"]
                    self.longitude = r["lng"]
                    self.latitude = r["lat"]

        else:
            if status.coordinates is None:
                full = status.place.full_name.split(', ')
                self.city = full[0]
                self.state = full[1]
                r = json.loads(requests.get("https://maps.googleapis.com/maps/api/geocode/json?address=" +
                                            self.city.replace(' ', '+') + "," + self.state + "&key=" + GOOGLE_API_KEY))[
                    "results"][0]["geometry"]["location"]
                self.longitude = r["lng"]
                self.latitude = r["lat"]
            else:
                self.longitude = status.coordinates[0]
                self.latitude = status.coordinates[1]

    def should_classify(self):
        for k in Keyword.objects.all():
            if abs(self.longitude - k.longitude) <= 3.0 and abs(self.latitude - k.latitude) <= 3.0:
                return True
        return False
