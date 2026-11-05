import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { globalStyles } from '../styles/global-styles'
import { StatusBar } from 'expo-status-bar'
import { useMoods } from '../hooks/useMoods'
import { IoniconName } from '../hooks/useNotes'


type Props = {
    emoji: IoniconName,
    cambiarEmoji: () => void;
    reinciarEmoji: () => void;
};


const MoodCard = ({ emoji, cambiarEmoji, reinciarEmoji }: Props) => {

    return (
        <View>
            <View style={globalStyles.row} >
                <TouchableOpacity style={globalStyles.button} onPress={reinciarEmoji}>
                    <Ionicons name="refresh-outline" size={70}></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Ionicons name={emoji} size={100} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.button} onPress={cambiarEmoji}>
                    <Ionicons name="arrow-forward-outline" size={70}></Ionicons>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default MoodCard