# Hangman 
A simple take on the classic guessing game hangman. This verison has a single category where the player has 6 chances to guess which english premier leauge team that is the hidden word. The games rules and task is easy to understand and has a simple gallow picture that updates if the player answers wrong. Upon six wrong answers the full gallow picture is represented on the screen and the player can chose to start over again with a new randomly selcted team.

### Content
[Features](#section-1)

[Design](#section-2)

[Technologies Used](#section-3)

[Testing](#section-4)

[Deployment](#section-5)

[Credits](#section-6)


------

## <a name="section-1"></a> Features

### Hangman image
The hangman image starts out with a images of an empty gallow, when the player chose a letter that is not in the hidden word the images updates one bodypart at per wrong answer. The image was selected for its stickman style to keep it playful and not draw so much attention to some what macabre nature of the games name and the imagary tide to it.     

### Hidden word and keyboard  
The games hidden word appears represented by blank lines in the center of the screen. The amount of lines represens the amount of letters in the randomly selected word. The keyboard serves as a clickable keyboard. When the player click a letter it gets inactivated, if the letter was a part of the hidden word it appears in its correct place on the dotted line, if the letter was not in the word one chance is subtracted from the total amount of trys avavlible to the player.

### Reset button
The reset button dose pretty much what it says in the tin. It reverts back to the original state of the page, ie it resets the players chances, brings back the original gallow image, activates all the keyboard buttons and selects a new random team for the player to guess.

### Hint button 
If the player gets stuck they can use the hint button. The hint button triggers an alert to the player with a hint that consists of the hidden teams homestadium. 

## <a name="section-2"></a> Design
### Imagery, Colour Scheme and Fonts
Design choices was kept to a minum in order to focus on maximazing practising javascript. The -apple-system font style was chosen from personal preference as was the background color. 



![mainimg](https://user-images.githubusercontent.com/93250649/169667168-9af52650-0851-4afa-ad4a-2d1dfa73b31e.JPG)



## <a name="section-3"></a> Technologies Used
### Languages Used

-HTML5

-CSS3

-JavaScript 

### Frameworks, Libraries & Programs Used

Git: was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.

GitHub: is used as the respository for the projects code after being pushed from Git.



## <a name="section-4"></a> Testing
Testing of HTML done via https://validator.w3.org/
![htmlvalidator](https://user-images.githubusercontent.com/93250649/169666971-2a0c180e-6514-4748-9938-b278f81d5102.JPG)

All pages pass without errors or warnings

Testing of CSS done via https://jigsaw.w3.org/css-validator/
![cssvalidator](https://user-images.githubusercontent.com/93250649/169666907-f39c9ec2-bb36-4c77-8400-b708ea088bdc.JPG)

All pages pass without errors or warnings

Testing of JavaScript was done via https://jshint.com/

Code passes without any Errors but with 15 warnings regarding syntax in ES6

Lighthous testing: 



## <a name="section-5"></a> Deployment
The project was deployed via GitHub pages 

Link to the page: 
## <a name="section-6"></a> Credits

### Code

### buildKeyboard function
Code idea and implementaion by https://www.youtube.com/c/SimonSuhOnline

and www.w3schools.com

### playerGuess function 
Code idea and implementaion by https://www.youtube.com/c/SimonSuhOnline



### Media

Images from http://www.pexels.com

