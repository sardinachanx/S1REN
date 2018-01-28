import tweepy
import queue
from api.models import Keyword

TWITTER_APP_KEY = "2MehiMXWgAKNrJ7fjZG4SuZOB"
TWITTER_APP_SECRET = "ho98SNkG2fSwkIOvTT2jBqHBWHZVywZstbOmG7CyrTBOWObhMu"
TWITTER_KEY = "946969592466829312-3R9HHXP7IkrP4f0ZFNeBPxBvAjissvz"
TWITTER_SECRET = "7nsIbm9lDZKtiQKrCi66Ru2uyDOJ6YCR6c9Yes9Ci6eJK"

blocking_queue = queue.Queue()


class Streamer:
    auth = None
    api = None
    stream_listener = None
    stream = None

    def __init__(self):
        self.auth = tweepy.OAuthHandler(TWITTER_APP_KEY, TWITTER_APP_SECRET)
        self.auth.set_access_token(TWITTER_KEY, TWITTER_SECRET)
        self.api = tweepy.API(self.auth)
        self.stream_listener = StreamListener()
        self.stream = tweepy.Stream(self.api.auth, self.stream_listener)

    def start(self):
        keys = Keyword.objects.all()
        search = []
        for key in keys:
            search.append(key.name)
            search.append(key.type)
        self.stream.filter(track=search, async=True)


class StreamListener(tweepy.StreamListener):

    def on_error(self, status_code):
        if status_code == 420:
            return False

    def on_data(self, data):
        blocking_queue.put(data)
        return True
