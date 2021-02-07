# inventory-tracker

## Screenshot
- Main Dashboard

![](https://user-images.githubusercontent.com/8880285/107141031-2e4a8a00-694c-11eb-838a-a008c7bddf6b.png)

- Add Item


![](https://user-images.githubusercontent.com/8880285/107141028-2d195d00-694c-11eb-82dc-88e0d4650601.png)

# Technology Stacks
**Backend**
  - Java 11
  - Spring Boot 2.4.2
  - Spring Data Rest
  - Hibernate
  - H2
  - Maven

**Frontend**
  - Angular
  - Angular CLI
  - Bootstrap


## How to  Run

Start the backend server before the frontend client.  

**Backend**

  1. Configure datasource in `application.properties`.H2 is used as default can be switched to Mysql by uncommenting properties for Mysql
  2. `cd inventory-tracker`.
  3. Run `mvn install`.
  4. Run `mvn spring-boot:run`.
  5. Spring Boot will import mock data into database by executing `import.sql` automatically.
  6. The backend server is running on [localhost:8080]().

**Frontend**
  1. Install [Node.js and npm](https://www.npmjs.com/get-npm)
  2. `cd frontend`.
  3. Run `npm install`.
  4. Run `ng serve`
  5. The frontend client is running on [localhost:4200]().
  
Note: The backend API url is configured in `src/environments/environment.ts` of the frontend project. It is `localhost:8080/api` by default.

 Build fontend project
  1. cd frontend
  2. npm install
  3. ng serve

