# Project Plan

## Project Overview

This is a backend for web application built with:

- Backend: FastAPI (Python)
- Database: PostgreSQL
- Authentication: JWT (JSON Web Tokens)

## Project Structure

````
├── backend/                  # FastAPI backend
│   ├── app/
│   │   ├── api/             # API endpoints
│   │   ├── core/            # Core functionality
│   │   ├── crud/            # Database CRUD operations
│   │   ├── models/          # Database models
│   │   └── tests/           # Backend tests
│   └── alembic/             # Database migrations


## API Endpoints

### Authentication
- `POST /api/v1/users/signup` - Register a new user
  - Request body:
    ```json
    {
      "email": "string",
      "password": "string",
      "full_name": "string"
    }
    ```
  - No authentication required
  - Returns the created user object

- `POST /api/v1/login/access-token` - Login for access token
  - Form data:
    ```
    username: "string" (email)
    password: "string"
    ```
  - Returns JWT access token

- `POST /api/v1/login/test-token` - Test access token
  - Requires authentication
  - Returns current user info

- `POST /api/v1/login/reset-password` - Reset password
  - Request body:
    ```json
    {
      "token": "string",
      "new_password": "string"
    }
    ```

- `POST /api/v1/login/reset-password/{token}` - Reset password with token

### Users

- `GET /api/v1/users/` - Read users
- `POST /api/v1/users/` - Create user
- `GET /api/v1/users/me` - Read current user
- `PUT /api/v1/users/me` - Update current user
- `GET /api/v1/users/{user_id}` - Read user by ID
- `PUT /api/v1/users/{user_id}` - Update user
- `DELETE /api/v1/users/{user_id}` - Delete user

### Items (Example Resource)

- `GET /api/v1/items/` - Read items
- `POST /api/v1/items/` - Create item
- `GET /api/v1/items/{item_id}` - Read item
- `PUT /api/v1/items/{item_id}` - Update item
- `DELETE /api/v1/items/{item_id}` - Delete item

### Utils

- `POST /api/v1/utils/test-email` - Test email sending
- `GET /api/v1/utils/status` - System status check

## Database Models

### User Model

- id: UUID (primary key)
- email: Email address (unique)
- hashed_password: Hashed password
- is_active: Boolean
- is_superuser: Boolean
- full_name: String (optional)

### Item Model (Example)

- id: UUID (primary key)
- title: String
- description: String (optional)
- owner_id: UUID (foreign key to User)

## Start Server locally

1. Backend Setup

   ```bash
   cd backend
   uv sync  # Install dependencies
   source .venv/bin/activate
````

3. Environment Configuration

   - Copy `.env.example` to `.env`
   - Update configuration values
   -

4. Backend run locally

   ```bash
   cd cd backend
   fastapi dev app/main.py
   ```

5. Database Setup
   ```bash
   alembic upgrade head  # Run migrations
   ```
6. How to commit a migration
   ```bash
   alembic revision --autogenerate -m "Commit message"
   ```

## Start Server with docker

```bash
  cd backend
  docker compose -f docker-compose-dev.yml watch
```

## API Documentation

Once the server is running, access the API documentation at:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Security Features

- JWT Authentication
- Password hashing with bcrypt
- CORS protection
- PostgreSQL with SQLModel ORM
- Environment-based configuration
- Superuser system
