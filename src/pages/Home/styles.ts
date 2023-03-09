import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',

        paddingHorizontal: 24,
    },
    logo: {
        marginTop: 24,
        marginBottom: 40,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        gap: 8,
        marginBottom: 32
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

        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#262626',
    },
    inputFocus: {
        borderColor: '#5E60CE',
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
    },

    header: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',

        marginBottom: 20,
    },
    headerText: {
        color: '#fff',

        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        lineHeight: 17
    },
    headerItem: {
        flexDirection: 'row',
        gap: 8,
    },

    count: {
        width: 25,
        height: 19,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#333333',
        borderRadius: 100
    },

    countText: {
        color: '#fff',
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        lineHeight: 15
    },

    colorBlue: {
        color: '#4EA8DE',
    },
    colorPurple: {
        color: '#8284FA',
    },

    empty: {
        width: '100%',
        alignItems: 'center',

        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: '#333333',

        paddingVertical: 48,
        paddingHorizontal: 20,
    },
    emptyLogo: {
        marginBottom: 16,
    },
    emptyText: {
        color: '#808080',

        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        lineHeight: 20,
    },
    emptyTextBold: {
        fontFamily: 'Inter_700Bold'
    },

    item: {
        width: '100%',

        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

        backgroundColor: '#262626',

        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#333333',

        borderRadius: 8,

        padding: 12,
        marginBottom: 8,
    },
    itemText: {
        color: '#fff',

        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        lineHeight: 20,
    },
    itemCheckbox: {
        borderColor: '#4EA8DE',
        borderRadius: 100,

        width: 17,
        height: 17,
    },
    itemCheckboxActive: {
        borderColor: '#5E60CE',
        fontSize: 4
    }
})
