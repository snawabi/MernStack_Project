// export and import keywords -

//firtFile.js

export default firstValue = 999; //default export only one is allowed in a file

export function printSomething(params) { } //named export and nameexport can be many in a file
export const pi = 7.24;

//constants.js
//export const pi = 3.141;
export const pi_1 = 3.141;
export const pi_2 = 3.141;
export const pi_3 = 3.141;

//secondFile.js
import {pi, printSomething} from "./firstfile"; //name imports within bracket
import firstValue from "./firstfile"; //default import without bracket

import firstValue, {pi, printSomething} from "./firstfile"; //default and named imports can be combined

//alias the variable name to avoid duplicacy
import {pi as piFromConstants } from "./constants";

//wildcard or star
import * as allConstants from "./constants";

console.log(allConstants.pi_1)
console.log(allConstants.pi_2)