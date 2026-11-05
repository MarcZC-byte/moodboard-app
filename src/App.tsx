import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from './styles/global-styles';
import { Ionicons } from '@expo/vector-icons';
import MoodCard from './components/MoodCard';
import NoteCard from './components/NoteCard';
import { useMoods } from './hooks/useMoods';

export default function App() {
  const { emoji, cambiarEmoji, reinciarEmoji } = useMoods();

  return (
    <View style={globalStyles.calculatorContainer}>
      <MoodCard emoji={emoji} cambiarEmoji={cambiarEmoji} reinciarEmoji={reinciarEmoji} />
      <NoteCard emoji={emoji} />
    </View>
  );
}