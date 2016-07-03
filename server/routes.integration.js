'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('./');

describe('Routing:', function () {

  describe('GET /unknownpath', function () {
    var text;
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/unknownpath').send().expect(200).end(function (err, res) {
        if (err) {
          return done(err);
        }
        text = res.text;
        done();
      });
    });

    it('should respond with text containing title : Game Execution Server', function () {
      expect(text).to.have.string("<title>Game Execution Server</title>");
    });
  });
});
//# sourceMappingURL=routes.integration.js.map
