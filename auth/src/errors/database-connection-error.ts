export class DatabaseConnectionError extends Error {
  reason = "Error Connecting to database";
  constructor() {
    super();

    //Only because we are extending a built in classs
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
