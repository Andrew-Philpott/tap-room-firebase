<div align=center>

# Tap Room

#### By **Andrew Philpott**

[About](#About) | [User Stories](#User-Stories) | [Setup/Installation Requirements](#Setup/Installation-Requirements) | [Bugs](#Known-Bugs) | [Technologies](#Technologies-Used) | [Contact](#Support-and-Contact-Details)

</div>

## About

This is a web application to practice using firebase to handle state in React. The application keeps track of the different beers offered at Tap House, displaying beer price, number of pints, flavors, aromas, and other stats. Full CRUD operation is available to all users.

## User Stories

- As a user, I want to see a list/menu of all available beers. For each beer, I want to see its name, brand, price and alcoholContent.
- As a user, I want to submit a form to add a new beer to a list.
- As a user, I want to be able to click on a beer to see its detail page.
- As a user, I want to see how many pints are left in a keg.
- As a user, I want to be able to click a button next to a beer whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.
- As a user, I want the option to edit a beer's properties after entering them just in case I make a mistake.
- As a user, I want to be able to delete a beer.
- As a user, I want a beer to update to say "Out of Stock" once it's empty.
- As a user, I want beers with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone!
- As a user, I want this application to be nicely styled.
  Objectives
- As a user, I want to have beer prices to be color-coded for easy readability. This should be based on their price.

## Setup/Installation Requirements

- _Clone this repository._
- _Navigate to tap-room directory_
- _\$npm install to download dependencies_
- _[Create a firebase database](https://firebase.google.com/?gclid=Cj0KCQjwn7j2BRDrARIsAHJkxmyL64udoYEABQbakO1VFWHbE-hVh2wCaxCYfu2QSn18wSr-A5KMnocaAi6gEALw_wcB)_
- _Enable user authentication for your database_
- _Create a .env file with the constants REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_DATABASE_URL, REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_MESSAGING_SENDER_ID, REACT_APP_FIREBASE_APP_ID equal to the strings provided for your database._
- \$npm run start to run the application\_
- _Application will run on localhost:3000_

## Known Bugs

No known bugs at this time.

## Technologies Used

- HTML
- CSS
- JavaScript
- Material UI
- Bootstrap
- React
- Firebase

## Support and Contact Details

Feel free to provide feedback via email: andrewphilpott92@gmail.com

### License

This application is licensed under the MIT license.

Copyright (c) 2020 **Andrew Philpott**
