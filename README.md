# NOVA Admin Panel

A web-based administration panel for managing products and users in the NOVA Store challenge.

## Overview

NOVA Admin is a React-based admin dashboard built with TypeScript and Vite. It provides an interface for authentication, viewing products and users, and adding new records.

The application uses FakeStoreAPI as its mock backend.

## Tech Stack

- **React 19** – Building the user interface with functional components and hooks
- **TypeScript** – Static typing
- **Vite** – Development server and build tool
- **React Router** – Application routing
- **Redux Toolkit** – Authentication state management
- **Axios** – HTTP requests and API communication
- **Styled Components** – Component-level styling
- **Formik** – Form state management
- **Yup** – Form validation
- **Lucide React** – Icons

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
- Persian RTL interface

## Getting Started

### Prerequisites

- Node.js compatible with Vite 8
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

Create a `.env` file in the project root using `.env.example` as a reference:

```env
VITE_API_URL=https://fakestoreapi.com
```

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

### Preview Production Build

```bash
pnpm preview
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
│   └── modal/
├── pages/
│   ├── dashboard/
│   ├── login/
│   ├── products/
│   └── users/
├── Redux/
│   ├── auth.slice.ts
│   └── store.ts
├── Routes/
│   ├── App.tsx
│   ├── main-layout.tsx
│   ├── protected-route.tsx
│   └── providers.tsx
├── shared/
│   └── theme/
├── Storage/
│   └── auth-storage.ts
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

- `pages/`: Application pages and page-level logic.
- `Components/`: Reusable UI components and forms.
- `Modals/`: Reusable modal component.
- `Redux/`: Redux store and authentication slice.
- `Routes/`: Route configuration, protected routes, and application providers.
- `shared/theme/`: Theme context, provider, and theme switcher.
- `Storage/`: Authentication token persistence.
- `types/`: TypeScript type definitions for authentication, products, and users.
- `Utils/api/`: Shared Axios instance.
- `Utils/services/`: Product and user API operations.
- `Validations/`: Form validation schemas.

This structure separates page-level logic, reusable UI, API communication, application state, and validation.

## State Management

The application uses different state management approaches based on the responsibility of each part:

- **Redux Toolkit:** Authentication state, including the login process and authentication initialization.
- **React Context:** Global theme management.
- **React component state:** Page-specific state such as search queries, pagination, loading indicators, and modal visibility.

This keeps global application state separate from local UI state.

## API Integration

The application communicates with FakeStoreAPI through a shared Axios instance.

The API base URL is configured using the `VITE_API_URL` environment variable.

API operations are organized into separate service
