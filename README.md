# Cars-Shop
Cars Shop is my individual project for Angular Fundamentals - July 2018

The Application is implemented with Firebase and Angular

## General Requirements
#### Cars Shop application should use the following technologies, frameworks and development techniques:
* At least 5 different dynamic pages (pages like about, contacts, sign in, sign up do not count towards that figure). If your project doesn’t cover this condition you will not be graded.
* Use Angular for the client-side
* Communicate to a remote service (via REST, sockets, GraphQL, or a similar client-server technique).
* Implement authentication and user roles
* Demonstrate use of programming concepts, specific to the Angular framework: components, decorators,   data binding, dependency injection, observables, handling forms (template-driven or reactive), interceptors, router, guards to block access to certain routes and other.
* Brief documentation on the project and project architecture (as .md file)

## Additional requirements
* Apply error handling and data validation to avoid crashes when invalid data is entered
* Prevent security exploits (XSS, XSRF, Parameter Tampering, etc.)
* Handle correctly special HTML characters and tags
* Use a source control system, like GitHub
* Use responsive design – Bootstrap, MDL, CSS Grids or another method of your choice
* Nice looking UI, supporting of all modern and old Web browsers
* Good usability (easy to use UI)
* Deploy the application in a cloud environment
* Use Angular Animations somewhere in your application
* Anything that is not described in the assignment is a bonus if it has some practical use
  
## The application should have:
* Public part (accessible without authentication)
* Private part (available for registered users)
* Administrative part (available for administrators only)

## Database Structure And Logic

### Tables
#### Car
* Id, Maker, Model, Condition, Color, Transmission, YearOfProduction, Kilometers, Price, ImageUrl

#### Part
* Id, Maker, Model, Price, Condition, ImageUrl

## Business Logic of the application
### Three types of users:
* Anonymous (not registered and not logged in user)
* Logged in users
* Administrator

### Logged in users are able to
* Create cars for sale (Full CRUD on it)
* Create parts for a product (Full CRUD on it)
* Buy cars and parts

### Administrators are able to
* See Admin panel - Can delete all users, full CRUD on cars and parts

### Deadline
* Project should be completed before 26 August 2018
