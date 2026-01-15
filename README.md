# 🐳 Docker Learning Project: Express + Prisma + PostgreSQL

This project was created **purely for learning and practicing Docker**.

The primary goal of this repository is to understand **Docker fundamentals**, **containerization workflows**, and **multi-service orchestration** using **Docker and Docker Compose**.

The application logic is intentionally minimal so that the focus remains on **Docker concepts**, not backend implementation details.

---

## 🎯 Purpose of the Project

This project focuses on learning how to:

- Containerize a Node.js application
- Run multiple services using Docker Compose
- Manage service-to-service communication via Docker networking
- Use Docker volumes for persistent data storage
- Handle environment variables in a containerized setup
- Automate Prisma database synchronization at container startup
- Share and distribute Docker images using Docker Hub

> ⚠️ This project is **not about learning backend development**.  
> It is **strictly focused on Docker and containerization concepts**.

---

## 🧱 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Docker
- Docker Compose

---

## 🐳 Docker Architecture Overview

This project uses **Docker Compose** to orchestrate multiple services:

### API Service
- Node.js + Express application
- Prisma ORM for database access
- Runs inside its own container
- Exposes port `3000`

### Database Service
- PostgreSQL database
- Runs in a separate container
- Uses a Docker volume for persistent storage

All services communicate using **Docker’s internal network**, without relying on `localhost` between containers.

---

## 🚀 Running the Project

### Prerequisites
- Docker
- Docker Compose

No local installation of Node.js or PostgreSQL is required.

---

### Environment Setup

Create a `.env` file using the example below:

```
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/mydb
PORT=3000
```

---

### Start the Application

```
docker compose up --build
```

This will:
- Start the PostgreSQL container
- Start the API container
- Automatically connect Prisma to the database
- Expose the API on port `3000`

---

### Access the API

```
http://localhost:3000/health
```

Expected response:

```
{ "status": "ok" }
```

---

## Database Management (Prisma)

Prisma database commands are executed **at runtime**, not during image build.

Example:

```
docker exec -it express_app npx prisma db push
```

---

## Docker Image

The application image is published on Docker Hub:

```
shahinrana/prisma-express-app:latest
```

Pull the image:

```
docker pull shahinrana/prisma-express-app:latest
```

---

## Key Docker Concepts Practiced

- Image building and tagging
- Multi-container orchestration
- Container networking
- Port mapping
- Volumes for persistent data
- Runtime vs build-time responsibilities
- Environment variable management
- Docker Hub image distribution

---

## Notes

- PostgreSQL data is persisted using Docker volumes
- The database is not baked into the image
- Prisma database operations are intentionally kept outside the Dockerfile
- This setup mirrors real-world Docker workflows

---

## Conclusion

This project serves as a **hands-on Docker learning reference**, demonstrating how a real backend application can be fully containerized and shared without requiring any local dependencies.