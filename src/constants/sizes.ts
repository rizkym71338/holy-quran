import { Dimensions } from 'react-native'

const dimension = Dimensions.get('window')

export const sizes = {
  wScreen: dimension.width,
  hScreen: dimension.height,
}
