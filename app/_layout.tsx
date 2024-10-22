// app/_layout.tsx
import { Stack } from 'expo-router';

const Layout: React.FC = () => {
  return (
    <Stack initialRouteName="(loading)">
      <Stack.Screen name="(loading)" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
