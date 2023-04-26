export default class AppError extends Error {
  statusCode: number;
  message: any;
  constructor(message: any, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
