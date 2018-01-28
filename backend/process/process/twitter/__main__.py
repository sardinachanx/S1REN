import tweepy, time, sys
import tweet

def main():
  argfile = str(sys.argv[1])
 
  #enter the corresponding information from your Twitter application:
  CONSUMER_KEY = 'Io8klJsWfp4y7W6EnwcPwNWRu'#keep the quotes, replace this with your consumer key
  CONSUMER_SECRET = 'yVUlmc4yolUHXFeZuHx0N1cUIxfoSaTKDYc0gNlp77qttnNVah'#keep the quotes, replace this with your consumer secret key
  ACCESS_KEY = '863842944-tfqDosoZ5gdidnH6uxAOHnrenFdFtJC9wv3vGyzp'#keep the quotes, replace this with your access token
  ACCESS_SECRET = 'VfXDlzdHuaqgpEbkwOseKawQaZ80Ur7GbQovAfEN49Uex'#keep the quotes, replace this with your access token secret
  auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
  auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
  api = tweepy.API(auth)
 
  filename=open(argfile,'r')
  f=filename.readlines()
  filename.close()


  i = 0; 
  for line in f:
    api.update_status(line)
    time.sleep(900)#Tweet every 15 minutes
    test = Tweet(api.get_status(i));
    i += 1;
    #print(Tweet.longitude);

if  __name__ =='__main__':main()

