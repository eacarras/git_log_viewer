## Git Viewer

This is a simple implementation of a git log viewer, with the frontend and the backend separated.

### Prerequisites

In order to run this application you need to install two tools: **Docker** & **Docker Compose**.


### How to run it?

The most efficient way if you are in develop mode is open two tabs in the terminal:
```
$ cd log-viewer-back
$ npm run dev

$ cd log-viewer-front
$ npm run start
```

Other option: The entire application can be run with a single command on a terminal:

```
$ docker-compose up -d
```

If you want to stop it, use the following command:

```
$ docker-compose down
```

Open localhost:3000 and see the response, don't forget the .env (review the readme of each want to know what you need to add)!

#### log-viewer-back (REST API)

This is a NodeJS (Javascript) based application that connects with the
github API to review the log history and the information is been consumed by the UI.
It can supports for the moment just HTTP REST method like GET.

This app is also put in Docker container and its definition can be found
in a file *log-viewer-back/Dockerfile*. 

You need to add .env file with the following variables
```
PORT=5500
GITHUB_ACCESS_TOKEN=
```

#### log-viewer-front (Frontend)

This is a real endpoint for a user where they can view the git log information
of some repositories

It can be entered using link: **http://localhost:3000/**

```
REACT_APP_API_URL=http://localhost:5500/ # in the case you not change the port
```

#### TODO-LIST
- Add loading in the frontend
    We can add a lib for this or create a component
- Improve alert showed
    We can add a lib for implement a toast and after that used instead of alert
- Add classes and models in the backend
    Create classes in the backend and services to encapsulate, e.x create services of Github that connect and have an option of call a endpoint
- Improves test to have more coverage
    Add test in back using jest and mock-data, also in front end for unit components modularizing the component of card to see the render also, consider the main page with the basic information to be showed like the inputs, button and labels
- Improve docker compose to stay in development mode
    The docker-compose actually just make a build and keep upload the data, we need to run the server and run all it
- Add default endpoint in backend to avoid not have any response
    Add in the index and endpoint that get all the responses using app.get('*', function(req, res){ /** Code here */})
- Add backend test with mock data for response api
    Use a property lib for create mock data and use it in the tests
- Improve pipeline to be able to run test and run both builds
    Add three more stages where in one run the test of backend, another one for the frontend and another for build the backend
