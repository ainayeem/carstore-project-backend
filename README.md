﻿# carstore-project-backend

### A Professional Full-Stack Application to Manage Cars and Orders

## Features

#

1. Car Management

- Add new cars with details like brand, model, year, price and category.
- Fetch all cars, search by category, brand, or model.
- Retrieve details of a specific car by ID.
- Update car details.
- Delete cars from the store.

#

2. Order Management

- Place an order for a car, updating inventory and handling stock shortages.
- Automatically update the car's inStock status when inventory is depleted.
- Prevent orders with insufficient stock and return appropriate error messages.

#

3. Revenue Calculation

- Calculate the total revenue generated from all orders using MongoDB aggregation.
  Error Handling

#

Used Tools

- TypeScript
- Express
- MongoDB
- Mongoose

#

## Setup Instructions

- Clone the Repository
- Install Dependencies `npm install`
- Environment Variables in `.env` file

```ts
PORT=5000
MONGODB_URL=<your-mongodb-connection-string>
```

- Start the Application

```bash
npm run dev
//or
npm run build
npm start
```

## API Endpoints

Api Link: https://carstore-project-backend.vercel.app/

1. Car Management

- Create a Car: `POST /api/cars`
- Get All Cars: `GET /api/cars?searchTerm=<searchTerm>`
- Get a Specific Car: `GET /api/cars/:carId`
- Update a Car: `PUT /api/cars/:carId`
- Delete a Car: `DELETE /api/cars/:carId`

2. Order Management

- Create an Order: `POST /api/orders`
- Calculate Revenue: `GET /api/orders/revenue`

## Project Structure
```

├── eslint.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── src/
│   ├── app/
│   │   ├── config/
│   │   │   └── index.ts
│   │   └── modules/
│   │       ├── car/
│   │       │   ├── car.controller.ts
│   │       │   ├── car.interface.ts
│   │       │   ├── car.model.ts
│   │       │   ├── car.route.ts
│   │       │   └── car.service.ts
│   │       ├── handleResponse/
│   │       │   └── handleResponse.ts
│   │       └── order/
│   │           ├── order.controller.ts
│   │           ├── order.interface.ts
│   │           ├── order.model.ts
│   │           ├── order.route.ts
│   │           └── order.service.ts
│   ├── app.ts
│   └── server.ts
├── tsconfig.json
└── vercel.json

```
