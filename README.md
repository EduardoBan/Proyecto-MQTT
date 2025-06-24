# MQTT Broker Application

A comprehensive MQTT broker application with React frontend and Node.js backend for real-time data monitoring and visualization.

## Features

- Real-time MQTT data collection and storage
- Interactive dashboard with multiple chart types
- Responsive grid layout with drag-and-drop functionality
- RESTful API for data management
- MySQL database integration with Sequelize ORM
- Socket.IO for real-time updates

## Architecture

### Frontend (React)
- **Components**: Modular chart components with lazy loading
- **Hooks**: Custom hooks for API calls and state management
- **Optimization**: Memoization, code splitting, and caching

### Backend (Node.js)
- **MQTT Broker**: Aedes-based MQTT broker for device communication
- **REST API**: Express.js API with proper error handling
- **Database**: MySQL with Sequelize ORM
- **Logging**: Structured logging with file output

## Quick Start

1. **Install dependencies**:
   ```bash
   npm run install:all
   ```

2. **Configure environment**:
   - Copy `.env.example` to `.env` in both `front` and `server` directories
   - Update database credentials and API URLs

3. **Start development servers**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MQTT Broker: localhost:1883

## Project Structure

```
├── front/                  # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utility functions
│   │   └── ...
├── server/                 # Node.js backend
│   ├── controller/         # Route controllers
│   ├── models/             # Database models
│   ├── services/           # Business logic
│   ├── middleware/         # Express middleware
│   └── utils/              # Server utilities
└── ...
```

## Key Optimizations

### Performance
- **Frontend**: Component memoization, lazy loading, API caching
- **Backend**: Connection pooling, query optimization, rate limiting
- **Database**: Proper indexing, efficient queries

### Code Quality
- **Modular Architecture**: Separation of concerns
- **Error Handling**: Comprehensive error handling and logging
- **Type Safety**: PropTypes and consistent data structures

### Scalability
- **Caching**: API response caching
- **Rate Limiting**: Request throttling
- **Monitoring**: Structured logging and error tracking

## API Endpoints

### Registros
- `GET /registros` - Get all records
- `GET /registros/:id` - Get specific record
- `GET /ultimoregistro/:id` - Get latest record for port
- `GET /ultimosregistros/:id` - Get recent records for port
- `POST /registros` - Create new record

### Puerto ES
- `GET /puertoes` - Get all ports
- `GET /puertoes/:id` - Get specific port
- `GET /puertoEsPtoId/:id` - Get ports by measurement point

### Punto de Medición
- `GET /puntodemedicion` - Get all measurement points
- `GET /puntodemedicion/:id` - Get specific measurement point
- `GET /puntodemedicion/nombre/:name` - Get by name

## MQTT Topics

The application listens for MQTT messages on configured topics. Data format:

```json
{
  "TemaNombre": "Energia",
  "f_actual": 1744806615,
  "Data": {
    "1744803015": [
      [0, "224.06"],
      [1, "224.05"]
    ]
  }
}
```

## Contributing

1. Follow the established code structure
2. Add tests for new features
3. Update documentation
4. Use meaningful commit messages

## License

MIT License - see LICENSE file for details