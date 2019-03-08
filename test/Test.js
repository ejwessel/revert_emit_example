const truffleAssert = require('truffle-assertions');
var Test = artifacts.require("Test");

contract('Test', async (accounts) => {

    let instance;

    before(async() => {
      instance = await Test.new();
    });

    it("Test Function Emit", async() => {
      output = await instance.testFunctionEmit();
      //console.log(output['logs']);
      console.log(`output: ${output['logs'][0]['args'][0].toNumber()}`);
      console.log(`reason: ${output['logs'][0]['args'][1]}`);
    });

    it("Test Function Require", async() => {
      output = await instance.testFunctionRequire();
      //console.log(output);
      console.log(`output: ${output['logs'][0]['args'][0].toNumber()}`);
      console.log(`reason: ${output['logs'][0]['args'][1]}`);
    });

    it("testRequiresMessage", async() => {
      console.log("output 1 call");
      output = await truffleAssert.fails(instance.testRequiresMessage.call());
      console.log(output); //will print undefined since nothing happened
      console.log("output 2 transaction");
      output = await truffleAssert.fails(instance.testRequiresMessage());
      console.log(output); //will print undefined since nothing happened
    });
});
