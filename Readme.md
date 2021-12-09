# Feather Admin Dashboard

An Admin Panel that provides a table view to display details of all the insurance policies  managed by the operations team.

### What I built?
 - Defined new GraphQL types to support various fields related to a policy, and changed the schema accordingly. 
 - Created GraphQL endpoints to serve the data from a persistent storage.
 - Query the Apollo server to fetch and render the data in a tabular form.
 - Added pagination support, and sorting on every column.
 - Implemented a global text search method, along with a drop down filter through which admin can select policies based on insurance type.
 - Implemented Edit option to perform mutation and update the policy details.
 - Wrote a script to seed the database by importing sample data.
 -  Dockerized the complete application 

### Tech Stack?
 - GraphQL
 - Apollo Client & Server
 - TypeScript
 - ReactJS
 - Tailwind CSS
 - MongoDB
 - Docker & docker-compose

### How to setup?
Step1:

    git clone https://github.com/sastava007/feather-admin-dashboard.git
Step2:

    cd feather-admin-dashboard

Step3:

    docker-compose up --build

Now wait till all the containers get up and running, and then navigate to http://localhost:3000/ 


### Further Improvements

 - Add a feature for admin registration so that only authenticated user can access the data, and may extend this feature by defining various roles and render different data based on user's athorization level.

 - Create a profile page of customer to show all the metadata of a user.
 
### Screenshots
![enter image description here](https://i.imgur.com/JXPOBUe.png)


https://user-images.githubusercontent.com/43990819/145490070-cf199be1-2bbf-4c09-a897-2c97aae63e27.mp4