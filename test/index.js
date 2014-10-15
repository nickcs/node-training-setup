var client = require('../index');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('node redis', function(){
  after(function(){
    client.quit();
  });

  describe('when loading data', function(){
    var spy = sinon.spy();

    before(function(){
      client.loadData(spy);
    });

    it('the response should not return an error', function(){
      expect(spy).to.have.been.calledWith(undefined);
    });
  });

  describe('when retreiving data', function(){
    var error, result;
    before(function(){
      client.getData(function(err,data){
        error = err;
        result = data;
      });
    });

    it('should not return an error', function(){
      expect(error).to.not.exist;
    });

    it('should return 2 items', function(){
      expect(result).to.have.length(2);
    });
  });
});
