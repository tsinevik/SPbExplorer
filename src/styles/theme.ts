import { DefaultTheme } from '@react-navigation/native';
import { colors } from 'styles/colors';

export const SPbTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryBackground: colors.bgPrimary,
    text: colors.fontPrimary,
    card: colors.header,
  },
};
