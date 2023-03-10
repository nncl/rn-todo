import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import logo from '../../../assets/logo.png';
import addIcon from '../../../assets/plus.png';
import clipboard from '../../../assets/clipboard.png';
import trash from '../../../assets/trash.png';

import { styles } from './styles';
import { Ref, useRef, useState } from 'react';
import { Checkbox } from 'expo-checkbox';

interface Task {
  value: string;
  finished: boolean;
}

export function Home() {
  const [focus, setFocus] = useState(false);

  const [task, setTask] = useState('');
  const [items, setItems] = useState<Task[]>([]);

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

    setItems((prevState) => [...prevState, { value: task, finished: false }]);
    setTask('');
  };

  const remove = (i: number) => {
    Alert.alert('Are you sure?', 'We cannot rollback this!', [
      {
        text: 'Nope!',
        style: 'cancel',
      },
      {
        text: 'Im sure',
        style: 'destructive',
        onPress: () => {
          const filtered = items.filter((_, index) => index !== i);
          setItems(filtered);
        },
      },
    ]);
  };

  const toggleStatus = (value: boolean, i: number) => {
    const nextItems = items.map((item, index) => {
      if (index === i) {
        return { ...item, finished: value };
      } else {
        return item;
      }
    });

    setItems(nextItems);
  };

  const activeTasks = (): number => {
    return items.filter((item) => item.finished).length;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.logo} source={logo} />

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

        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={[styles.headerText, styles.colorBlue]}>Criadas</Text>

            <View style={styles.count}>
              <Text style={styles.countText}>{items.length}</Text>
            </View>
          </View>

          <View style={styles.headerItem}>
            <Text style={[styles.headerText, styles.colorPurple]}>
              Concluídas
            </Text>
            <View style={styles.count}>
              <Text style={styles.countText}>{activeTasks()}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          style={styles.list}
          renderItem={({ item, index }) => (
            <View
              style={[styles.item, item.finished && styles.itemSelected]}
              key={index}
            >
              <Checkbox
                style={[
                  styles.itemCheckbox,
                  item.finished && styles.itemCheckboxActive,
                ]}
                color={item.finished ? '#5E60CE' : '#4EA8DE'}
                value={item.finished}
                onValueChange={(e) => toggleStatus(e, index)}
              />
              <Text
                style={[
                  styles.itemText,
                  item.finished && styles.itemTextSelected,
                ]}
                numberOfLines={2}
              >
                {item.value}
              </Text>

              <TouchableOpacity
                style={styles.itemButton}
                onPress={() => remove(index)}
              >
                <Image source={trash} />
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              <Image style={styles.emptyLogo} source={clipboard} />

              <Text style={[styles.emptyText, styles.emptyTextBold]}>
                Você ainda não tem tarefas cadastradas
              </Text>

              <Text style={[styles.emptyText]}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
