import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'expo-checkbox';

import trash from '../../../../assets/trash.png';

import { Task } from '../../../pages/Home';
import { styles } from '../../../pages/Home/styles';

interface ItemComponentProps {
  item: Task;
  onToggleStatus: (value: boolean) => void;
  onRemove: () => void;
}

export const ItemComponent = ({
  item,
  onToggleStatus,
  onRemove,
}: ItemComponentProps) => (
  <View style={[styles.item, item.finished && styles.itemSelected]}>
    <Checkbox
      style={[styles.itemCheckbox]}
      color={item.finished ? '#5E60CE' : '#4EA8DE'}
      value={item.finished}
      onValueChange={(e) => onToggleStatus(e)}
    />
    <Text
      style={[styles.itemText, item.finished && styles.itemTextSelected]}
      numberOfLines={2}
    >
      {item.value}
    </Text>

    <TouchableOpacity style={styles.itemButton} onPress={onRemove}>
      <Image source={trash} />
    </TouchableOpacity>
  </View>
);
