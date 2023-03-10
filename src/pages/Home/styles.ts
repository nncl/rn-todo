import { StyleSheet } from 'react-native';

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

  list: {
    width: '100%',
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
  itemSelected: {
    borderColor: '#262626',
  },
  itemText: {
    flex: 1,
    color: '#fff',

    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  itemTextSelected: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  itemCheckbox: {
    borderRadius: 100,

    width: 17,
    height: 17,
  },
  itemButton: {
    width: 32,
    height: 32,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
