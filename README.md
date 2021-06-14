## Student Management System
<i> Java Spring Boot, ReactJS, MySQL </i>

Developed a simple student management system with basic features such as adding, editing, deleting, and viewing student records using a client-server architecture.
This project is a single-page application that uses React to build reusable components for the frontend.
The frontend interacts with a RESTful API built with Spring Boot which reads and writes data onto a MySQL database in the backend.

### React Frontend
- <i>Router</i> : stores URLs that direct application flow to various components based on the user's clicks and displays selected components
- <i>Components</i> : contains UI objects as well as logic to display and manipulate objects which makes up the body and structure of the frontend
- <i>Service</i> : holds calls to the Java REST API and makes the connection with the axios http library (calls made by components to change or retrieve data)

### Java Spring Boot Backend
- <i>Controller Layer</i> : contains REST APIs and processes web requests, then passes processed data to the service layer for logical application on received data
- <i>Service Layer</i> : holds business logic for incoming data, including manipulating data using functions and calling external APIs
- <i>Repository Layer</i> : stores logic necessary to interact with the database, including accessing the MySQL database, storing incoming records, editing and deleting existing records
