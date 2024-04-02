import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { colors } from '@/constants'
import { BackIcon, MenuIcon, SearchIcon } from '@/assets'

interface CustomHeaderProps extends NativeStackHeaderProps {
  title: string
}

export const CustomHeader = ({ navigation, title }: CustomHeaderProps) => {
  let LeftIcon = navigation.canGoBack() ? BackIcon : MenuIcon

  const handleLeftIcon = () => {
    if (!navigation.canGoBack()) return
    return navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={handleLeftIcon}>
        <LeftIcon width={24} height={24} color={colors.gray} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <SearchIcon width={24} height={24} color={colors.gray} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    gap: 16,
    backgroundColor: colors.white,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primary,
  },
})
