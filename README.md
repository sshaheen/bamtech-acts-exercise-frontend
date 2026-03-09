# Astronaut Career Tracking System (ACTS) Frontend

## Description

The Astronaut Career Tracking System (ACTS) Frontend gives user a simple UI for interacting with the ACTS backend.  
This allows user to do the following actions:

- Create a 'Person'
- Get all people
- Get a person by name
- Create an astronaut duty for a person
- Get the astronaut duties by a astronaut's name

## Architecture

I built this project using Angular. It contains several standalone components that work together to build the User Interface.  
This project makes the use of the RouterOutlet to render components conditionally based on the given url.

### Routes

There are 5 main routes used in this application.

- 'people'
  - Renders the GetAllPersons component.
- 'search-person'
  - Renders the SearchPerson component.
- 'create-person'
  - Renders the CreatePerson component.
- 'create-astronaut'
  - Renders the CreateAstronaut component.
- 'search-astronaut'
  - Renders the SearchAstronaut component.

### Components

#### App Component

The app component houses the overall structure of the application.  
The main components used within the app component are:

- The header component
- The navbar component
- The router outlet component

#### GetAllPersons Component

- The GetAllPersons component is responsible for grabbing all persons from the REST API and rendering them.
- On initialization, a GET request is made to the '/person' endpoint of the API and the retrieved persons are stored in a persons array.
- This component utilizes the DisplayPerson component to render each person from the retrived array of persons in a for loop.

#### SearchPerson Component

- The SearchPerson component is responsible for grabbing a specific person by name from the REST API and rendering it to the user.
- The SearchPerson component has a small form which triggers a getPerson() method to grab a single person by name from the backend.
- A Display Person component is conditionally rendered if there has been no error and a person has been found for the given name.

#### CreatePerson Component

- The CreatePerson component is responsible for creating a person in the database with a given name.
- The CreatePerson has a basic form with one input (name) and a submit button.
- Upon submission the form triggers a method to send a post request to the API.

#### CreateAstronaut Component

- The CreateAstronaut component is responsible for creating an astronaut duties record in the database for a person with the given name.
- The CreateAstronaut component has a form with a name, rank, duty title, and duty end date inputs.
- Upon submission of the form, the createAstronaut() method is called which submits a post request to the backend with the given astronaut info.

### SearchAstronaut Component

- The SearchAstronaut component is responsible for searching for an astronaut and their duties based on a given name.

## Usage

run npm install  
run npm start  
run the api in combination (make sure to set up the database first)
