# Unhandled Errors in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: missing error handling in route handlers.  The `bug.js` file showcases a route that lacks proper error handling for database operations and the case where a requested resource does not exist.  This can lead to unexpected application behavior, including crashes and unhelpful error messages to clients.

The `bugSolution.js` file provides a corrected version with comprehensive error handling, ensuring robustness and providing informative error responses.