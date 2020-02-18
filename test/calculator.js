const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const addition = require("../modules/addition");
const calculator = require("../modules/calculator");

// now we will use sinon for starving
/**
 * here sinon.match.any will check for the any variable and asign value to them 
 * yields means output
 */
/*
 describe("calculator", () => {
    it('It will caculate two numbers', (done) => {
        const add = sinon.stub(addition, "add");
        add.withArgs(sinon.match.any, sinon.match.any).yields(5);
        calculator.cal(1,4, (result) => {
            expect(result).to.equal(5);
            done();
        });
    });
});*/

// describe('calculator', () => {
//     it("It should calculate 2 nos", (done) => {
//         const add = sinon.stub(addition, "add").onFirstCall().yields(5).onCall(1).yields(9);
//         add.withArgs(sinon.match.any, sinon.match.any);
//         calculator.cal(1, 4,(result) => {
//             expect(result).to.equal(9);
//             done();
//         })
//     });
// });

describe('calculator', () => {
    it("It should calculate 2 nos", (done) => {
        const add = sinon.stub(addition, "add").onFirstCall().yields(5).onCall(1).yields(9);
        add.withArgs(sinon.match.any, sinon.match.any);
        expect(() => {
            calculator.cal(-1, 4,(result) => {
            
            }).to.throw(Error, "No cannon be less then 0")
            done();
        })
    });
});

