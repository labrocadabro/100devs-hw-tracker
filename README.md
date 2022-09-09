# 100Devs Homework Tracker

This is a homework tracker for the [#100 Devs Academy training course](https://leonnoel.com/100devs/). The tracker uses localStorage to keep track of checkbox status, so as long as you keep using the same browser, your completions will be tracked.

**Link to live tracker:** [#100Devs homework tracker](https://labrocadabro.github.io/100devs-hw-tracker/)

![Image of the homework tracker](https://labrocadabro.github.io/100devs-hw-tracker/site-prewview.png)

## How It's Made:

**Built with:** HTML, CSS, and JavaScript

The project is primarily HTML and CSS. The essential Javascript is the storage of checkbox checked/unchecked status in localStorage, since without that users would not be able to keep track of their progress. 

In addition, I added some Javascript to keep track of the completed status of individual classes. When all homework is checked off for a particular class, the class is faded to indicate that it has been completed, giving visual feedback and making it easier to scroll through the list and spot incomplete homework. It is also possible to mark an entire class complete or incomplete with a single checkbox, which is useful for anyone who starts using the tracker after they have completed some of the homework.

## Optimizations

- hide completed
- backup and load completion status
- optional tracking of push work
- improve the tooltips

## Lessons Learned:

The main lesson I learned from this project is: keep in mind future maintainability from the beginning, especially for a project that requires frequent updates. I made the tracker before the classes had completed, and the process of adding new homework is cumbersome, but I don't want to introduce any breaking changes that would affect current users. If I had spent more time in the beginning considering what the updating process would involve, I would have opted for a database and HTML template.










