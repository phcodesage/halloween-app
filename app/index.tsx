// app/index.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Index: React.FC = () => {
  const router = useRouter();
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    // Simulate app initialization or a brief delay before navigating
    const timer = setTimeout(() => {
      setAppReady(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAppReady) {
      router.replace('/(loading)');
    }
  }, [isAppReady, router]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default Index;
