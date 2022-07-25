# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

Step 1: Clone the repository locally from: https://github.com/ObelusFamily/Anythink-Market-9298f
Step 2: Install Docker according to your platform: https://docs.docker.com/get-docker/
Step 3: Verify Docker is installed and ready by running the following from terminal: docker -v
Step 4: Verify Docker Compose is installed and ready by running the following from terminal: docker-compose -v
Step 5: Navigate to the root of our cloned repo from within terminal.
Step 6: From the root of our project run the following from terminal: docker-compose up
Step 7: Verify Backend is up and running by pointing your browser to: http://localhost:3000/api/ping
Step 8: Verify the Front end is up and running and connecting to our back-end properly by pointing to the following url: http://localhost:3001/register and creating a new user.
