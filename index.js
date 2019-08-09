import decimal from './lib/decimal';
import encrypt from './lib/encryptSHA';
import generatePushID from './lib/generatePushID';
import validateEmail from './lib/validateEmail';

export default {
  decimal(num: number, decimals: number) {
    return decimal(num, decimals);
  },

  decimalBRL(num: number) {
    return `R$${decimal(num, 2)}`;
  },

  decimalKG(num: number, decimals: number) {
    return `${decimal(num, decimals)} KG`;
  },

  decimalBank(num: number) {
    num = num / 100;
    return decimal(num, 2);
  },

  encryptSHA(text: string) {
    return encrypt.hash(text, { outFormat: 'hex' });
  },

  generatePushID() {
    return generatePushID();
  },

  isIphoneX({ height, width }, ios = true) {
    return ios && ((height === 812 || width === 812) || (height === 896 || width === 896));
  },

  isOrientationLandscape({ width, height }) {
    return width > height;
  },

  validateEmail(email = '') {
    return validateEmail(email);
  },
}