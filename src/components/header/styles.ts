import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    lineHeight: 17,
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
    borderRadius: 100,
  },

  countText: {
    color: '#fff',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    lineHeight: 15,
  },

  colorBlue: {
    color: '#4EA8DE',
  },
  colorPurple: {
    color: '#8284FA',
  },
});
