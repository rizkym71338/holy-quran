import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { Link } from 'expo-router'

import { WelcomeImage } from '@/assets'
import { colors, sizes } from '@/constants'
import { calculateHeight } from '@/libs'

export default function WelcomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Holy Quran</Text>
      <Text style={styles.subtitle}>Learn Quran and Recite once everyday</Text>
      <Image source={WelcomeImage} style={styles.image} />
      <Link href="/home" style={styles.button} replace>
        <Text style={styles.buttonText}>Get Started</Text>
      </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 30,
    gap: 16,
  },
  title: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.gray,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 79,
  },
  image: {
    width: sizes.wScreen - 60,
    height: calculateHeight(314, 450, sizes.wScreen - 60),
  },
  button: {
    backgroundColor: colors.paleCream,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
})
