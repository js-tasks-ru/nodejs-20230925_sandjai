const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.limitNum = options.limit;
    this.buff = Buffer.alloc(0);
  }

  _transform(chunk, encoding, callback) {
    this.buff = Buffer.concat([this.buff, chunk]);
    if (this.buff.length > this.limitNum) {
      return callback(new LimitExceededError());
    }
    return callback(null, chunk);
  }
}


module.exports = LimitSizeStream;
