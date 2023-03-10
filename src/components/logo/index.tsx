import { Image } from 'react-native';

import { styles } from './styles';
import logo from '../../../assets/logo.png';

export const LogoComponent = () => <Image style={styles.logo} source={logo} />;
