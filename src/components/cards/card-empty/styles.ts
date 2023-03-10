import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    fontFamily: 'Inter_700Bold',
  },
});
