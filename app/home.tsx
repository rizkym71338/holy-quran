import { StyleSheet, Text, View } from 'react-native'

import { colors, sizes } from '@/constants'
import { Image } from 'expo-image'
import { BannerImage } from '@/assets'
import { calculateHeight } from '@/libs'

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Assalamualaikum</Text>
      <Text style={styles.username}>Rizky Maulana</Text>
      <Image source={BannerImage} style={styles.banner} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.gray,
    marginBottom: 4,
  },
  username: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: 24,
  },
  banner: {
    width: sizes.wScreen - 48,
    height: calculateHeight(326, 131, sizes.wScreen - 48),
    borderRadius: 14,
    marginBottom: 24,
  },
})
