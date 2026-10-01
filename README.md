# Node.js CI/CD Pipeline with GitHub Actions and Docker

## Project Overview

This project demonstrates an automated CI/CD pipeline for a sample Node.js application using GitHub Actions, Docker, and Docker Hub.

The pipeline automatically runs tests, builds a Docker image, and pushes the image to Docker Hub whenever code is pushed to the `main` branch.

## Technologies Used

- Node.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## Project Structure

```text
devops-internship/
├── .github/
│   └── workflows/
│       └── main.yml
├── app.js
├── app.test.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## CI/CD Pipeline

The GitHub Actions workflow performs the following steps:

1. **Checkout code:** Retrieves the source code from the GitHub repository.
2. **Setup Node.js:** Configures the Node.js environment.
3. **Install dependencies:** Installs dependencies using `npm ci`.
4. **Run tests:** Executes automated tests using `npm test`.
5. **Login to Docker Hub:** Authenticates using GitHub repository secrets.
6. **Build and push:** Builds the Docker image and pushes it to Docker Hub.

The workflow is triggered automatically on every push to the `main` branch.

## Docker Image

- Docker Hub username: `karthi2801`
- Repository: `nodejs-demo-app`
- Tag: `1.0`

Docker Hub image:

https://hub.docker.com/r/karthi2801/nodejs-demo-app

## Run the Application Locally

### Install dependencies

```bash
npm install
```

### Run tests

```bash
npm test
```

### Start the application

```bash
node app.js
```

Open http://localhost:3000 in your browser.

Expected response:

```text
Hello from DevOps CI/CD Pipeline!
```

## Run with Docker

Pull the image:

```bash
docker pull karthi2801/nodejs-demo-app:1.0
```

Run the container:

```bash
docker run -d -p 3000:3000 --name nodejs-demo-container karthi2801/nodejs-demo-app:1.0
```

Open http://localhost:3000 to verify the application.

## GitHub Repository

https://github.com/karthi0079/devops-internship

## Result

The GitHub Actions pipeline successfully runs automated tests, builds the Docker image, and pushes it to Docker Hub.
