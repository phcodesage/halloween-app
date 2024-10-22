// app/story/witchsCurse/forest.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Forest: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Into the Forest</Text>
      <Text style={styles.description}>
        You venture into the dark, twisted woods. The trees whisper, and shadows dart between the trunks. As you approach the witch's cabin, a raven lands on a branch, cawing loudly. What do you do?
      </Text>
      <TouchableOpacity onPress={() => router.push('/(main)')} style={styles.button}>
        <Text style={styles.buttonText}>Confront the Witch</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/(main)')} style={styles.button}>
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
    fontSize: 24,
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

export default Forest;
