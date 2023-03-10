import { styles } from './styles';
import { Image, Text, View } from 'react-native';
import clipboard from '../../../../assets/clipboard.png';

export const CardEmptyComponent = () => (
  <View style={styles.empty}>
    <Image style={styles.emptyLogo} source={clipboard} />

    <Text style={[styles.emptyText, styles.emptyTextBold]}>
      Você ainda não tem tarefas cadastradas
    </Text>

    <Text style={[styles.emptyText]}>
      Crie tarefas e organize seus itens a fazer
    </Text>
  </View>
);
