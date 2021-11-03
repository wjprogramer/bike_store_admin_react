export default class StringUtility {}

StringUtility.isNullOrEmpty = (value) => {
  return value === undefined || value === null || value === '';
}

/**
 * 避免回傳空字串
 * @param {String} value 
 */
StringUtility.getValuePreventEmpty = (value) => {
  if (this.isNullOrEmpty(value)) {
    return '-';
  }
  return value;
}