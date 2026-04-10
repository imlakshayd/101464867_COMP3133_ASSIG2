# Home

## COMP 3133 | Assignment – 2 (16%)

COMP 3133 | Full Stack Development – II

<mark style="color:purple;background-color:orange;">**Submission Deadline: Week 13 – Sunday, 12th April 2026 23:59 PM**</mark>

*This assignment combines a full-stack development project using a variety of popular tools and practices.*

<mark style="color:red;">**Important Note: No extensions will be granted for this assignment, as they may negatively impact other coursework and evaluations.**</mark>

*<mark style="color:orange;">Utilize Angular concepts such as component, services, pipes, directives, Material Design, Bootstrap UI, GraphQL, Axios, Router, and hooks. Research to ensure your work adheres to industry standards. Use screen designs as references.</mark>*

# Assignment

As a Junior Software Engineer, you’ve been tasked with developing a frontend application using Angular. Your goal is to research and implement data fetching via GraphQL within the Angular project. You can leverage the knowledge you gained in the COMP 3133 course at George Brown College.

The project will be maintained in a Git repository named `studentID_comp3133_assignment2`. If you choose to make the repository private, please add me as a collaborator (username: **pritamworld**).

Your evaluation will focus on how well you organize your source code, as well as how effectively you utilize Angular features such as components, data binding, services, pipes, routing, and security.

Use Assignment I as the backend to develop the frontend for Assignment II. At the end, you will deploy both the backend and frontend to a cloud platform of your choice, such as Heroku, Vercel, or Cyclic. Be sure to update the backend as needed to accommodate the frontend requirements.

***

## <mark style="color:purple;">Frontend with Angular</mark>

1. **Application Setup and GitHub repository**
   * Initialize a Angular app named in the specified format (`studentID_comp3133_assignment2`) using `ng new`` `**`studentID_comp3133_assignment2`** Then, *<mark style="color:purple;">set up your GitHub repository with the same name and commit/push your changes regularly with descriptive messages.</mark>*
   * *<mark style="color:orange;">NOTE: if you are using</mark>* [*<mark style="color:orange;">docker-compose</mark>*](https://priteshs-organization.gitbook.io/assignment-2/docker-reference) *<mark style="color:orange;">then make a single folder to keep the frontend and backend. For example,</mark>* <mark style="color:orange;"></mark><mark style="color:orange;">Organize the project structure in a single folder if using Docker:</mark>

     ```plaintext
     studentID_comp3133_assignment/
     ├── docker-compose.yml
     ├── frontend/
     └── backend/
     ```
2. **Routing and Navigation**
   * Use [`Router`](https://angular.dev/guide/routing) for screen navigation:
     * **Login**
     * **Signup**
     * **Employee components**
3. **Login and Signup Screens**
   * Implement login and signup screens with form validations.
   * Use [Reactive or template forms](https://angular.dev/guide/forms) components to manage form input states.
4. **Session Management**
   * Store a user session token in [`service or dependency injection`](https://angular.dev/guide/di/dependency-injection) to persist user authentication.
5. **Employee Management**
   * After login, navigate users to an **Employee List** screen displaying all employees in a tabular format.
   * Provide CRUD operations using GraphQL:
     * **Add Employee**: A form to add new employees along with profile picture.
     * **View Details**: A screen/modal displaying specific employee details.
     * **Update Information**: A form for editing employee information.
     * **Delete Employee**: A button to remove an employee record.
6. **Search and File upload Functionality**

   Add employee search criteria for department or position and display them in the appropriate table format. This feature will allow users to search for employees based on department or position, showcasing your ability to handle dynamic queries and responsive UI. (*<mark style="color:purple;">**Add new GraphQL API to backend if needed**</mark>*)
7. **User Experience**
   * Focus on professional UI/UX design:
     * Use Material-UI, Bootstrap, or custom CSS for styling.
     * Make sure components are responsive.
8. **Logout and Redirect**
   * Implement a logout button to clear user sessions and redirect users to the login page.

##

# Assignment

As a Junior Software Engineer, you’ve been tasked with developing a frontend application using Angular. Your goal is to research and implement data fetching via GraphQL within the Angular project. You can leverage the knowledge you gained in the COMP 3133 course at George Brown College.

The project will be maintained in a Git repository named `studentID_comp3133_assignment2`. If you choose to make the repository private, please add me as a collaborator (username: **pritamworld**).

Your evaluation will focus on how well you organize your source code, as well as how effectively you utilize Angular features such as components, data binding, services, pipes, routing, and security.

Use Assignment I as the backend to develop the frontend for Assignment II. At the end, you will deploy both the backend and frontend to a cloud platform of your choice, such as Heroku, Vercel, or Cyclic. Be sure to update the backend as needed to accommodate the frontend requirements.

***

## <mark style="color:purple;">Frontend with Angular</mark>

1. **Application Setup and GitHub repository**
   * Initialize a Angular app named in the specified format (`studentID_comp3133_assignment2`) using `ng new`` `**`studentID_comp3133_assignment2`** Then, *<mark style="color:purple;">set up your GitHub repository with the same name and commit/push your changes regularly with descriptive messages.</mark>*
   * *<mark style="color:orange;">NOTE: if you are using</mark>* [*<mark style="color:orange;">docker-compose</mark>*](https://priteshs-organization.gitbook.io/assignment-2/docker-reference) *<mark style="color:orange;">then make a single folder to keep the frontend and backend. For example,</mark>* <mark style="color:orange;"></mark><mark style="color:orange;">Organize the project structure in a single folder if using Docker:</mark>

     ```plaintext
     studentID_comp3133_assignment/
     ├── docker-compose.yml
     ├── frontend/
     └── backend/
     ```
2. **Routing and Navigation**
   * Use [`Router`](https://angular.dev/guide/routing) for screen navigation:
     * **Login**
     * **Signup**
     * **Employee components**
3. **Login and Signup Screens**
   * Implement login and signup screens with form validations.
   * Use [Reactive or template forms](https://angular.dev/guide/forms) components to manage form input states.
4. **Session Management**
   * Store a user session token in [`service or dependency injection`](https://angular.dev/guide/di/dependency-injection) to persist user authentication.
5. **Employee Management**
   * After login, navigate users to an **Employee List** screen displaying all employees in a tabular format.
   * Provide CRUD operations using GraphQL:
     * **Add Employee**: A form to add new employees along with profile picture.
     * **View Details**: A screen/modal displaying specific employee details.
     * **Update Information**: A form for editing employee information.
     * **Delete Employee**: A button to remove an employee record.
6. **Search and File upload Functionality**

   Add employee search criteria for department or position and display them in the appropriate table format. This feature will allow users to search for employees based on department or position, showcasing your ability to handle dynamic queries and responsive UI. (*<mark style="color:purple;">**Add new GraphQL API to backend if needed**</mark>*)
7. **User Experience**
   * Focus on professional UI/UX design:
     * Use Material-UI, Bootstrap, or custom CSS for styling.
     * Make sure components are responsive.
8. **Logout and Redirect**
   * Implement a logout button to clear user sessions and redirect users to the login page.

##

# Evaluation Criteria

* **Part I (10%):** Successful deployment of the backend or creation of a Docker Compose file or on any cloud platform. Failure to do so results in a zero.
* **Part II (80%):** Each correctly implemented screen must follow professional design standards. Errors or incomplete features will result in a zero.
* **GitHub Repository (10%):** Proper naming conventions and valid commits are essential. Failure to submit the repository correctly will result in a zero.
* **Validation:** Ensure that your application displays appropriate error messages for all validations.

<table data-header-hidden><thead><tr><th width="79.5272216796875" valign="top"></th><th width="601.330322265625" valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top"><strong>Sr. No.</strong></td><td valign="top"><strong>Component</strong></td><td valign="top"><strong>Points</strong></td></tr><tr><td valign="top">1</td><td valign="top">Deploy backend to Heroku/Vercel/Cyclic or OTHER</td><td valign="top">05</td></tr><tr><td valign="top">2</td><td valign="top">Deploy frontend to Heroku/Vercel/Cyclic or OTHER</td><td valign="top">05</td></tr><tr><td valign="top">3</td><td valign="top">GitHub repository with valid commits and readme file. Screenshots submission for validation on D2L</td><td valign="top">05</td></tr><tr><td valign="top">4</td><td valign="top">Working Signup component, Login component and Logout witl GraphQL</td><td valign="top">15</td></tr><tr><td valign="top">5</td><td valign="top">List all Employee component with good design and theme</td><td valign="top">10</td></tr><tr><td valign="top">6</td><td valign="top">Add New Employee screen with good design and theme and with all validation messages <mark style="color:red;"><strong>along with picture upload</strong></mark></td><td valign="top">10</td></tr><tr><td valign="top">7</td><td valign="top">View and Update Employee component with good design and theme and with all validation messages</td><td valign="top">10</td></tr><tr><td valign="top">8</td><td valign="top">Search employee by department or position</td><td valign="top">10</td></tr><tr><td valign="top">9</td><td valign="top">Delete Employee</td><td valign="top">10</td></tr><tr><td valign="top">10</td><td valign="top">Accepted UI/UX using material design OR bootstrap, etc.</td><td valign="top">10</td></tr><tr><td valign="top">11</td><td valign="top">Make use of Service, Pipes, directrives, forms and Routing</td><td valign="top">10</td></tr></tbody></table>

# Submission

## Additional Requirements and Submission

* **Submit GitHub repository links**: Set up separate GitHub repositories for the backend and frontend projects, with descriptive commit messages or a single repository with both frontend and backend.

  *<mark style="color:orange;">Submit links to your GitHub public repositories for both the backend and frontend applications and links to hosting on the cloud platform.</mark>*
* **Validation and Error Handling**: Add appropriate error messages for input validations.
* <mark style="color:red;">**Put all Screenshots in one single file with an appropriate title**</mark>
  * MongoDB data (1 screenshot).
  * GraphQL API tests with Postman (5-8 screenshots).
  * Frontend CRUD operations (5-8 screenshots).
  * Search Screen (2-3 screenshots)
* **ZIP Submission**: <mark style="color:red;">**Remove**</mark> `node_modules` folders before zipping and upload to D2L.

<mark style="color:red;">**No extension or last submission will be allowed. Late submission will be awarded ZERO points**</mark>

# References

{% embed url="<https://github.com/pritamworld/graphql_angular_fullstack>" %}

{% embed url="<https://github.com/pritamworld/apollo_graphql_project>" %}

{% embed url="<https://the-guild.dev/graphql/apollo-angular/docs>" %}

{% embed url="<https://the-guild.dev/graphql/codegen>" %}

{% embed url="<https://medium.com/@erickzanetti/angular-integration-with-graphql-complete-guide-to-setup-and-usage-6f16e5657dc4>" %}

{% embed url="<https://material.angular.io/>" %}

{% embed url="<https://material.angularjs.org/latest/>" %}

·      <https://www.telerik.com/blogs/graphql-angular-how-to-make-a-graphql-query>

·      <https://apollo-angular.com/docs/recipes/simple-example/>

·      <https://www.techiediaries.com/graphql-tutorial/>

·      <https://www.howtographql.com/angular-apollo/0-introduction/>

·      <https://graphql.org/code/#javascript>

·      <https://www.howtographql.com/>

·      <https://www.toptal.com/api-development/graphql-vs-rest-tutorial>

·      <https://www.guru99.com/graphql-tutorial.html>

# Docker Reference

The structure shown in the image is a project setup using Docker with separate folders for the front end and back end, along with a `docker-compose.yml` file at the root to manage container orchestration. Here’s a summary of the setup for each component:

* **Root Directory (**<mark style="color:purple;">**`studentID_comp3133_assignment/`**</mark>**)**:
  * **`docker-compose.yml`**: The main Docker Compose file is used to define and manage services for both the frontend and backend applications, as well as any other services (like MongoDB) required by the app.
* **Frontend (`frontend/`)**:
  * **`Dockerfile`**: Contains instructions to build a Docker image for the frontend React application.
  * **`package.json`**: Manages dependencies for the React front end.
  * **`src/`**: The source code folder for the React frontend application.
  * **`public/`**: The public directory for static assets in the React app.
* **Backend (`backend/`)**:
  * **`Dockerfile`**: Contains instructions to build a Docker image for the backend Node.js application.
  * **`package.json`**: Manages dependencies for the Node.js backend.
  * **`src/`**: The source code folder for the backend application, including Express routes, controllers, and database models.

***

#### Example `docker-compose.yml` Setup

This file can orchestrate the frontend, backend, and MongoDB containers:

```yaml
version: '3'
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - '3000:3000'
    depends_on:
      - backend
    environment:
      - ANGULAR_APP_BACKEND_URL=http://backend:5000

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - '5000:5000'
    depends_on:
      - mongodb
    environment:
      - MONGO_URI=mongodb://mongodb:27017/mydatabase

  mongodb:
    image: mongo
    ports:
      - '27017:27017'
    volumes:
      - mongo-data:/data/db
  
  mongo-express:
    image: mongo-express:latest
    ports:
      - '8081:8081'
    environment:
      - ME_CONFIG_MONGODB_SERVER=mongodb
    depends_on:
      - mongodb

volumes:
  mongo-data:
```

#### Dockerfiles Overview

1. **Frontend Dockerfile (`frontend/Dockerfile`)**:

   ```dockerfile
   FROM node:14
   WORKDIR /app
   COPY package.json ./
   RUN npm install
   COPY . .
   CMD ["npm", "start"]
   ```
2. **Backend Dockerfile (`backend/Dockerfile`)**:

   ```dockerfile
   FROM node:14
   WORKDIR /app
   COPY package.json ./
   RUN npm install
   COPY . .
   CMD ["node", "src/index.js"]
   ```

With this structure, running `docker-compose up` in the **studentID\_comp3133\_assignment** directory will start all services, making it easier to manage and deploy the entire stack.

