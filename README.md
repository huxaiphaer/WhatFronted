# Product Search Application

A Next.js application featuring user authentication, product search, and real-time filtering capabilities. Built with TypeScript, Redux, and shadcn/ui components.

## Features

- User authentication with JWT
- Real-time product search
- Sortable data tables
- Persistent sessions
- Responsive design


## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Axios](https://axios-http.com/) - HTTP client
- [TanStack Table](https://tanstack.com/table/v8) - Table management
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
got clone git@github.com:huxaiphaer/WhatFronted.git
cd WhatFronted
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.


## API Routes

- `POST /api/v1/auth/login/` - User authentication
- `GET /api/v1/products/` - Product search
- `POST /api/v1/products/select/<product-uuid>/` - Product selection

## Development

The application uses several development tools:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for static type checking

Run the linter:
```bash
npm run lint
```