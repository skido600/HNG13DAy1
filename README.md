# **FactFetch API: A Node.js Express Backend** ✨

A robust Node.js Express API demonstrating foundational backend development practices, including modular routing, centralized error handling, and seamless external API integration. This service efficiently fetches interesting cat facts and provides a static user profile, showcasing a clean, maintainable project structure.

---

# FactFetch API

## Overview
This is a Node.js Express API server designed to fetch random cat facts from an external API and serve a predefined user profile. It utilizes Express.js for routing and middleware, with `dotenv` for environment variable management, and implements custom error handling.

## Features
- `Express.js`: Handles API routing and global middleware management.
- `dotenv`: Manages environment variables for secure configuration.
- `Node's native 'fetch' API`: Integrates seamlessly with external APIs (catfact.ninja).
- `Custom Error Handling Middleware`: Provides centralized management for server errors (500) and unhandled routes (404).

## Getting Started
### Installation
To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to Project Directory**:
    ```bash
    cd day1
    ```

3.  **Install Dependencies**:
    ```bash
    npm install
    ```

### Environment Variables
Create a `.env` file in the root of the project (`day1/`) and add the following required variable:

-   `PORT`: The port on which the Express server will listen.
    ```
    PORT=3000
    ```

## API Documentation
### Base URL
`http://localhost:{PORT}`

### Endpoints
#### `GET /me`
Retrieves a predefined user profile along with a randomly fetched cat fact.

**Request**:
No request body or query parameters are required for this endpoint.

**Response**:
```json
{
  "status": "success",
  "user": {
    "email": "ebisileonard@gmail.com",
    "name": "Ebisi chinecherem leonard",
    "stack": "node js express newbie in goland"
  },
  "timestamp": "2023-10-27T10:30:00.000Z",
  "fact": "A cat's brain is biologically very similar to a human brain."
}
```

**Errors**:
-   `500 Internal Server Error`: An unexpected server-side error occurred, potentially during the fetching of the external cat fact.
    ```json
    {
      "success": false,
      "status": 500,
      "message": "error fetching fact"
    }
    ```
-   `404 Not Found`: The requested route does not exist.
    ```json
    {
      "message": "Route /nonexistent-route not found"
    }
    ```

---

## Usage
After completing the installation and setting up environment variables, you can start the development server using the following command:

```bash
npm run dev
```

This will start the server, typically on `http://localhost:3000` (or whatever `PORT` you configured).

To access the API, you can use a tool like `curl` or simply visit the endpoint in your web browser:

```bash
curl http://localhost:3000/me
```

The server will respond with the user's information and a fresh cat fact.

## Key Features
✨ Cat Fact Integration: Fetches fascinating facts from a public API to enrich responses.
👤 User Profile Retrieval: Delivers a static user profile demonstrating basic data serving.
🛡️ Robust Error Handling: Implements custom middleware to gracefully manage 404 Not Found errors and internal server issues.
🧱 Modular Project Structure: Organizes code into controllers, routes, middleware, and utility functions for enhanced maintainability and scalability.

## Technologies Used
| Technology         | Description                                        | Link                                                               |
| :----------------- | :------------------------------------------------- | :----------------------------------------------------------------- |
| **Node.js**        | JavaScript runtime environment                     | [nodejs.org](https://nodejs.org/)                                  |
| **Express.js**     | Fast, unopinionated, minimalist web framework      | [expressjs.com](https://expressjs.com/)                            |
| **Dotenv**         | Loads environment variables from a `.env` file     | [github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)   |
| **CORS**           | Middleware for enabling Cross-Origin Resource Sharing | [github.com/expressjs/cors](https://github.com/expressjs/cors)     |
| **ESM**            | ECMAScript Modules for modern JavaScript imports   | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) |

## Contributing
Contributions are welcome! If you'd like to improve this project:

*   Fork the repository.
*   Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
*   Commit your changes (`git commit -m 'Add some AmazingFeature'`).
*   Push to the branch (`git push origin feature/AmazingFeature`).
*   Open a Pull Request.

Please ensure your code adheres to existing coding standards and includes relevant documentation.

## License
This project is licensed under the ISC License.

## Author
**Ebisi chinecherem leonard**
-   LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername) (Please replace with your actual LinkedIn profile)
-   Twitter: [@yourtwitterhandle](https://twitter.com/yourtwitterhandle) (Please replace with your actual Twitter handle)

## Badges
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)