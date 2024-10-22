// app/story/witchsCurse/forest/speakWithWitch.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const SpeakWithWitch: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speak with the Witch</Text>
      <Text style={styles.description}>
        You muster the courage to approach the witch. Her eyes pierce through the darkness, and she smiles, revealing sharp, crooked teeth. She offers you a deal: freedom from the curse in exchange for a secret ingredient...
      </Text>
      <TouchableOpacity onPress={() => router.push('/(main)')} style={styles.button}>
        <Text style={styles.buttonText}>Accept the Deal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/(main)')} style={styles.button}>
        <Text style={styles.buttonText}>Refuse and Flee</Text>
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

export default SpeakWithWitch;
