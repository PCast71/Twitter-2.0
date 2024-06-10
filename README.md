# Twitter-2.0
# Social Network API

This is a simple social network API built with Node.js, Express, and MongoDB using Mongoose. It allows users to create accounts, post thoughts, add reactions to thoughts, and manage friend lists.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Friends](#friends)
  - [Reactions](#reactions)
- [Testing with Insomnia](#testing-with-insomnia)
  - [Example Requests in Insomnia](#example-requests-in-insomnia)
    - [GET All Users](#get-all-users)
    - [POST Create a New User](#post-create-a-new-user)
    - [PUT Update a User](#put-update-a-user)
    - [DELETE a User](#delete-a-user)
    - [GET All Thoughts](#get-all-thoughts)
    - [POST Create a New Thought](#post-create-a-new-thought)
    - [PUT Update a Thought](#put-update-a-thought)
    - [DELETE a Thought](#delete-a-thought)
    - [POST Add a Friend to a User](#post-add-a-friend-to-a-user)
    - [DELETE Remove a Friend from a User](#delete-remove-a-friend-from-a-user)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/social-network-api.git
   cd social-network-api

Install dependencies:

sh
Copy code
npm install
Create a .env file in the root directory and add your MongoDB URI:

bash
Copy code
MONGODB_URI=mongodb://localhost:27017/socialnetwork
PORT=3000
Start the server:

sh
Copy code
npm run dev
Usage
Ensure your server is running before making any requests. The server will run on the port specified in the .env file (default is 3000).

API Endpoints
Users
GET /api/users: Get all users.
POST /api/users: Create a new user.
Request body:
json
Copy code
{
  "username": "newuser",
  "email": "newuser@example.com"
}
PUT /api/users/
: Update a user by ID.
Request body:
json
Copy code
{
  "username": "updateduser",
  "email": "updateduser@example.com"
}
DELETE /api/users/
: Delete a user by ID.
Thoughts
GET /api/thoughts: Get all thoughts.
POST /api/thoughts: Create a new thought.
Request body:
json
Copy code
{
  "thoughtText": "This is a new thought",
  "username": "newuser",
  "userId": "<userId>"
}
PUT /api/thoughts/
: Update a thought by ID.
Request body:
json
Copy code
{
  "thoughtText": "Updated thought text",
  "username": "updateduser"
}
DELETE /api/thoughts/
: Delete a thought by ID.
Friends
POST /api/users/
/friends/
: Add a friend to a user's friend list.
DELETE /api/users/
/friends/
: Remove a friend from a user's friend list.
Reactions
POST /api/thoughts/
/reactions: Add a reaction to a thought.
Request body:
json
Copy code
{
  "reactionBody": "Great thought!",
  "username": "user1"
}
DELETE /api/thoughts/
/reactions/
: Remove a reaction from a thought.
Testing with Insomnia
Start Your Server:
Ensure your server is running:

sh
Copy code
npm run dev
Open Insomnia:
Launch Insomnia. If you don’t have it installed, download it from the Insomnia website.

Create a New Workspace:

Click on the New Workspace button.
Name your workspace (e.g., "Social Network API").
Choose Design as the workspace type and click Create.
Create a New Request Collection:

Click on the New Request Collection button.
Name your collection (e.g., "User Routes").
Create and Test API Requests:

Example Requests in Insomnia
GET All Users
Request Type: GET
URL: http://localhost:3000/api/users
Send Request: Click Send to retrieve all users.
POST Create a New User
Request Type: POST
URL: http://localhost:3000/api/users
Body:
json
Copy code
{
  "username": "newuser",
  "email": "newuser@example.com"
}
Send Request: Click Send to create a new user.
PUT Update a User
Request Type: PUT
URL: http://localhost:3000/api/users/<userId> (replace <userId> with the actual user ID)
Body:
json
Copy code
{
  "username": "updateduser",
  "email": "updateduser@example.com"
}
Send Request: Click Send to update the user.
DELETE a User
Request Type: DELETE
URL: http://localhost:3000/api/users/<userId> (replace <userId> with the actual user ID)
Send Request: Click Send to delete the user.
GET All Thoughts
Request Type: GET
URL: http://localhost:3000/api/thoughts
Send Request: Click Send to retrieve all thoughts.
POST Create a New Thought
Request Type: POST
URL: http://localhost:3000/api/thoughts
Body:
json
Copy code
{
  "thoughtText": "This is a new thought",
  "username": "newuser",
  "userId": "<userId>" // Replace <userId> with the actual user ID
}
Send Request: Click Send to create the thought.
PUT Update a Thought
Request Type: PUT
URL: http://localhost:3000/api/thoughts/<thoughtId> (replace <thoughtId> with the actual thought ID)
Body:
json
Copy code
{
  "thoughtText": "Updated thought text",
  "username": "updateduser"
}
Send Request: Click Send to update the thought.
DELETE a Thought
Request Type: DELETE
URL: http://localhost:3000/api/thoughts/<thoughtId> (replace <thoughtId> with the actual thought ID)
Send Request: Click Send to delete the thought.
POST Add a Friend to a User
Create a New Friend:

Request Type: POST
URL: http://localhost:3000/api/users
Body:
json
Copy code
{
  "username": "friendUser",
  "email": "friend@example.com"
}
Click Send and note the _id of the created friend.
Add the Friend to a User:

Request Type: POST
URL: http://localhost:3000/api/users/<userId>/friends/<friendId> (replace <userId> with the actual user ID and <friendId> with the friend ID obtained in the previous step).
Send Request: Click Send to add the friend.
DELETE Remove a Friend from a User
Request Type: DELETE
URL: http://localhost:3000/api/users/<userId>/friends/<friendId> (replace <userId> with the actual user ID and <friendId> with the friend ID)
Send Request: Click Send to remove the friend.
License
This project is licensed under the MIT License.
