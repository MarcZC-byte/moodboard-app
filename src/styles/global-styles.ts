import { Colors } from "../constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 60,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: 400,
        fontFamily: 'SpaceMono',
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: 300,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.pastel,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginHorizontal: 20,
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: 300,
        fontFamily: 'SpaceMono',
    },
    noteInput: {
        width: '70%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
    noteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 18,
        marginVertical: 6,
        marginHorizontal: 20,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },

    noteText: {
        fontSize: 16,
        color: '#333333',
        flex: 1,
        marginRight: 15,
    },

    deleteIcon: {
        color: '#E57373',
    },
})