from nltk.classify import PositiveNaiveBayesClassifier
import json
import math
import process.machinelearning.label_twitter_data as ltd


def features(sentence):
    words = sentence.lower().split()
    return dict(('contains(%s)' % w, True) for w in words)

def get_model():
    new_list = []
    with open('sandy.json') as json_data:
        new_list = ltd.label_data(json_data)
        print(new_list[2].text, new_list[2].power,new_list[2].gas, new_list[2].flood, new_list[2].damage )
        json_data.close()

    positives_and_negatives = [[],[]]
    for i in range(len(new_list)):
        if new_list[i].needs_help == "yes":
            positives_and_negatives[0].append(new_list[i].text)
        else:
            positives_and_negatives[1].append(new_list[i].text)
    #print(positive_featuresets)
    positive_featuresets = list(map(features, positives_and_negatives[0]))
    negative_featuresets = list(map(features, positives_and_negatives[1]))
    classifier = PositiveNaiveBayesClassifier.train(positive_featuresets, negative_featuresets)
    #print(classifier.classify(features('we lost the game')))
    return classifier

'''
positive_featuresets = list(map(features, positives_and_negatives[0]))
negative_featuresets = list(map(features, positives_and_negatives[1]))
classifier = PosotiveNaiveBayesClassifier.train(positive_featuresets, negative_featuresets)
classifier = nltk.PositiveNaiveBayesClassifier.train(train_set)
print(classifier.classify(features('lily caplan is a princess')))

#train_set, test_set = featuresets[500:], featuresets[:500]
positive_featuresets = list(map(features, positives_and_negatives[0]))
negative_featuresets = list(map(features, positives_and_negatives[1]))
print(positive_featuresets)

pos_size = math.floor(len(positive_featuresets))

neg_size = math.floor(len(negative_featuresets))

test_set = [positive_featuresets[0:pos_size],negative_featuresets[0:neg_size]]
train_set = [positive_featuresets[pos_size+1:len(positive_featuresets)],negative_featuresets[neg_size+1:len(negative_featuresets)]]

#featuresets = [(features(object.text), object.needs_help) for object in new_list]
featuresets = list(map(features, new_list))
size = math.floor(len(featuresets))

print(featuresets)
test_set = [featuresets[0:size]]
train_set = [featuresets[size+1:len(new_list)]]
classifier = NaiveBayesClassifier.train(train_set)
print(classifier.classify(features('lily caplan is a princess')))
'''
