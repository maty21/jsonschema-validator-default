const chai = require('chai');
const validate = require('../index');
const schemas = require('./schemas');
const expect = chai.expect;

const instance = {
    "nodes": [
        {
            "nodeName": "string",
            "algorithmName": "string",
            "input": [
                false, 5, 1.3, { "foo": "bar" }, [41, 34]
            ]
        }
    ],
    "flowInput": {},
    "webhooks": {
        "progressHook": {
            "url": "http://string.yu"
        },
        "resultHook": {
            "url": "http://string.fd"
        }
    },
    "options": {
        "batchTolerance": 60,
        "progressVerbosityLevel": "info"
    }
}

Object.values(schemas).forEach((s) => {
    if (s.id) {
        validate.addSchema(s);
    }
});

describe('Test', function () {
    it('validate', function () {
        let result = validate(schemas.schema, instance);
        expect(result.valid).to.equals(true);
        expect(result).to.have.property('valid');
        expect(result).to.have.property('instance');
    });
});
