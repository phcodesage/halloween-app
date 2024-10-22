# 🎃 Spooky Tales - Halloween Storytelling App 🎃

Welcome to **Spooky Tales**, an immersive Halloween-themed storytelling app where users' choices determine the outcome of each tale. Each decision leads to new adventures and paths, creating a dynamic experience!

## 📖 Project Overview

Dive into spooky stories like "The Haunted House" and "The Witch's Curse." Each story presents players with choices, leading to different scenarios and endings. Built with React Native and Expo Router for seamless navigation.

## 🚀 Tech Stack

* **React Native**: Cross-platform mobile app development
* **Expo**: Rapid development and testing
* **Expo Router**: Easy and dynamic routing
* **TypeScript**: Type safety and improved development experience
* **Lottie**: Animations and visual effects
* **CSS-in-JS (StyleSheet)**: Styling components

## 📂 File Structure

```bash
app/
├── index.tsx         # Main entry point (redirects to loading)
├── _layout.tsx       # Root layout configuration
├── (loading)/
│   └── index.tsx     # Loading screen component
├── (main)/
│   └── index.tsx     # Main screen component
└── story/
    ├── hauntedHouse/
    │   ├── index.tsx  # Starting point of the story
    │   ├── enter.tsx  # Decision screen: Enter the house
    │   └── run.tsx    # Decision screen: Run away
    ├── witchsCurse/
    │   ├── index.tsx  # Starting point of the story
    │   ├── forest/
    │   │   ├── index.tsx  # Original decision screen
    │   │   ├── speakWithWitch.tsx  # New screen
    │   │   └── stealPotion.tsx  # New screen
    │   └── village/
    │       ├── index.tsx  # Original decision screen
    │       ├── talkToElders.tsx  # New screen
    │       └── followFigure.tsx  # New screen
    └── ghostShip/
        ├── index.tsx  # Starting point of the story
        ├── board.tsx  # Decision screen: Board the ship
        └── flee.tsx   # Decision screen: Flee from the ship