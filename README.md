# Oblien Domains

<p align="center">
  <img src="docs/assets/logo-placeholder.png" alt="Oblien Domains Logo" width="200"/>
</p>

<p align="center">
  <strong>Open Source Domain Register & Manager with the lowest cost domains</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#license">License</a>
</p>

## About

Oblien Domains is an open-source domain registration and management platform designed to provide domains at the lowest possible cost - directly from DNS providers with the cheapest renewal prices.

Our platform integrates with OpenSRS and other registrars to offer transparent pricing and advanced domain management capabilities, all hosted on Oblien's high-performance infrastructure.

## Features

- 🌐 Register domains directly from DNS providers
- 💰 Lowest cost domain registration and renewals
- 🔄 Easy domain management and transfers
- 🔒 Secure DNS configuration
- 🛠️ Advanced domain settings and configurations
- 📊 Domain analytics and monitoring

## Technology Stack

### Core Infrastructure
- **Containerization**: Docker, Kubernetes, Helm, Istio
- **CI/CD**: GitHub Actions, ArgoCD, SonarQube
- **Monitoring**: Prometheus, Grafana, OpenTelemetry, ELK Stack, Sentry

### Backend
- **Runtime**: Node.js with Bun for superior performance
- **Framework**: Fastify, tRPC for type-safe APIs
- **Database**: PostgreSQL with TimescaleDB, Redis, Prisma ORM
- **Authentication**: Keycloak, Vault, JWT with rotating keys
- **API**: GraphQL with Apollo Server, REST API, gRPC, WebSockets

### Frontend
- **Framework**: Next.js with App Router, React Server Components
- **State Management**: TanStack Query, Zustand, SWR
- **UI**: Tailwind CSS with shadcn/ui, Framer Motion, Radix UI
- **Performance**: Webpack Module Federation, Turbopack

### Testing & Quality
- **Testing**: Vitest, Playwright, MSW, Testing Library
- **Code Quality**: TypeScript (strict mode), ESLint, Prettier, Husky

### Domain-Specific
- **DNS Management**: PowerDNS/CoreDNS, DNSSEC
- **Registrar Integration**: OpenSRS, EPP client
- **Payment Processing**: Stripe Connect, PayPal, Cryptocurrency options
- **Analytics**: Cube.js, Metabase, Segment

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- Kubernetes (for production deployment)
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/oblien-domains.git

# Navigate to the project directory
cd oblien-domains

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start the development environment
docker-compose up -d
pnpm dev
```

### Production Deployment

Oblien Domains is designed to be deployed on Oblien's infrastructure using Kubernetes:

```bash
# Build production images
pnpm build:docker

# Deploy to Kubernetes
helm install oblien-domains ./helm/oblien-domains
```

## Architecture

Oblien Domains implements a microservices architecture with event-driven design patterns. The system is built for horizontal scalability and high availability.

For more details, see our [Architecture Documentation](docs/architecture/ARCHITECTURE.md).

## Contributing

We welcome contributions from everyone! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Roadmap

See our detailed [Project Roadmap](docs/ROADMAP.md) for upcoming features and development plans.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- All our amazing contributors
- The open-source community
- OpenSRS and other DNS providers who make this possible 