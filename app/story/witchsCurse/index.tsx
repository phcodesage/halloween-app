// app/story/witchsCurse/index.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const WitchsCurse: React.FC = () => {
  const router = useRouter();

  const handleDecision = (path: string) => {
    router.push(`/story/witchsCurse/${path}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Witch's Curse</Text>
      <Text style={styles.description}>
        A dark curse has befallen the village. The witch's cabin lies deep in the forest, and whispers of a remedy are heard in the village market. What will you do?
      </Text>
      <TouchableOpacity onPress={() => handleDecision('forest')} style={styles.button}>
        <Text style={styles.buttonText}>Go to the Forest</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDecision('village')} style={styles.button}>
        <Text style={styles.buttonText}>Head to the Village</Text>
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

export default WitchsCurse;
