// ErrorHandler.js

// Middleware para manejar errores
const errorHandler = (err, req, res, next) => {
  console.log("Error Handling Middleware");

  // Establecer el estado del error y el mensaje del error
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';

  // Responder con un objeto JSON que contiene el estado y el mensaje del error
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
};

// Exportar la función errorHandler
module.exports = errorHandler;
