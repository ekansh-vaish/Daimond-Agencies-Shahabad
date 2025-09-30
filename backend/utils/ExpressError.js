function createError(statusCode,message) {
    return {
     err  :message,
     status : statusCode
    }
}

module.exports = createError;