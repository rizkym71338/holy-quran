import { Stack } from 'expo-router'

import { CustomHeader } from '@/components'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{
          header: (props) => <CustomHeader title="Holy Quran" {...props} />,
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          header: (props) => <CustomHeader title="Al-Fatiah" {...props} />,
        }}
      />
    </Stack>
  )
}
