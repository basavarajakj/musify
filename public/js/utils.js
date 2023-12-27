/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';


/**
 * Add events on elements
 */
const addEventOnElms = function (elements, eventType, callback) {
  elements.forEach(element => element.addEventListener(eventType, callback));
}

export { addEventOnElms };