import {FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';

import logo from '../../../assets/logo.png';
import add from '../../../assets/plus.png';
import clipboard from '../../../assets/clipboard.png';

import {styles} from "./styles";
import {useState} from "react";
import {Checkbox} from "expo-checkbox";

export function Home() {
    const [focus, setFocus] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [items, setItems] = useState([1]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.logo} source={logo}/>

                <View style={styles.form}>
                    <TextInput style={[styles.input, focus && styles.inputFocus]}
                               onFocus={() => setFocus(true)}
                               onBlur={() => setFocus(false)}
                               placeholder='Adicione uma nova tarefa' placeholderTextColor='#808080'/>
                    <TouchableOpacity style={styles.button}>
                        <Image source={add}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.header}>
                    <View style={styles.headerItem}>
                        <Text style={[styles.headerText, styles.colorBlue]}>Criadas</Text>

                        <View style={styles.count}>
                            <Text style={styles.countText}>1</Text>
                        </View>
                    </View>

                    <View style={styles.headerItem}>
                        <Text style={[styles.headerText, styles.colorPurple]}>Concluídas</Text>
                        <View style={styles.count}>
                            <Text style={styles.countText}>1</Text>
                        </View>
                    </View>
                </View>

                <FlatList data={items} showsVerticalScrollIndicator={false}
                          renderItem={({item}) => (
                              <View style={styles.item} key={item}>
                                  <Checkbox style={[styles.itemCheckbox, isChecked && styles.itemCheckboxActive]}
                                            color={isChecked ? '#5E60CE' : '#4EA8DE'}
                                            value={isChecked} onValueChange={setChecked}/>
                                  <Text style={styles.itemText} numberOfLines={2}>
                                      Integer urna interdum massa libero auctor neque turpis turpis semper.
                                  </Text>
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
