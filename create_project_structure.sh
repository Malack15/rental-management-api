#!/bin/bash

# Array of directories to create
DIRECTORIES=(
  "$ROOT_DIR/backend/controllers"
  "$ROOT_DIR/backend/models"
  "$ROOT_DIR/backend/routes"
  "$ROOT_DIR/frontend"
)

# Array of files to create with paths
FILES=(
  "$ROOT_DIR/backend/controllers/authController.js"
  "$ROOT_DIR/backend/controllers/propertyController.js"
  "$ROOT_DIR/backend/controllers/paymentController.js"
  "$ROOT_DIR/backend/controllers/maintenanceController.js"
  "$ROOT_DIR/backend/models/User.js"
  "$ROOT_DIR/backend/models/Property.js"
  "$ROOT_DIR/backend/models/Payment.js"
  "$ROOT_DIR/backend/models/Maintenance.js"
  "$ROOT_DIR/backend/routes/authRoutes.js"
  "$ROOT_DIR/backend/routes/propertyRoutes.js"
  "$ROOT_DIR/backend/routes/paymentRoutes.js"
  "$ROOT_DIR/backend/routes/maintenanceRoutes.js"
  "$ROOT_DIR/backend/server.js"
  "$ROOT_DIR/backend/config.js"
  "$ROOT_DIR/frontend/index.html"
  "$ROOT_DIR/frontend/dashboard.html"
  "$ROOT_DIR/frontend/login.html"
  "$ROOT_DIR/frontend/register.html"
  "$ROOT_DIR/frontend/app.js"
  "$ROOT_DIR/frontend/styles.css"
  "$ROOT_DIR/package.json"
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
