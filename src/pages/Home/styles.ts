import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        marginTop: 24,
        marginBottom: 40,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 24,
        gap: 8,
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        padding: 16,
        borderRadius: 6,

        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        color: '#fff',
    },
    button: {
        width: 54,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#1E6F9F',
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
    }
})
