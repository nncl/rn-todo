import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';

import logo from '../../../assets/logo.png';
import add from '../../../assets/plus.png';

import {styles} from "./styles";

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.logo} source={logo}/>

                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor='#808080'/>
                    <TouchableOpacity style={styles.button}>
                        <Image source={add} />
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
            </View>
        </SafeAreaView>
    );
}
