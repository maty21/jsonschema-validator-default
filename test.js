const validate = require('./validate').validator;

const json = {
    "name": "unknown",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "default": "id",
            "required": true
        },
        "info": {

            "type": "object",
            "properties": {
                "age": {
                    "type": "integer",
                    "default": 30,
                    "required": true
                },
            }
        }
    }
}
console.log(JSON.stringify(validate({ id: "12345", info: { age: 6 } }, json)))
console.log(JSON.stringify(validate({ id: "12345", info: { age: 6 } }, json)))

