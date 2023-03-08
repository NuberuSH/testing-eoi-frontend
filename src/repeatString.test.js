import { repeatString } from "./repeatString.js";

const value1 = repeatString('Pepe', 1);
const expectedValue1 = 'Pepe';

const value2 = repeatString('Hipo', 2);
const expectedValue2 = 'HipoHipo';

const value3 = repeatString('Lolo', 4);
const expectedValue3 = 'LoloLoloLoloLolo';

const value4 = repeatString('Holi', 0);
const expectedValue4 = '';

function assertEquals(actualValue, expectedValue) {
    if (actualValue !== expectedValue) {
        throw new Error(
            `Esperaba el valor "${expectedValue}" pero me diste "${actualValue}"`
        );
    }
      else {}
          console.log(`Todo bien`)
}

assertEquals(value1, expectedValue1);
assertEquals(value2, expectedValue2);
assertEquals(value3, expectedValue3);
assertEquals(value4, expectedValue4);