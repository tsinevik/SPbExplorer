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
    height: 300,
    width: undefined,
  },
  swiper: {
    height: 300,
  },
  content: {
    padding: 25,
  },
  detailsHeading: {
    marginBottom: 7,
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
  regularText: {
    fontSize: 18,
  },
  input: {
    lineHeight: 28,
    marginBottom: 20,
  },
  progressBar: {
    alignSelf: 'center',
    color: colors.fontPrimary,
    position: 'absolute',
    top: 0.5,
  },
});
