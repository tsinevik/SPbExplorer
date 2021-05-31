import React from 'react';
import * as Progress from 'react-native-progress';
import { Body, CardItem, Icon, Left, Text, View } from 'native-base';

const Achievement = ({
  task,
  total,
  progress,
}: {
  task: string;
  total: number;
  progress: number;
}) => {
  const progressPercentage = progress / total;
  return (
    <CardItem style={{ borderWidth: 2 }}>
      <Left>
        <Icon type="FontAwesome5" name="trophy" />
      </Left>
      <Body>
        <Text>{task}</Text>
        <Progress.Bar
          borderColor={'black'}
          color={'orange'}
          unfilledColor={'gray'}
          progress={progressPercentage}
          height={20}
          borderRadius={15}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'black',
              position: 'absolute',
              top: 0.5,
            }}>
            {progress} / {total}
          </Text>
        </Progress.Bar>
      </Body>
    </CardItem>
  );
};

export default Achievement;
