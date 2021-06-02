import * as React from 'react';
import { CardItem, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { colors } from 'styles/colors';
import { typography } from 'styles/typography';
import { globalStyles } from 'styles/globalStyles';

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: colors.fontPrimary,
    height: 80,
    width: 150,
    flexDirection: 'column',
  },
  number: {
    color: colors.fontPrimary,
    fontFamily: typography.bigNumbersFont,
    fontSize: 36,
    paddingTop: 5,
  },
  label: {
    fontSize: 14,
    width: '120%',
    textAlign: 'center',
    lineHeight: 14,
    marginTop: -3,
  },
});

const Statistic = ({ label, value }: { label: string; value: number }) => {
  return (
    <CardItem style={styles.card}>
      <Text style={styles.number}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </CardItem>
  );
};

export default Statistic;
