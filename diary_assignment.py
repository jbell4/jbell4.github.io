""" Created by Jeff Bell 2020"""

""" Teacher Note: This assignment is given first, then after one day allow them to watch 
and buiild the appropriate application using this video: https://youtu.be/ThXuBdzfW7A """

"""Extensions to be added for students who are 'faster' such as multiple user log ins."""







"""here are some hints that you should use for today's task"""

# What does this line of code do?

import datetime

# What do the next two lines of code do?

date = datetime.datetime.now()
print(date)

# What do the next bit of lines do? 
# If you do not know, research on the internet "writing files in python"


f = open('', 'a') #what do the different options for 'a' do? (a is what we need today) 		

f.write('')

f.close()


""" 
																- - -  TASK - - -

Your task is to create a virtual diary program. 

You must create a function. 

You must gather user input with each entry, and keep the date with each post in the diary. 

You need to keep all of this infomation on a text file that is updated each time you write a new post. 

																	- - - BONUS - - -

1) Summarize all words in your diary, and create a program that counts the number of times each word is typed. 

2) When the user inputs a post, if there are noticable sad or happy words, react to the input post somehow. (Happy input shows green, Sad shows red. Perhaps a sound could work here)

"""

