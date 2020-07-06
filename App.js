import React, {Component} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import Teliver from 'teliver';

export default class App extends Component {
  startTracking = () => {
    Teliver.startTracking('trackingID');
  };

  startMultiTracking = () => {
    Teliver.startMultiTracking('trackingID-1,trackingID-2');
  };

  componentDidMount() {
    Teliver.initSDK('YOUR_KEY', (success, message) => {
      console.log({success, message});
    });
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Teliver Example</Text>
        <View>
          <View style={{marginBottom: 10}}>
            <Button
              onPress={this.startTracking}
              underlayColor="white"
              title="Start Tracking"
            />
          </View>
          <View>
            <Button
              onPress={this.startMultiTracking}
              underlayColor="white"
              title="Start Multi Tracking"
              color="#ff6f66"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
});
