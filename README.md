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

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:PCast71/Twitter-2.0.git
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
