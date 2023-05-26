class AppError extends Error {
  statusCode: number;
  constructor(message: any, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
