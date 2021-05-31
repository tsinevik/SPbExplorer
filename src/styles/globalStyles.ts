import { StyleSheet } from 'react-native';
import { colors } from 'styles/colors';

export const globalStyles = StyleSheet.create({
  primaryBackground: {
    backgroundColor: colors.bgPrimary,
  },
  cardImage: {
    height: 200,
    width: undefined,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsImage: {
    height: 500,
    width: undefined,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBackground: {
    backgroundColor: colors.header,
  },
  headerTitle: {
    color: colors.bgSecondary,
  },
  smallText: {
    fontSize: 16,
  },
});
