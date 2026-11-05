import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { globalStyles } from '../styles/global-styles'
import { StatusBar } from 'expo-status-bar'
import { useMoods } from '../hooks/useMoods'

const MoodCard = () => {

    const {
        emoji,

        cambiarEmoji,
        reinciarEmoji

    } = useMoods()

    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={globalStyles.row} >
                <TouchableOpacity style={globalStyles.button} onPress={reinciarEmoji}>
                    <Text>Reinicar</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Ionicons name={emoji} size={100} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.button} onPress={cambiarEmoji}>
                    <Text>Cambiar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default MoodCard