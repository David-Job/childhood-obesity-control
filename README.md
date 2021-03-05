## Childhood Obesity Control
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Data Model](#data-model)
4. [Installation](#installation)
### General Info
***
A full-stack application that tracks anthropometric data taken from primary school students, and visualizes them in a clear way to ease the efforts put in tackling the problem of childhood obesity
## Technologies
***
A list of technologies used within the project:
 * [MySQL](https://www.mysql.com/): Version 10.1.40
 * [Node.js](https://nodejs.org/es/): Version 14.15.1 LTS
 * [Sequelize ORM](https://sequelize.org/): Version 6
 * [Ionic](https://ionicframework.com/): Version 5
 * [Angular](https://angular.io/): Version 10
## Data Model
### Diagrams
* Use cases
* Entity-Relationship
* Classes
### Relational Model
* User ( __userId__, firstName, surname1, surname2, email, password )
* Institution ( __institutionId__, name, physicalAddress, province, latitude, longitude )
* Teacher ( __teacherId__, _userId_, _institutionId_ )
* Student ( __stutentId__, _userId_, _institutionId_, _teacherId_ )
* Anthropometrics( __antropometricsId__, _studentId_, height, weight, birthDate )
## Installation
***
### Prerequisites
You will need to install this software in your system:
* [MySQL](https://dev.mysql.com/downloads/)
  * Optionally, you can install [Docker](https://docs.docker.com/get-started/) and download the [MySQL image](https://hub.docker.com/_/mysql?tab=tags&page=1&ordering=last_updated))
* [Node.js](https://dev.mysql.com/downloads/)
