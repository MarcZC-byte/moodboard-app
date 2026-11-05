import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global-styles'
import { Ionicons } from '@expo/vector-icons'
import { useMoods } from '../hooks/useMoods'
import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native-paper'
import { IoniconName, useNotes } from '../hooks/useNotes'


type Props = {
    emoji: IoniconName;
};

const NoteCard = ({ emoji }: Props) => {

    const {
        notesList,
        nota,
        setNota,
        anadirNota,
        deleteNote

    } = useNotes(emoji)

    return (
        <View>
            <View style={globalStyles.row}>
                <TextInput
                    style={globalStyles.noteInput}
                    onChangeText={(e) => setNota(e)}
                    placeholder="Escribe tu nota..."
                    value={nota}
                    onSubmitEditing={anadirNota}
                    returnKeyType="send"
                />
                <TouchableOpacity style={globalStyles.button} onPress={anadirNota}>
                    <Ionicons name="add-outline" size={70} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ maxHeight: 600 }}>
                <View style={globalStyles.column}>
                    {
                        notesList.map((nota) => (
                            <View key={nota.id} style={globalStyles.noteItem}>
                                <Ionicons name={nota.emoji} size={70} />
                                <Text style={globalStyles.noteText}>
                                    {nota.text}
                                </Text>

                                <TouchableOpacity onPress={() => deleteNote(nota.id)}>
                                    <Ionicons
                                        name="trash-bin-outline"
                                        size={24}
                                        style={globalStyles.deleteIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
}

export default NoteCard