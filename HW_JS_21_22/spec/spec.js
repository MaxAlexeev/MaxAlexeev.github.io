var app = require('../js/app.js');

describe("app", function() {

  it("it should call Test method", function() {
      //prepare
      var testResult;
      a = 3;
      b = 3;
     //act
     testResult = app.Test();
     //assert
    expect(result).toBe(27);
  });
});
