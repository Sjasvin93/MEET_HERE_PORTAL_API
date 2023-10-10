module.exports = {
    // Common API Errors
    API_INVALID_REQUEST: {
        code: 4000,
        message: "Invalid request"
    },
    API_UNAUTHORIZED: {
        code: 4010,
        message: "Unauthorized"
    },
    API_FORBIDDEN: {
        code: 4030,
        message: "Access forbidden"
    },
    API_NOT_FOUND: {
        code: 4040,
        message: "Resource not found"
    },
    API_METHOD_NOT_ALLOWED: {
        code: 4050,
        message: "Method not allowed"
    },
    API_REQUEST_TIMEOUT: {
        code: 4080,
        message: "Request timeout"
    },
    API_CONFLICT: {
        code: 4090,
        message: "Conflict"
    },
    API_GONE: {
        code: 4100,
        message: "Resource gone"
    },
    API_UNSUPPORTED_MEDIA_TYPE: {
        code: 4150,
        message: "Unsupported media type"
    },
    API_TOO_MANY_REQUESTS: {
        code: 4290,
        message: "Too many requests"
    },
    API_INTERNAL_SERVER_ERROR: {
        code: 5000,
        message: "Internal server error"
    },
    API_NOT_IMPLEMENTED: {
        code: 5010,
        message: "Not implemented"
    },
    API_BAD_GATEWAY: {
        code: 5020,
        message: "Bad gateway"
    },
    API_SERVICE_UNAVAILABLE: {
        code: 5030,
        message: "Service unavailable"
    },
    API_GATEWAY_TIMEOUT: {
        code: 5040,
        message: "Gateway timeout"
    },



    // Common User Errors
    USER_NOT_FOUND: {
        code: 1003,
        message: "User doesn't exist"
    },
    USER_EMAIL_NOT_FOUND: {
        code: 1003,
        message: "User doesn't exist"
    },
    USER_INVALID_PASSWORD: {
        code: 1005,
        message: "Password is invalid"
    },
    USER_INVALID_USERNAME: {
        code: 1006,
        message: "Username is invalid"
    },
    USER_INVALID_EMAIL: {
        code: 1007,
        message: "email is invalid"
    },
    USER_INVALID_CREDENTIALS: {
        code: 1008,
        message: "Username or email is invalid"
    },
    USER_SUCCESSFUL_SIGNUP:{
        code: 1012,
        message: "User sign up successfully"
    },
    USER_SUCCESSFUL_LOGIN:{
        code: 1013,
        message: "login successful"
    },
    USER_PASSWORD_MISMATCH:{
        code: 1014,
        message: "Password doesn't match"
    },
    USER_USERNAME_CHANGE_SUCCESSFUL:{
        code: 1015,
        message: "Username changed successfully"
    },
    USER_EMAIL_UPDATE_SUCCESSFUL:{
        code: 1015,
        message: "Email updated successfully"
    },
    USER_PASSWORD_UPDATE_SUCCESSFUL:{
        code: 1015,
        message: "Password updated successfully"
    },
    USER_CREATE_ERROR:{
        code: 1015,
        message: "Error in creating the user"
    },
    USER_DELETE_ERROR:{
        code: 1015,
        message: "Error in deleting the user"
    },
    USER_EMAIL_SEND_SUCCESSFUL:{
        code: 1015,
        message: "Email sent successfully"
    },


    // Database Errors
    DATABASE_CONNECTION_ERROR: {
        code: 9000,
        message: "Database connection error"
    },
    DATABASE_QUERY_ERROR: {
        code: 9010,
        message: "Database query error"
    },
    DATABASE_DUPLICATE_RECORD: {
        code: 9020,
        message: "Duplicate record"
    },
    DATABASE_RECORD_NOT_FOUND: {
        code: 9030,
        message: "Record not found"
    },
    DATABASE_CONSTRAINT_VIOLATION: {
        code: 9040,
        message: "Database constraint violation"
    },
    DATABASE_DATA_INTEGRITY_ERROR: {
        code: 9050,
        message: "Data integrity error"
    },
    DATABASE_TRANSACTION_ERROR: {
        code: 9060,
        message: "Transaction error"
    },
    DATABASE_TIMEOUT: {
        code: 9070,
        message: "Database operation timed out"
    },
    DATABASE_LOCKED: {
        code: 9080,
        message: "Database is locked for updates"
    },
    DATABASE_DISK_FULL: {
        code: 9090,
        message: "Database disk space is full"
    },

    // Authentication Errors
    AUTH_INVALID_CREDENTIALS: {
        code: 8000,
        message: "Invalid credentials"
    },
    AUTH_ACCOUNT_LOCKED: {
        code: 8010,
        message: "Account locked due to too many failed login attempts"
    },
    AUTH_ACCOUNT_SUSPENDED: {
        code: 8020,
        message: "Account suspended"
    },
    AUTH_USER_NOT_FOUND: {
        code: 8030,
        message: "User not found"
    },
    AUTH_PASSWORD_EXPIRED: {
        code: 8040,
        message: "Password expired, please reset"
    },
    AUTH_TWO_FACTOR_AUTH_REQUIRED: {
        code: 8050,
        message: "Two-factor authentication required"
    },
    AUTH_INVALID_TOKEN: {
        code: 8060,
        message: "Invalid authentication token"
    },
    AUTH_TOKEN_EXPIRED: {
        code: 8070,
        message: "Authentication token expired"
    },
    AUTH_SESSION_EXPIRED: {
        code: 8080,
        message: "Session expired, please log in again"
    },
    AUTH_ACCESS_DENIED: {
        code: 8090,
        message: "Access denied"
    },
    AUTH_PASSWORD_WEAK: {
        code: 8100,
        message: "Weak password, please choose a stronger one"
    },

    // Success Messages
    OPERATION_SUCCESSFUL: {
        code: 2000,
        message: "Operation successful"
    }
}
