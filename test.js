const validate = require('./app');
const schemas = require('./schemas');

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

let result = validate(schemas.schema, instance);
console.log(result);

