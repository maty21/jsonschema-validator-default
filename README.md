## jsonschema-validate-default
just a tiny libary based on jsonschema libary that allows you to test if your object is valid and if so to combine it with your deafults data



### usage example

```js
const validate = require('./validate').validator;

// create your schema
const json = {
    "name": "unknown",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "default": "id",
            "required": true
        },
        "age": {
            "default": 30,
            "type": "integer"
        }
    }
}

 let validObject = validate({id:"maty"},json) //=> {id:"maty",age:30}
 let validObject = validate({id:"maty",age:20},json) //=> {id:"maty",age:20}
 let validObject = validate({age:20},json) //=> {id:"maty",age:20} => error:{valid:false, errorDescription:"id is required"}
 let validObject = validate({id:123456},json) //=> error:{valid:false, errorDescription:"id is not a string error "}
