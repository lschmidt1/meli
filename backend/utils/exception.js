class Exception extends Error {
  constructor(code = null, message = null) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

module.exports = Exception;
