/**
 * @function isValidJSON
 * @param  {String} jsonString
 * @return {Boolean} is jsonString valid JSON
 */

 const {isValidJSON} = require('../middleware/validations');

 describe('isValidateJSON', () => {
     test("checks if function is correctly imported.", () => {
         expect(isValidJSON).toBeInstanceOf(Function);
     })
     test("returns false for invalidJson.", ()=>{
         expect(isValidJSON("abc")).toBeFalsy()
     })
     test("returns true for validJson.", ()=>{
        expect(isValidJSON('{"abc":"abc"}')).toBeTruthy()
    })
    test("returns false when string is not passed.", ()=>{
        expect(isValidJSON()).toBeFalsy()
    })
 })