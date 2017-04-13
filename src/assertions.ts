import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

export const equals = expected => actual => chai.expect(actual).to.eventually.equal(expected);
