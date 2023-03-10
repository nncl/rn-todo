import { Ref, useRef, useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import addIcon from '../../../../assets/plus.png';

interface SearchFormProps {
  onSubmit: (text: string) => void;
}

export const SearchFormComponent = ({ onSubmit }: SearchFormProps) => {
  const [task, setTask] = useState('');
  const [focus, setFocus] = useState(false);

  const inputRef: Ref<TextInput> = useRef(null);

  const add = () => {
    if (!task) {
      return Alert.alert('Ops', 'You forgot to type!', [
        {
          text: 'Ok',
          onPress: () => {
            inputRef?.current?.focus();
          },
        },
      ]);
    }

    onSubmit(task);
    setTask('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        ref={inputRef}
        style={[styles.input, focus && styles.inputFocus]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTask}
        value={task}
        enablesReturnKeyAutomatically={true}
        onSubmitEditing={add}
      />
      <TouchableOpacity style={styles.button} onPress={add}>
        <Image source={addIcon} />
      </TouchableOpacity>
    </View>
  );
};
