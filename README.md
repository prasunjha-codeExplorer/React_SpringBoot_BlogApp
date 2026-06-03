React Spring Boot Blog Application

Overview
A full-stack Blog Application built using React, Spring Boot, and MySQL.
The application allows users to create, view, edit, and delete blog posts through a clean and responsive user interface.
It demonstrates frontend-backend integration using RESTful APIs and follows a layered architecture on the backend.



Features

1.Create new blog posts
2.View all blog posts
3.Edit existing blog posts
4.Delete blog posts
5.Responsive user interface
6.REST API integration
7.Toast notifications for user actions
8.Persistent data storage using MySQL


Tech Stack

Frontend
1.React.js
2.Vite
3.Axios
4.React Router DOM
5.React Toastify
6.CSS

Backend
1.Spring Boot
2.Spring Web
3.Spring Data JPA
4.Hibernate

Database
1.MySQL

Tools & Version Control
1.Git
2.GitHub


Project Architecture
React Frontend
      |
      | HTTP Requests (Axios)
      v
Spring Boot REST API
      |
      v
Service Layer
      |
      v
Repository Layer (JPA)
      |
      v
MySQL Database



Backend Setup

Prerequisites
1.Java 21 (or compatible version)
2.Maven
3.MySQL Server

Configure Database
Update the application.properties file:

spring.datasource.url=jdbc:mysql://localhost:3306/blogdb
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

Run Backend

cd BlogBackend
mvn spring-boot:run

Backend will start on:
http://localhost:8080


Frontend Setup
1.Install Dependencies
2.cd BlogFrontend
3.npm install

Start Frontend
1.npm run dev

Frontend will start on:
http://localhost:5173

API Endpoints
Method	Endpoint	Description

1.GET	/api/posts	Get all blog posts
2.GET	/api/posts/{id}	Get blog post by ID
3.POST	/api/posts	Create a new blog post
4.PUT	/api/posts/{id}	Update an existing blog post
5.DELETE	/api/posts/{id}	Delete a blog post


Learning Outcomes :

Through this project, I gained hands-on experience with:

1.Full-stack application development
2.REST API design and implementation
3.Spring Boot layered architecture
4.Database integration using JPA and Hibernate
5.React component-based development
6.State management and API consumption
7.Git branching and version control
8.Frontend-backend communication


Future Enhancements :

1.User Authentication and Authorization (JWT)
2.Comment System
3.Blog Categories and Tags
4.Search and Filtering
5.Pagination
6.Image Upload Support
7.Rich Text Editor
8.Docker Deployment
9.Cloud Deployment (AWS/Azure)

Author :
Prasun Kumar Jha
GitHub: https://github.com/prasunjha-codeExplorer

License:
This project is intended for learning and educational purposes.

















