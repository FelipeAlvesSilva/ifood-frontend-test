import path from 'path';

module.exports = {
  verbose: true,
  testMatch: [path.join(__dirname, '../../**/?(*.)+(spec|test).[tj]s?(x)')],
};