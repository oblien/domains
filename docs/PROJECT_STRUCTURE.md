# Oblien Domains Project Structure

This document outlines the architecture and structure of the Oblien Domains project, an open-source domain registration and management platform.

## Directory Structure

```
oblien-domains/
├── .github/                    # GitHub specific files
│   ├── ISSUE_TEMPLATE/         # Issue templates
│   └── workflows/              # GitHub Actions workflows
├── docs/                       # Documentation
│   ├── api/                    # API documentation
│   ├── architecture/           # Architecture diagrams and explanations
│   └── assets/                 # Images and other assets for documentation
├── prisma/                     # Prisma ORM configuration
│   └── schema.prisma           # Database schema
├── public/                     # Static assets
│   ├── favicon.ico             # Favicon
│   └── logo.svg                # Logo
├── src/                        # Source code
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API routes
│   │   │   └── domains/        # Domain-related API endpoints
│   │   ├── auth/               # Authentication pages
│   │   ├── dashboard/          # User dashboard
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable components
│   │   ├── common/             # Common UI components
│   │   ├── domains/            # Domain-specific components
│   │   └── layout/             # Layout components
│   ├── lib/                    # Library code
│   │   ├── api/                # API client code
│   │   ├── auth/               # Authentication utilities
│   │   └── providers/          # DNS provider integrations
│   ├── styles/                 # Global styles
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions
├── tests/                      # Tests
│   ├── e2e/                    # End-to-end tests
│   ├── integration/            # Integration tests
│   └── unit/                   # Unit tests
├── .env.example                # Example environment variables
├── .eslintrc.js                # ESLint configuration
├── .gitignore                  # Git ignore file
├── .prettierrc                 # Prettier configuration
├── jest.config.js              # Jest configuration
├── next.config.js              # Next.js configuration
├── package.json                # NPM package configuration
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Project README
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Core Components

### Frontend

The frontend is built with Next.js, React, and TypeScript, using the App Router for routing. It includes:

- **Home Page**: Landing page with domain search functionality
- **Dashboard**: User dashboard for managing domains
- **Domain Search**: Interface for searching and registering domains
- **Domain Management**: Tools for managing DNS settings, transfers, etc.
- **Authentication**: User registration and login

### Backend

The backend is built with Next.js API routes, using Prisma for database access. It includes:

- **Domain API**: Endpoints for searching, registering, and managing domains
- **Authentication API**: User authentication and authorization
- **Provider Integrations**: Connections to various DNS providers
- **Payment Processing**: Integration with payment gateways

### Database

The database schema is defined using Prisma and includes:

- **Users**: User accounts and profiles
- **Domains**: Registered domains and their settings
- **Transactions**: Payment and billing information
- **DNS Records**: DNS configuration for domains

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (or self-hosted)

## Development Workflow

1. Clone the repository
2. Install dependencies
3. Set up environment variables
4. Run the development server
5. Make changes
6. Run tests
7. Submit a pull request

## API Integration

Oblien Domains integrates with various domain registrar APIs to provide the lowest cost domains. The integration points include:

- **Domain Search**: Check domain availability across providers
- **Domain Registration**: Register domains with the selected provider
- **Domain Transfer**: Transfer domains between providers
- **DNS Management**: Configure DNS settings for domains

## Security Considerations

- **Authentication**: Secure user authentication with NextAuth.js
- **API Security**: Rate limiting and authentication for API endpoints
- **Data Protection**: Encryption of sensitive data
- **GDPR Compliance**: User data protection and privacy

## Performance Optimization

- **Server-Side Rendering**: For improved SEO and initial load performance
- **Static Generation**: For static pages
- **Code Splitting**: For reduced bundle size
- **Caching**: For improved API response times 