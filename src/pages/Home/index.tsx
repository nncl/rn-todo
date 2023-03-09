import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';

import logo from '../../../assets/logo.png';
import add from '../../../assets/plus.png';

import {styles} from "./styles";

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}/>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor='#808080'/>
                <TouchableOpacity style={styles.button}>
                    <Image source={add} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
