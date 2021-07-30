/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import { Button, SafeAreaView, Text, View } from "react-native";

import { TabBar, TabView } from "react-native-tab-view";

const App: () => Node = () => {
  const tabs = [
    {key: 'a', title: 'A'},
    {key: 'b', title: 'B'},
    {key: 'c', title: 'C'},
    {key: 'd', title: 'D'},
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].key);
  const [showTabBar, setShowBabBar] = useState(true);
  const currentTabIndex = tabs.map(tab => tab.key).indexOf(currentTab);

  const renderScene = ({route}) => (
    <View>
      <Text>{route.title}</Text>
      <Button
        title={'toggle tab bar'}
        onPress={() => setShowBabBar(!showTabBar)}
      />
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TabView
        onIndexChange={index => setCurrentTab(tabs[index].key)}
        navigationState={{index: currentTabIndex, routes: tabs}}
        renderScene={renderScene}
        renderTabBar={props =>
          showTabBar ? <TabBar {...props} scrollEnabled={true} /> : null
        }
      />
    </SafeAreaView>
  );
};

export default App;
