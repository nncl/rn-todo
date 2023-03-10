import { styles } from '../../pages/Home/styles';
import { Text, View } from 'react-native';
import { Task } from '../../pages/Home';

interface HeaderComponentProps {
  items: Task[];
}

export const HeaderComponent = ({ items = [] }: HeaderComponentProps) => {
  const activeTasks = (): number => {
    return items.filter((item) => item.finished).length;
  };

  return (
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
          <Text style={styles.countText}>{activeTasks()}</Text>
        </View>
      </View>
    </View>
  );
};
