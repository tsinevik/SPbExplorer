import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ChallengeScreen} from './ChallengeScreen';

const ChallengeStack = createStackNavigator();

export const ChallengeStackScreen = () => (
  <ChallengeStack.Navigator>
    <ChallengeStack.Screen name="Challenges" component={ChallengeScreen} />
    {/*<ChallengeStack.Screen name="Details" component={DetailsScreen} />*/}
  </ChallengeStack.Navigator>
);
