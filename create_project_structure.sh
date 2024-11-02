#!/bin/bash

# Array of directories to create
DIRECTORIES=(
  "backend/controllers"
  "backend/models"
  "backend/routes"
  "frontend"
)

# Array of files to create with paths
FILES=(
  "backend/controllers/authController.js"
  "backend/controllers/propertyController.js"
  "backend/controllers/paymentController.js"
  "backend/controllers/maintenanceController.js"
  "backend/models/User.js"
  "backend/models/Property.js"
  "backend/models/Payment.js"
  "backend/models/Maintenance.js"
  "backend/routes/authRoutes.js"
  "backend/routes/propertyRoutes.js"
  "backend/routes/paymentRoutes.js"
  "backend/routes/maintenanceRoutes.js"
  "backend/server.js"
  "backend/config.js"
  "frontend/index.html"
  "frontend/dashboard.html"
  "frontend/login.html"
  "frontend/register.html"
  "frontend/app.js"
  "frontend/styles.css"
  "package.json"
)

# Create directories
echo "Creating directories..."
for dir in "${DIRECTORIES[@]}"; do
  mkdir -p "$dir"
  echo "Created directory: $dir"
done

# Create files
echo "Creating files..."
for file in "${FILES[@]}"; do
  touch "$file"
  echo "Created file: $file"
done

echo "Project structure created successfully!"
