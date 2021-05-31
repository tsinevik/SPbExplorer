import React from 'react';
import { Icon, Text, View } from 'native-base';
import { globalStyles } from 'styles/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    marginRight: 4,
  },
  wrapper: {
    ...globalStyles.flexRow,
    marginRight: 15,
  },
});

const TextIcon = ({
  iconName,
  text,
  rotate = false,
}: {
  iconName: string;
  text: string;
  rotate?: boolean;
}) => {
  return (
    <View style={styles.wrapper}>
      <Icon
        type="FontAwesome5"
        name={iconName}
        style={{
          ...styles.icon,
          transform: [{ rotate: rotate ? '-90deg' : '0deg' }],
        }}
      />
      <Text style={globalStyles.smallText}>{text}</Text>
    </View>
  );
};

export default TextIcon;
