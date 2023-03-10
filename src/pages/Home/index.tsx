import { Alert, FlatList, SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';
import { LogoComponent } from '../../components/logo';
import { SearchFormComponent } from '../../components/forms/search-form';
import { HeaderComponent } from '../../components/header';
import { CardEmptyComponent } from '../../components/cards/card-empty';
import { ItemComponent } from '../../components/items/item';

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
            <ItemComponent
              item={item}
              key={index}
              onRemove={() => remove(index)}
              onToggleStatus={(e) => toggleStatus(e, index)}
            />
          )}
          ListEmptyComponent={() => <CardEmptyComponent />}
        />
      </View>
    </SafeAreaView>
  );
}
