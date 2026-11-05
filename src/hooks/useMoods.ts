import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import { Icon } from '@expo/vector-icons/build/createIconSet';
import { Ionicons } from '@expo/vector-icons';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

export const useMoods = () => {

  const [emoji, setEmoji] = useState<IoniconName>('happy-outline');

  const [emojiActual, setEmojiActual] = useState<number>(0);


  const listaEmojis: IoniconName[] = [
    'happy-outline',
    'sad-outline',
    'heart-outline',
    'flame-outline',
    'alert-circle-outline',
    'help-circle-outline',
    'leaf-outline',
    'pulse-outline',
    'bed-outline',
    'moon-outline',
    'rocket-outline',
    'sparkles-outline',
    'bulb-outline',
    'warning-outline',
    'sunny-outline',
    'checkmark-circle-outline',
    'close-circle-outline',
    'briefcase-outline',
    'book-outline',
    'barbell-outline',
    'airplane-outline',
    'restaurant-outline',
    'musical-notes-outline',
    'game-controller-outline',
    'umbrella-outline',
    'medkit-outline',
    'people-outline',
  ];

  const reinciarEmoji = () => {
    setEmojiActual(1);
    setEmoji(listaEmojis[0]);
  }

  const cambiarEmoji = () => {
    setEmojiActual(emojiActual + 1);
    console.log(emojiActual)
    console.log(listaEmojis.length)
    if (emojiActual >= listaEmojis.length) {
      reinciarEmoji()
    } else {
      setEmoji(listaEmojis[emojiActual]);
    }
  };

  return {
    //Props
    emoji,
    //Methods
    cambiarEmoji,
    reinciarEmoji
  }
}
