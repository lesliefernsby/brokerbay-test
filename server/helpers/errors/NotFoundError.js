class NotFoundError {
  message;
  name;

  constructor(message, name) {
    this.name = name;
    this.message = message;
  }
}

module.exports = {NotFoundError}


