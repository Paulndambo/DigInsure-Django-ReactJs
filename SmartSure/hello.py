import json

with open("data.json", "r") as file:
    data = json.load(file)

    for x in data:
        print(x)