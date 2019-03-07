pragma solidity ^0.5.0;

contract Test {

  event TestingOutput(uint256 result, string reason);

  constructor() public {
  }

  function checker() public pure returns (uint256, string memory) {
    return (321, "example testing output");
  }

  function testFunctionEmit() external returns (bool) {
    uint256 result;
    string memory reason;
    (result, reason) = checker(); 
    emit TestingOutput(result, reason);
    return true;
  }
  
  function testFunctionRequire() external returns (bool, uint256) {
    uint256 result;
    string memory reason;
    (result, reason) = checker(); 
    emit TestingOutput(result, reason); //this should never work
    require(false, "something invalid happened");
    return (true, 42);
  }
}

