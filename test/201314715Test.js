const assert = require('chai').assert;

const app = require('../201314715');

// Results
sayGBResult = app.SayGoodbye();
substractNumberResult = app.substractNumbers(6,5);
esPrimoResult = app.esPrimo(17);
potecia3Result = app.PotenciaCubo(2);
esParResult = app.ParImar(5);

describe('App', function(){
  describe('substractNumbers()', function(){
    it('substractNumbers 6-5 should be 1', function(){
      
      assert.equal(substractNumberResult, 1);
    });

    it('substractNumbers should return type number', function(){
      
      assert.typeOf(substractNumberResult, 'number');
    });
  });

  describe('PotenciaCubo()', function(){
    it('PotenciaCubo gets 2, result should be 8', function(){
      
      assert.equal(potecia3Result, 8);
    });

    it('PotenciaCubo should return type number', function(){
      
      assert.typeOf(potecia3Result, 'number');
    });
});

  describe('esPrimo()', function(){
    it('esPrimo gets 17, should be true', function(){
      
      assert.equal(esPrimoResult, true);
    });

    it('esPrimo should return type Boolean', function(){
      
      assert.typeOf(esPrimoResult, 'boolean');
    });
});

describe('ParImar()', function(){
    it('ParImar should return impar', function(){
      
      assert.equal(esParResult, 'impar');
    });

    it('ParImar should return type string', function(){
      
      assert.typeOf(esParResult, 'string');
    });

});

    describe('SayGoodbye()', function(){
        it('SayGoodbye should return GoodBye', function(){
          
          assert.equal(sayGBResult, 'GoodBye');
        });
    
        it('SayGoodbye should return type string', function(){
          
          assert.typeOf(sayGBResult, 'string');
        });

  });
});