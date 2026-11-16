# NOVA Admin Panel

A web-based administration panel for managing products and users in the NOVA Store challenge.

## Overview

NOVA Admin is a React-based admin dashboard built with TypeScript and Vite. It provides a simple interface for authentication, viewing products and users, and adding new records.

The application uses FakeStoreAPI as its mock backend.

## Tech Stack

- **React** – Building the user interface with functional components and hooks
- **TypeScript** – Static typing
- **Vite** – Development server and build tool
- **React Router** – Application routing
- **Redux Toolkit** – Authentication state management
- **Axios** – HTTP requests and API communication
- **Styled Components** – Component-level styling
- **Formik & Yup** – Form state management and validation

## Features

- Login using FakeStoreAPI authentication
- Protected routes for authenticated users
- Dashboard layout with a sidebar and header
- Light and dark themes
- Product listing with search and pagination
- Add new products using a validated form
- User listing with search and pagination
- Add new users using a validated form
- Loading, error, and empty states

## Getting Started

### Prerequisites

- Node.js 22 or later
- pnpm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd nova-admin
```

Install dependencies:

```bash
pnpm install
```

Create a local environment file using `.env.example` as a reference, then configure the API base URL.

### Run the Development Server

```bash
pnpm dev
```

Open the local URL displayed in the terminal.

### Production Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

## Test Login Credentials

The following FakeStoreAPI test account can be used to log in:

| Field    | Value      |
| -------- | ---------- |
| Username | `mor_2314` |
| Password | `83r5^_`   |

These are public mock API credentials, not production credentials.

## Project Structure

```text
src/
├── assets/
├── Components/
│   ├── header/
│   ├── login-form/
│   ├── product-form/
│   ├── sidebar/
│   └── user-form/
├── Modals/
├── pages/
│   ├── dashboard/
│   ├── login/
│   ├── products/
│   └── users/
├── Redux/
├── Routes/
├── shared/
│   └── theme/
├── Storage/
├── types/
│   ├── auth/
│   ├── product/
│   └── user/
├── Utils/
│   ├── api/
│   └── services/
└── Validations/
```

### Architecture

The project uses a feature-oriented organization with separate directories for pages, reusable components, API services, types, and validation schemas.

- `pages/`: Application pages.
- `Components/`: Reusable UI components and forms.
- `Redux/`: Redux store and authentication slice.
- `Routes/`: Route configuration, protected routes, and providers.
- `Utils/api/`: Shared Axios instance.
- `Utils/services/`: Product and user API operations.
- `shared/theme/`: Theme context, provider, and theme switcher.
- `Storage/`: Authentication token persistence.
- `types/`: TypeScript type definitions.
- `Validations/`: Form validation schemas.
- `Modals/`: Reusable modal component.

This structure keeps page-level logic, reusable UI, API communication, and application state in separate areas.

## State Management

Redux Toolkit is used for authentication state, including the login process and authentication initialization.

React Context is used for theme management.

Local component state is used for page-specific concerns such as search, pagination, loading, and modal visibility.

## API Integration

The application communicates with FakeStoreAPI through a shared Axios instance.

API operations are organized into separate service files:

- `product.service.ts`
- `user.service.ts`

The API base URL is configured through an environment variable rather than being duplicated across service files.

## FakeStoreAPI Limitations

FakeStoreAPI is a mock REST API and does not provide a complete production backend.

- Create operations return mock responses and do not guarantee permanent database persistence.
- Authentication is based on the API's test credentials.
- Product and user edit/delete operations are not implemented.
- No real order processing, payment, or inventory management is included.

Newly created records are added to the current application's state for demonstration purposes.

## Authentication Note

The authentication token is persisted in browser local storage in this demo.

For a production application, secure server-managed cookies with `HttpOnly`, `Secure`, and appropriate `SameSite` settings are preferable, provided the backend supports them.

## Scope

This project was developed as part of the NOVA Store frontend challenge. It focuses on the requested administration features and does not aim to provide a complete production backend or enterprise-level access management.
