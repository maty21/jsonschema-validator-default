const Validator = require('ajv');
const validator = new Validator({ useDefaults: true });
const omitby = require('lodash.omitby');
const isNil = require('lodash.isnil');
const curry = require('lodash.curry');

const isObject = val => typeof val === 'object' && !Array.isArray(val);

const recursivelyOmitByUnit = (object) => {
    return Object.values(object).map(obj => {
        if (isObject(obj)) {
            obj = omitby(obj, isNil)
            recursivelyOmitByUnit(obj);
        }
        return obj
    })
}

const deepOmitby = object => {
    let returnedObj = {};
    let i = 0;
    let obj = recursivelyOmitByUnit(object)
    obj.forEach(item => {
        returnedObj[Object.keys(object)[i]] = item;
        i++
    });
    object = returnedObj;
    return object;
}

/**
/**
 * valid first check valid options and then add defailt property 
 * 
 * @param {any} schema valid json schema
 * @param {any} instance the object you wish to check  
 * @param {any} options options Object
 * @param {bool} options.ignoreNull default=false, allows to replace null property object with the default
 * @param {bool} options.useDefaultSchema default=false, allows to update instance properties with the default schema
 * @returns if valid returns the schema with it's defaults  if not return schema error 
 */
const _validator = (schema, instance, options = { ignoreNull: false }) => {
    instance = instance || {};
    if (options.ignoreNull) {
        instance = deepOmitby(instance);
    }
    const valid = validator.validate(schema, instance);
    const result = { valid, instance };
    if (!valid) {
        result.error = validator.errorsText(validator.errors);
    }
    return result;
}

const addSchema = (schema) => {
    validator.addSchema(schema, schema.id);
}

const addFormat = (name, format) => {
    validator.addFormat(name, format);
}


module.exports = curry(_validator);
module.exports.addSchema = addSchema;
module.exports.addFormat = addFormat;