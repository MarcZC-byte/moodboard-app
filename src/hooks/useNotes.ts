import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Ionicons } from '@expo/vector-icons';

export type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

import { useMoods } from './useMoods';


export const useNotes = (emoji: IoniconName) => {

  type Note = {
    id: number;
    text: string;
    emoji: IoniconName;
  }

  const [nota, setNota] = useState("")

  const [notesList, setNotesList] = useState<Note[]>([])

  const anadirNota = () => {
    if (nota === "") return

    const newNote: Note = {
      id: Date.now(),
      text: nota,
      emoji: emoji
    }

    setNotesList([...notesList, newNote]);

    setNota("");
  }

  const deleteNote = (id: number) => {
    setNotesList(
      notesList.filter(nota => nota.id !== id)
    )
  }

  return {
    //Props
    nota,
    notesList,
    //Methods
    setNota,
    anadirNota,
    deleteNote
  }
}
