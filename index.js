export default {
  isIphoneX({ height, width }, ios = true) {
    return ios && ((height === 812 || width === 812) || (height === 896 || width === 896))
  },

  isOrientationLandscape({ width, height }) {
    return width > height
  }
}