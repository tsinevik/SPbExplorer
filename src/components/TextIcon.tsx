import React from 'react';
import { Icon, Text, View } from 'native-base';
import { globalStyles } from 'styles/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    marginRight: 4,
  },
  swiper: {
    ...globalStyles.flexRow,
    marginRight: 15,
  },
});

const TextIcon = ({
  iconName,
  text,
  small = false,
  rotate = false,
}: {
  iconName: string;
  text: string;
  small?: boolean;
  rotate?: boolean;
}) => {
  return (
    <View style={styles.swiper}>
      <Icon
        type="FontAwesome5"
        name={iconName}
        style={{
          ...styles.icon,
          transform: [{ rotate: rotate ? '-90deg' : '0deg' }],
        }}
      />
      <Text style={small ? globalStyles.smallText : globalStyles.regularText}>
        {text}
      </Text>
    </View>
  );
};

export default TextIcon;
