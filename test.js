const validate = require('./app');

const json = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "required": true
        },
        "info": {
            "type": "object",
            "properties": {
                "age": {
                    "type": "integer",
                    "default": 30
                },
                "familyName": {
                    "type": "string",
                    "default": "unknown",
                    "required": false,

                },
            }
        }
    }
}

let obj = { name: "12345" };
let resultWithSchema = validate(json, obj, { useDefaultSchema: true });

let validateWithSchema = validate(json);
console.log(JSON.stringify(validateWithSchema({ id: "12345", info: { age: 6, familyName: null } }).instance))
console.log(JSON.stringify(validateWithSchema({ id: "12345", info: { age: 6, familyName: null } }, { ignoreNull: true }).instance))

