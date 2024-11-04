
const loggingMiddleware = store => next => action => {
  console.log('Dispatching action:', action);
  return next(action);
};

export default loggingMiddleware;

