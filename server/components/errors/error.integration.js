'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

describe('Error Redirection:', function () {

    describe('GET /api/unknownpath', function () {
        var text;
        beforeEach(function (done) {
            (0, _supertest2['default'])(app).get('/api/unknownpath').send().expect(404).end(function (err, res) {
                if (err) {
                    return done(err);
                }

                text = JSON.stringify(res);

                done();
            });
        });

        it('should respond with text containing  : Page Not Found', function () {
            expect(text).to.have.string("Page Not Found");
        });
    });
});
//# sourceMappingURL=error.integration.js.map
