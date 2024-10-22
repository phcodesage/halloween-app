// app/(loading)/index.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';

const LoadingScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(main)'); // Navigate to the main screen
    }, 3000); // 3 seconds delay

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ImageBackground
      source={require('../../assets/images/spooky-background.jpg')}
      style={styles.container}
    >
      <LottieView
        source={require('../../assets/ghost-animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.title}>Spooky Tales</Text>
      <ActivityIndicator size="large" color="#fff" style={styles.loader} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  animation: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    textShadowColor: '#ff0000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  loader: {
    marginTop: 20,
  },
});

export default LoadingScreen;
