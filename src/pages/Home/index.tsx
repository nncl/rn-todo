import {Alert, FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';

import logo from '../../../assets/logo.png';
import addIcon from '../../../assets/plus.png';
import clipboard from '../../../assets/clipboard.png';
import trash from '../../../assets/trash.png';

import {styles} from "./styles";
import {useState} from "react";
import {Checkbox} from "expo-checkbox";

interface Task {
    value: string;
    active: true,
}

export function Home() {
    const [focus, setFocus] = useState(false);

    const [task, setTask] = useState('');
    const [items, setItems] = useState<Task[]>([]);

    const add = () => {
        if (!task) {
            return Alert.alert('Ops', 'You forgot to type!')
        }

        setItems(prevState => [...prevState, {value: task, active: true}]);
        setTask('');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.logo} source={logo}/>

                <View style={styles.form}>
                    <TextInput style={[styles.input, focus && styles.inputFocus]}
                               onFocus={() => setFocus(true)}
                               onBlur={() => setFocus(false)}
                               placeholder='Adicione uma nova tarefa' placeholderTextColor='#808080'
                               onChangeText={setTask}
                               value={task}
                               enablesReturnKeyAutomatically={true}
                               onSubmitEditing={add}/>
                    <TouchableOpacity style={styles.button} onPress={add}>
                        <Image source={addIcon}/>
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
                        <Text style={[styles.headerText, styles.colorPurple]}>Concluídas</Text>
                        <View style={styles.count}>
                            <Text style={styles.countText}>1</Text>
                        </View>
                    </View>
                </View>

                <FlatList data={items}
                          showsVerticalScrollIndicator={false}
                          style={styles.list}
                          renderItem={({item}) => (
                              <View style={[styles.item, item.active && styles.itemSelected]} key={item}>
                                  <Checkbox style={[styles.itemCheckbox, !item.active && styles.itemCheckboxActive]}
                                            color={!item.active ? '#5E60CE' : '#4EA8DE'}
                                            value={!item.active}/>
                                  <Text style={[styles.itemText, !item.active && styles.itemTextSelected]}
                                        numberOfLines={2}>
                                      {item.value}
                                  </Text>

                                  <TouchableOpacity style={styles.itemButton}>
                                      <Image source={trash}/>
                                  </TouchableOpacity>
                              </View>
                          )}
                          ListEmptyComponent={() => (
                              <View style={styles.empty}>
                                  <Image style={styles.emptyLogo} source={clipboard}/>

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
