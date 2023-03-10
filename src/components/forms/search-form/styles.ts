import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 32,
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
});
