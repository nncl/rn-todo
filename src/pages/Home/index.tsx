import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import clipboard from '../../../assets/clipboard.png';
import trash from '../../../assets/trash.png';

import { styles } from './styles';
import { useState } from 'react';
import { Checkbox } from 'expo-checkbox';
import { LogoComponent } from '../../components/logo';
import { SearchFormComponent } from '../../components/forms/search-form';
import { HeaderComponent } from '../../components/header';

export interface Task {
  value: string;
  finished: boolean;
}

export function Home() {
  const [items, setItems] = useState<Task[]>([]);

  const add = (task: string) => {
    if (!task) {
      return;
    }

    setItems((prevState) => [...prevState, { value: task, finished: false }]);
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <LogoComponent />

        <SearchFormComponent onSubmit={add} />

        <HeaderComponent items={items} />

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
