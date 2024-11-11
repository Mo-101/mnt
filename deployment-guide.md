MoStar API - Structure
Current Issues
Duplicate folders (nodejs-server and src containing similar structures)
Inconsistent file locations (some utils in root, some in src)
Mixed configuration files
Recommended Structure
/
├── src/
│   ├── api/              # API endpoints
│   ├── config/           # Configuration files
│   │   ├── database.js
│   │   └── swagger.js
│   ├── controllers/      # Request handlers
│   ├── models/          # Data models
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   └── utils/           # Utility functions
├── db/
│   ├── migrations/      # Database migrations
│   └── models/         # Database models
├── docs/               # Documentation
│   └── swagger/        # Swagger/OpenAPI specs
├── middleware/         # Custom middleware
├── tests/             # Test files
├── .env               # Environment variables
├── .gitignore        # Git ignore file
├── vercel.json       # Vercel configuration
├── index.js          # Main application entry
└── package.json      # Project dependencies