import tweepy
import queue

TWITTER_APP_KEY = "pHWQfNuX7wZvs3NLPvtCLtKMP"
TWITTER_APP_SECRET = "6ePtPOxlvnXmVBPYtkWNHGKtfJoqpXNErVjH2BG88UPt84NUSc"
TWITTER_KEY = "957227020248903680-og4KXByS6mReMt0SzCBrR9TsMBAQ4S9"
TWITTER_SECRET = "ypG5O3pndqz7wQ82ae6jG3BTvUTrjp24AWWL1MYWFSu6u"

blocking_queue = queue.Queue()


class StreamListener(tweepy.StreamListener):

    def on_status(self, status):
        print(status.text)
        blocking_queue.put(status)

    def on_error(self, status_code):
        if status_code == 420:
            return False


class TwitterStream:
    __auth = {}
    __api = {}
    __stream_listener = {}
    __stream = {}

    def __init__(self):
        self.__auth = tweepy.OAuthHandler(TWITTER_APP_KEY,TWITTER_APP_SECRET)
        self.__auth.set_access_token(TWITTER_KEY, TWITTER_SECRET)
        self.__api = tweepy.API(self.__auth)
        self.__stream_listener = StreamListener()
        self.__stream = tweepy.Stream(auth=self.__api.auth, listener=self.__stream_listener)

    def start(self):
        self.__stream.filter(async=True)
