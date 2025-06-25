# Outlook-Add-in-with-jwtAuthenticator
✅ Outlook Add-in:

Simulated in a standalone window (no Office 365 integration required).
Displays enriched contact info: full name, job title, department, phone number.
Fetches data from a secure backend API.
✅ Secure Backend:

User login via email/password.
JWT token issuance after successful login.
Protected /contact endpoint requiring valid JWT.
Uses MySQL (via XAMPP) to store hashed user credentials.
✅ Containerized:

Fully containerized using Docker & Docker Compose.
Easy setup: just run docker-compose up.

🧰 Prerequisites
Before running this project, ensure you have the following installed:

Docker
Docker Compose
XAMPP or any MySQL server
Git (for cloning the repo)

Outlook-Add-in-with-jwtAuthenticator/
├── backend/             # Node.js backend service
backend/
├── src/
│   ├── server.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── contactRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── contactController.js
│   ├── models/
│   │   └── User.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── config/
│   │   └── db.js
│   └── utils/
│       └── jwtUtils.js
├── package.json
├── Dockerfile
└── README.md
├── outlook-addin/       # React-based Outlook add-in UI
│   ├── public/
│   ├── src/
│   └── package.json
├── docker-compose.yml   # Orchestrates all services
└── README.md            # You are here!

🚀 Getting Started
1. Clone the repository
  git clone https://github.com/jospeh-letsoalo/Outlook-Add-in-with-jwtAuthenticator.git 
  cd Outlook-Add-in-with-jwtAuthenticator

2. Start XAMPP MySQL
  Open XAMPP Control Panel
  Start the MySQL module
  Ensure it's listening on port 3306
3. Create the database
  In phpMyAdmin or CLI, create the database: CREATE DATABASE hico_assessment;

🐳 Run with Docker
Make sure you're in the root folder where docker-compose.yml is located.
