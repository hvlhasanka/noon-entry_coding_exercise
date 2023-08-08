<h1>noon - Entry Coding Exercise</h1>

### noon Social Network Website (Web App)

## Table of Contents

## Documentation

### 1. App Description
This is a web application built on top of the Client/server architecture to deliver its end-user an interactive user experience. Allowing to view posts feed and like individual posts depending on their preference.<br/>
There are two web pages to this web application,
1. Landing page => Home => Shows the post feed and each post has a "Like" button
2. Liked page => Shows the posts that were liked by the current end-user and each post has a "Dislike" button

### 2. System Architecture -
<p align="center">
  <kbd>
    <img src="" width="60%" />
  </kbd>
</p>
<p>Figure 2.1: System Architecture Diagram</p>

### 3. Consumed Technologies, Tools and Dependencies -
* Programming Languages -
  * Client-side (Front end) - NextJS, Sass, TypeScript, TSX
  * Server-side (Back end) - NodeJS, Express, TypeScript
* Frameworks -
  * Facebook's [React](https://react.dev) using [React Hooks](https://react.dev/reference/react)
  * Vercel's [NextJS](https://nextjs.org)
  * [Express](https://expressjs.com)
  * [Sass](https://sass-lang.com/)
* Tools - [Visual Studio Code](https://code.visualstudio.com)
* Main Dependencies -
  * [Axios](https://github.com/axios/axios) - Library to fetch data from an API service.
  * [React-icons](https://react-icons.github.io/react-icons) - Icon library containing all icons from several third-party icon packs.

### 4. Installation (NextJS and Express apps) -
In order to run the applications (NextJS and Express apps), their node modules are required.<br>
1. To download the associated node modules, go to the project file directory via the command prompt (CMD) and run the below command =>
```
npm install
```
2. After the node module installation, to run the web application, run the below command =>
```
npm start
```
For development purposes =>
```
npm run start:dev
```

### 5. Managing the Source Code -
#### Client-side app (NextJS)
Client-side app's source code is located in =>
```
  noon-entry_coding_exercise -> Workspace -> noon-social_media_website -> client
```
Source code component hierarchy =>
<p align="center">
  <kbd>
      <img src="" width="50%" />
  </kbd>
</p>
<p align="center">Figure 5.1: Client-side app (NextJS) component hierarchy</p>

#### Server-side app (Express)

Server-side app's source code is located in =>
```
  noon-entry_coding_exercise -> Workspace -> noon-social_media_website -> server
```
Source code component hierarchy =>
<p align="center">
  <kbd>
      <img src="" width="50%" />
  </kbd>
</p>
<p align="center">Figure 5.2: Server-side app (Express) component hierarchy</p>

### 6. Usage -
  #### 6.1. Functional features of the Web Application -
  * End-user can view a post feed with the following details,
    * Account details
    * Post details
    * Number of post likes
    * Post comments
  * End-user can like a post from the post feed
  * End-user can view the already liked posts on a separate web page
  * End-user can unlike an already liked post
  * End-user is able to view the web application in the mobile view and desktop view with the appropriate layout changes
  #### 6.2. Non-functional features of the Web Application -
  * Code Readability
  * Code Maintainability
  * Code Reusability
  * Code Scalability
  * Error handling
  #### 6.3. Screenshots of the noon Social Network Website (Web App) -
  ##### 6.3.1. 

### 7. Git Commit Strategy -

This repository contains two branches, main and develop. In the duration of the development of the source code and documentation, change commits were pushed to the develop branch. <br/>
The contents of the develop branch were reviewed in groups and merged into the main branch. <br/>
As shown in the below table, commits were pushed incrementally, <br/>
| Version | Commit Group | Project Tasks |
|---------|--------------|---------------|
| v1 | Group 1 - Documentation | Design low-fidelity wireframes |
| v1 | Group 2 - Back-end | Setup NodeJS server application |
| v1 | Group 3 - Front-end | Setup NextJS client application |
<p align="center">Table 7.1: Git Commit Strategy 

### 8. Credits -
This project to build a sample social network website was developed for the entry evaluation process at noon. The functional requirements were provided by noon.<br>
The project was developed using the best practices and guidance with the use of legitimate online documentation (docs) and YouTube videos.<br>
For learning purposes, other developers' source codes were reviewed on sample applications built and documented online.<br>
Documentation and source code in this repository was developed by H.V.L.Hasanka.

#### 8.1. Images -
* 

### 9. License -
Copyright (c) 2023 H.V.L.Hasanka<br>
Licensed under MIT License
