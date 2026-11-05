import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from './styles/global-styles';
import { Ionicons } from '@expo/vector-icons';
import MoodCard from './components/MoodCard';
import NoteCard from './components/NoteCard';

export default function App() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <MoodCard />
      <NoteCard />
    </View>
  );
}