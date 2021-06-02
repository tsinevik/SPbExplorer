import React from 'react';
import * as Progress from 'react-native-progress';
import { CardItem, Icon, Text, View } from 'native-base';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { colors } from 'styles/colors';
import { globalStyles } from 'styles/globalStyles';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderColor: colors.fontPrimary,
  },
  description: {
    flex: 1,
  },
  icon: {
    height: 50,
    width: 60,
    fontSize: 50,
    color: colors.progress,
    marginRight: 15,
  },
  label: {
    marginBottom: 5,
  },
});

const Achievement = ({
  task,
  total,
  progress,
  style,
}: {
  task: string;
  total: number;
  progress: number;
  style?: StyleProp<ViewStyle>;
}) => {
  const progressPercentage = progress / total;
  return (
    <CardItem style={[styles.wrapper, style]}>
      <Icon type="FontAwesome5" name="trophy" style={styles.icon} />
      <View style={styles.description}>
        <Text style={styles.label}>{task}</Text>
        <Progress.Bar
          borderColor={colors.fontPrimary}
          borderWidth={1.3}
          color={colors.progress}
          progress={progressPercentage}
          height={20}
          width={null}
          borderRadius={15}>
          <Text style={globalStyles.progressBar}>
            {progress} / {total}
          </Text>
        </Progress.Bar>
      </View>
    </CardItem>
  );
};

export default Achievement;
