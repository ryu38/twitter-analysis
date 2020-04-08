# description
Do regression analysis for number of followers and like of some tweets related to specific topics for acquiring popular tweets and make the list of them on website from the result.
Currently, the topic is Splatoon!

### buzzclip
the name of Django project. It contains settings.py.

### mainapp
Django application that handles data and passes it to React through API.
It also contain the analysis script named "analyzer.py" that works like referred to in description.

### frontend
React application. in App.js, React takes data of tweets from API and embed them.

## analysis method
Code shown as below is performed under analyzer.py 
~~~
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('tweet_data.csv')
df = df[df["followers"] != 0].sort_values("followers")

x = df["followers"]
y = df["fav"]

plt.plot(x, y, "o")

def reg1dim(x, y):
    n = len(x)
    a = ((np.dot(x, y)- y.sum() * x.sum()/n)/
        ((x ** 2).sum() - x.sum()**2 / n))
    b = (y.sum() - a * x.sum())/n
    return a, b

a, b = reg1dim(x, y)

print(a)
print(b)

plt.plot(x, a * x + b)

plt.xscale('log')
plt.yscale('log')
plt.xlabel('follower')
plt.ylabel('favorite')
plt.grid(which='both')
~~~
![follower-favorite](./followers-favs.png)
