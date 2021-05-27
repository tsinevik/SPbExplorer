import { DefaultTheme } from '@react-navigation/native';
import { styles } from 'styles/styles';
import { colors } from 'styles/colors';

export const SPbTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: styles.background.backgroundColor,
    text: colors.black,
    card: colors.green,
  },
};
