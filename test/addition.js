const chai = require("chai");
const expect = chai.expect;
const addition = require("../modules/addition");

/**
 * here we are calling addition function and getting value in result 
 * done in callback function
 */
describe('addition', () => {
    it('It should add 2 numbers', (done) => {
        addition.add(1,4, (result) => {
            expect(result).to.equal(5);
            done();
        });
    });
});



