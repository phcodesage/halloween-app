// app/story/hauntedHouse/index.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const HauntedHouse: React.FC = () => {
  const router = useRouter();

  const handleDecision = (path: string) => {
    router.push(`/story/hauntedHouse/${path}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Haunted House</Text>
      <Text style={styles.description}>
        You stand before an old, eerie mansion. Its windows are dark, and the air is cold. What will you do?
      </Text>
      <TouchableOpacity onPress={() => handleDecision('enter')} style={styles.button}>
        <Text style={styles.buttonText}>Enter the House</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDecision('run')} style={styles.button}>
        <Text style={styles.buttonText}>Run Away</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HauntedHouse;
