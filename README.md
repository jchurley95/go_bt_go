# GOBTGO
##### Built using React + Rails, Postgres
![gobtgo home](https://user-images.githubusercontent.com/28677283/30530949-f346afaa-9c18-11e7-8e96-a2fadbbf5e95.png)

## About the App

##### Built as my capstone project for General Assembly's Web Development Immersive program.

  The High School I attended operates on a House System, where students are sorted into one of 8 houses upon registering with the school. House members can earn points for their house by attending certain "Marquee" events throughout the year. For example, a Junior Varsity basketball game might have a packed student section if it is selected to be a "Marquee Event," and the school has tried various systems of counting these points. Originally, a sign up sheet would be passed around the student section, but this method did not provide any verification of actual attendence by a student, and points had to be tallied one at a time by hand. Currently, students drop their physical student ID in a box to verify their attendence at an event, which is still a flawed system prone to human error. 
  
  Currently, this application only provides a platform for students to keep up with the house leaderboard, upcoming house point events, and it also allows for an administrator to create, edit, and delete events from the database. This satisfies the project requirements, now the goal is to rebuild the app in React Native, in the process adding a barcode verification system between the house members and events.

## ERD 

![gobtgo erd](https://user-images.githubusercontent.com/28677283/30530947-f3405aa6-9c18-11e7-9bc8-f0a899594a19.png)

* Houses are broken down into Families (similar to homerooms)
* Families are broken down into their individual students
* Families inherit their points from their students
* Houses inherit their points from their families
* In future developments, there will probably exist a many-to-many relationship between Users and Events through an Attendence join table

## Wireframes

![img_0711](https://user-images.githubusercontent.com/28677283/30531790-801eb3fa-9c1e-11e7-8292-1ecc47a10f53.JPG)

![img_0710](https://user-images.githubusercontent.com/28677283/30531791-8022a122-9c1e-11e7-9711-f3b4f75d9e22.JPG)

## Cool Features

#### Spinning Scoreboard

* Built by manipulating CSS transform properties (rotateY degrees) using react State

![gobtgo spinner](https://user-images.githubusercontent.com/28677283/30530948-f3457b4e-9c18-11e7-9170-369778602e43.png)

#### Admin View

* If type_of_user of the current user is "admin", they have full CRUD control over events

![screen shot 2017-09-18 at 2 35 03 am](https://user-images.githubusercontent.com/28677283/30531119-129551e4-9c1a-11e7-80f3-575ffa389e06.png)
![screen shot 2017-09-18 at 2 35 19 am](https://user-images.githubusercontent.com/28677283/30531120-129e335e-9c1a-11e7-847a-f6be4318b69a.png)

## Future Developments

* Convert to React Native
* Add barcode generator for events/scanner for event attendees

Trello: https://trello.com/b/suOp7k8k/wdi-capstone-gobtgo
