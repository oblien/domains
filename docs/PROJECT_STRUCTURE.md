domains/
├── .github/
├── apps/
│   ├── customer-portal/     # Next.js customer-facing app
│   ├── api/                 # NestJS API server
│   └── cli/                 # Command-line tools
├── packages/
│   ├── core/                # Shared business logic
│   ├── database/            # Database schema and migrations
│   ├── dns-manager/         # DNS record management
│   ├── domain-operations/   # Domain registration/transfer logic
│   ├── payment-processing/  # Payment handling
│   ├── ui-components/       # Shared React components
│   └── utils/               # Common utilities
├── infrastructure/
│   ├── docker/              # Docker configurations
│   ├── kubernetes/          # K8s deployment manifests (if needed)
│   └── terraform/           # Infrastructure as code
├── scripts/                 # Development and deployment scripts
├── docs/                    # Documentation
└── tests/                   # Integration and E2E tests
