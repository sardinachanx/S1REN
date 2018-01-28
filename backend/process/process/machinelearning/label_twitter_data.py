import json

def __init__():
    

class Help:
   text = ""
   needs_help = 'no'
   power = 'no'
   gas = 'no'
   flood = 'no'
   damage = 'no'
   water = 'no'

def label_data(json_data):
   gas = ["gas station", "no gas", "no heat", "gasstation", "nogas", "noheat"]
   water = ["no water"]
   not_damage = ["no damage", "minor damage", "nodamage", "minordamage"]

   flood = ["flood", "flooding", "flooded"]
   not_flood = ["minor flooding", "no flooding", "minorflooding", "noflooding"]

   electricity = ["no power", "no electricity", "no generator", "nopower", "noelectricity", "nogenerator", "black out", "blackout"]

   text_labels = []
   text_labels = [Help() for i in range(86017)]

   d = json.load(json_data)
   count = 0
   number_of_yes = 0
   for k,v in d.items():
      if k[0] != "test":
         if isinstance(v,dict):
            text_labels[count].text = v["text"]
            #print(count, v["text"])

            if any(x in v["text"] for x in gas):
               text_labels[count].gas = "yes"
            if(any(x in v["text"] for x in electricity)):
               text_labels[count].power = "yes"
            if("damage" in v["text"] and not(any(x in v["text"] for x in not_damage))):
               text_labels[count].damage = "yes"
            if(any(x in v["text"] for x in flood) and not(any(x in v["text"] for x in not_flood))):
               text_labels[count].flood = "yes"
            if("yes" in [text_labels[count].power,  text_labels[count].gas,  text_labels[count].flood,  text_labels[count].damage]):
               text_labels[count].needs_help = "yes"
               number_of_yes += 1
            else:
               text_labels[count].needs_help = "no"

            count += 1

   print(number_of_yes)
   return text_labels
