# ID Wallet

ID Wallet is the DidOne World digital identity wallet project. This repository will host the wallet application, supporting documentation, and development resources for building secure identity and credential management experiences.

## Overview

The goal of ID Wallet is to provide a trusted wallet experience for digital identity use cases, including managing identity-related data, working with credentials, and supporting user-controlled identity flows.

This repository is currently in its early setup phase. The documentation below establishes the expected project direction and will be updated as implementation details are added.

## Key Objectives

- Build a secure foundation for digital identity wallet functionality.
- Support user-controlled management of identity credentials and wallet data.
- Keep the codebase understandable, maintainable, and contributor-friendly.
- Document setup, development, testing, deployment, and security practices as the project evolves.
- Provide a central place for wallet-related implementation notes and product decisions.

## Planned Capabilities

The exact feature set will be documented as the application is built. Planned areas may include:

- Identity wallet onboarding flows.
- Credential storage and management.
- Credential presentation and verification flows.
- Secure account, key, or session handling.
- Integrations with DidOne World identity services.
- Developer and contributor documentation.

## Project Status

**Status:** Initial repository setup

The repository currently contains foundational documentation. Source code, setup instructions, and technical architecture details should be added as the project structure is finalized.

## Getting Started

Detailed setup instructions are not available yet. Once the application stack is confirmed, this section should include:

```bash
# Example structure only; replace with actual commands when available
# git clone https://github.com/didoneworld/idwallet.git
# cd idwallet
# install dependencies
# run the development server
```

Future setup documentation should cover:

1. Required runtime versions and tools.
2. Dependency installation.
3. Environment variables and secrets.
4. Local development commands.
5. Testing commands.
6. Build and deployment commands.

## Configuration

Environment and configuration requirements have not been published yet. When added, document them in a safe format such as:

```env
# Example only
APP_ENV=development
API_BASE_URL=
```

Do not commit real secrets, private keys, access tokens, or production credentials to this repository.

## Repository Structure

The repository structure will be documented as source files are added.

Expected documentation may include:

```text
idwallet/
├── README.md
├── docs/
├── src/
├── tests/
└── package/config files
```

## Development Guidelines

Until formal standards are added, contributors should follow these principles:

- Keep changes small and focused.
- Use clear commit messages.
- Add documentation for new setup steps or important behavior.
- Add tests when introducing logic or changing existing behavior.
- Avoid committing generated files unless they are required.
- Avoid committing sensitive data.

## Security

Security is central to identity wallet development. Future security documentation should describe:

- Secret and key management practices.
- Authentication and authorization assumptions.
- Credential storage requirements.
- Data privacy considerations.
- Vulnerability reporting instructions.

For now, do not publish sensitive credentials or production configuration in this repository.

## Roadmap

Near-term documentation and repository setup tasks:

- Add the initial application source structure.
- Document the technology stack.
- Add local development instructions.
- Add environment variable documentation.
- Add testing and build instructions.
- Add license information.
- Add contribution and security policies.

## Contributing

Contribution guidelines will be expanded once the project structure is available. For now, open focused pull requests with a clear summary of the change and any relevant testing notes.

## License

License information has not been added yet. Add a `LICENSE` file and update this section when the project license is finalized.

---
## Platform Integration

This repository is a standalone component of the DID One World unified identity platform.

### Platform Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│            DID One World Platform                  │
├─────────────────────────────────────────────────┤
│  idwallet     →  Agent-DID  →  verifiable-cred │
│  (Wallet)       (Identity)     (Credentials)    │
└─────────────────────────────────────────────┘
```

### Component Role

| Component | Provides |
|-----------|----------|
| **Agent-DID** | Agent identity registry, lifecycle management |
| **verifiable-credential** | Credential issuance, verification |
| **idwallet** (this repo) | User wallet, credential storage, presentation, crypto |

### Standalone Usage

```bash
# Development
npm install
npm run dev
```

### API / SDK Features

| Feature | Description |
|---------|-------------|
| Wallet creation | Create identity wallets |
| Credential storage | Store verifiable credentials |
| VP generation | Generate verifiable presentations |
| Crypto operations | Key generation, signing |

### Integration Points

When integrated with platform:
- Agent identity from `Agent-DID` repo
- Credentials from `verifiable-credential` repo
- Full platform at [didoneworld/platform](https://github.com/didoneworld/platform)
