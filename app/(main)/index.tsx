// app/(main)/index.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const MainScreen: React.FC = () => {
  const router = useRouter();

  const handleStoryPress = (storyId: string) => {
    // Navigate to the selected story screen
    router.push(`/story/${storyId}`);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/spooky-background.jpg')}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>🎃 Spooky Tales 🎃</Text>
        <Text style={styles.subtitle}>Choose Your Adventure</Text>
      </View>

      <ScrollView contentContainerStyle={styles.storyList}>
        <TouchableOpacity style={styles.storyCard} onPress={() => handleStoryPress('hauntedHouse')}>
          <Text style={styles.storyTitle}>The Haunted House</Text>
          <Text style={styles.storyDescription}>Explore the mysteries of an abandoned mansion...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.storyCard} onPress={() => handleStoryPress('witchsCurse')}>
          <Text style={styles.storyTitle}>The Witch's Curse</Text>
          <Text style={styles.storyDescription}>Break the curse or become part of it...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.storyCard} onPress={() => handleStoryPress('ghostShip')}>
          <Text style={styles.storyTitle}>The Ghost Ship</Text>
          <Text style={styles.storyDescription}>Sail the seas with a crew of lost souls...</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>More stories coming soon...</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 36,
    color: '#FF4500',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  storyList: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  storyCard: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  storyTitle: {
    fontSize: 24,
    color: '#FFD700',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  storyDescription: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  footer: {
    paddingVertical: 20,
  },
  footerText: {
    color: '#888',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default MainScreen;
