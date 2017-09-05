const validate = require('./validate').validator;

var json = {
    "title": "Album Options",
    "type": "object",
    "properties": {
        "sort": {
            "type": "string",
            "default": "id",
            "required": true
        },
        "per_page": {
            "default": 30,
            "type": "integer"
        }
    }
}

console.dir(validate({sort:6},json))
