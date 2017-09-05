const { validate } = require('jsonschema');
const jsonDefaults = require('json-schema-defaults');
const defaultsDeep = require('lodash.defaultsdeep');
const curry = require('lodash.curry');


/**
 * valid first check valid options and then add defailt property 
 * 
 * @param {any} jsonschema valid json schema 
 * @param {any} validateObj the object you wish to check  
 * @returns if valid returns the schema with it's defaults  if not return jsonschema error 
 */


const _validator = (jsonschema,validateObj ) => {

    let isValid = validate(validateObj, jsonschema);
    if (isValid.valid) {
        defaultsDeep(validateObj, jsonDefaults(jsonschema));
    }
    return isValid;
}

module.exports.validator =  curry(_validator);