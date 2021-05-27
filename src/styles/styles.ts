import { StyleSheet } from 'react-native';
import { colors } from 'styles/colors';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.alabaster,
  },
  cardImage: {
    height: 200,
    width: undefined,
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  headerBackground: {
    backgroundColor: colors.green,
  },
  headerTitle: {
    color: colors.white,
  },
});
