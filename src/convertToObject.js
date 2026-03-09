'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.trim())
    .reduce((cssObject, style) => {
      const [property, value] = style.split(':');
      
      cssObject[property.trim()] = value.trim();

      return cssObject;
    }, {});
}

module.exports = convertToObject;
