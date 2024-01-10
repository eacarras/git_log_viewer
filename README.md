## Git Viewer

This is a simple implementation of a git log viewer, with the frontend and the backend separated.

### Prerequisites

In order to run this application you need to install two tools: **Docker** & **Docker Compose**.


### How to run it?

The entire application can be run with a single command on a terminal:

```
$ docker-compose up -d
```

If you want to stop it, use the following command:

```
$ docker-compose down
```

---


#### log-viewer-back (REST API)

This is a NodeJS (Javascript) based application that connects with the
github API to review the log history and the information is been consumed by the UI.
It can supports for the moment just HTTP REST method like GET.

This app is also put in Docker container and its definition can be found
in a file *log-viewer-back/Dockerfile*. 



#### log-viewer-front (Frontend)

This is a real endpoint for a user where they can view the git log information
of some repositories

It can be entered using link: **http://localhost:3000/**