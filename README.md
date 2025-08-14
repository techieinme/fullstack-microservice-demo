# 🚀 Node.js Microservices Demo

This project demonstrates a **Node.js microservices architecture** with three services:

- **Auth Service** → User registration, login, JWT authentication  
- **User Service** → User profile CRUD (protected with JWT)  
- **Product Service** → Product CRUD (protected with JWT)  

Each service is containerized with **Docker** and deployable to **Kubernetes**.

---

## 📂 Project Structure

```.
├── auth-service
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── src
│       ├── app.js
│       ├── config
│       │   └── db.js
│       ├── controllers
│       │   └── auth.controller.js
│       ├── middleware
│       │   ├── errorHandler.js
│       │   └── rateLimiter.js
│       ├── models
│       │   └── User.js
│       └── routes
│           └── auth.routes.js
├── k8s
│   ├── auth-deployment.yaml
│   ├── auth-service.yaml
│   ├── mongo-deployment.yaml
│   ├── mongo-service.yaml
│   ├── product-deployment.yaml
│   ├── product-service.yaml
│   ├── user-deployment.yaml
│   └── user-service.yaml
├── product-service
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── src
│       ├── app.js
│       ├── config
│       │   └── db.js
│       ├── controllers
│       │   └── product.controller.js
│       ├── middleware
│       │   ├── errorHandler.js
│       │   ├── rateLimiter.js
│       │   └── verifyToken.js
│       ├── models
│       │   └── Product.js
│       └── routes
│           └── product.routes.js
├── README.md
└── user-service
    ├── Dockerfile
    ├── package-lock.json
    ├── package.json
    ├── server.js
    └── src
        ├── app.js
        ├── config
        │   └── db.js
        ├── controllers
        │   └── user.controller.js
        ├── middleware
        │   ├── errorHandler.js
        │   ├── rateLimiter.js
        │   └── verifyToken.js
        ├── models
        │   └── User.js
        └── routes
            └── user.routes.js
```



## Flow of Authentication

- Register/Login at Auth Service → receive JWT
- Pass JWT in header → Authorization: Bearer <token>
- User Service & Product Service validate token with verifyToken middleware
- Authorized requests proceed; invalid tokens are rejected


## API Endpoints

  ### Auth Service (http://localhost:5000)

  - POST /api/auth/register → Register new user
  - POST /api/auth/login → Login & get JWT
  - GET /api/auth/verify-token → Verify JWT

  ### User Service (http://localhost:5001)
  
  - GET /api/users → Get all users (JWT required)
  - GET /api/users/:id → Get user by ID (JWT required)
  - PUT /api/users/:id → Update user (JWT required)
  - DELETE /api/users/:id → Delete user (JWT required)

  ### Product Service (http://localhost:5002)

  - GET /api/products → Get all products
  - GET /api/products/:id → Get product by ID
  - POST /api/products → Create product (JWT required)
  - PUT /api/products/:id → Update product (JWT required)
  - DELETE /api/products/:id → Delete product (JWT required)


  ### Build Docker Images
    - docker build -t auth-service ./auth-service
    - docker build -t user-service ./user-service
    - docker build -t product-service ./product-service


  ### Run Containers
    - docker run -p 5000:5000 auth-service
    - docker run -p 5001:5001 user-service
    - docker run -p 5002:5002 product-service



  ###  Apply MongoDB
  - kubectl apply -f k8s/mongo-deployment.yaml
  - kubectl apply -f k8s/mongo-service.yaml

  ### Apply Microservices
  - kubectl apply -f k8s/auth-deployment.yaml
  - kubectl apply -f k8s/auth-service.yaml

  - kubectl apply -f k8s/user-deployment.yaml
  - kubectl apply -f k8s/user-service.yaml

  - kubectl apply -f k8s/product-deployment.yaml
  - kubectl apply -f k8s/product-service.yaml

  ###  Verify
  - kubectl get pods
  - kubectl get services
