import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useRouter } from 'expo-router'

import { colors } from '@/constants'

export default function RootPage() {
  const router = useRouter()

  setTimeout(() => router.replace('/welcome'), 1000)

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
})
