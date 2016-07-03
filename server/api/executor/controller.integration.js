'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

describe('Executor API:', function () {

  describe('POST init /api/execute', function () {
    var things;
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/execute').send({
        game: 'Slot_Server',
        action: 'init'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        things = res.body;
        done();
      });
    });

    it('should respond with JSON', function () {
      expect(things).to.be.instanceOf(Object);
    });
  });

  describe('POST spin /api/execute', function () {
    var things;
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/execute').send({
        game: 'Slot_Server',
        action: 'spin'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        things = res.body;
        done();
      });
    });

    it('should respond with JSON', function () {
      expect(things).to.be.instanceOf(Object);
    });
  });
});
//# sourceMappingURL=controller.integration.js.map
