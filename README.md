# 🐳 Docker Learning Project: Express + PostgreSQL

This project was created **purely to learn and practice Docker**.

The main focus of this project is **containerization**, **Docker workflows**, and **multi-service orchestration** using **Docker and Docker Compose**.  
The application logic is intentionally kept simple so that the attention stays on Docker concepts rather than backend implementation details.

---

## 🎯 Purpose of the Project

The goal of this project is to:

- Learn how Docker works in a real project
- Containerize an existing application
- Run multiple services using Docker Compose
- Understand Docker networking between containers
- Use volumes for data persistence
- Manage environment variables in a Dockerized setup

This project is **not about learning backend development** — it is focused entirely on **Docker**.

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **Docker**
- **Docker Compose**

---

## 🐳 Docker Setup Overview

This project uses **Docker Compose** to run multiple containers:

- **API container**
  - Node.js application
  - Prisma ORM
- **Database container**
  - PostgreSQL
  - Persistent volume for data storage

All services communicate through Docker’s internal network.
