from sklearn.cluster import KMeans
import numpy as np
from process.api.models import RescueRequest


# take json structure and populate list structure with coordinates and text
# put list structure through kmeans, map values as extra key in original json structure

#mapping

def label_coordinates(twitter_objects, first_responders):
    list_of_coordinates = [[tweet.longitude, tweet.latitude] for tweet in twitter_objects]
    # coordinates = [[4, 0],[1, 2], [1, 4], [1, 0],[4, 2], [4, 4]]
    # coordinates = [[1,1],[0,0],[0,0],[0,0],[1,1]]
    kmeans = KMeans(n_clusters=first_responders).fit(list_of_coordinates)
    cluster_id_list = kmeans.labels_
    for i in range(len(twitter_objects)):
        twitter_objects[i].cluster_id = cluster_id_list[i]
    # print(kmeans.labels_) # returns group id in order of input
    # more_points = [[1,2], [3,4]]
    # kmeans.predict(more_points) # returns group ids in order


def label_coordinates(first_responders):
    list_of_coordinates = [[rr.longitude, rr.latitude] for rr in RescueRequest.objects.all()]
    kmeans = KMeans(n_clusters=first_responders).fit(list_of_coordinates)
    cluster_id_list = kmeans.labels_
    i = 0
    for rr in RescueRequest.objects.all():
        rr.cluster_id = cluster_id_list[i]
        i += 1

