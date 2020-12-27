import { CustomError } from "./custom-error";
export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error Connecting to database";
  constructor() {
    super("Error Connecting to db...");

    //Only because we are extending a built in classs
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
