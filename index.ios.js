/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var NSLocaleManager = require('NativeModules').NSLocaleManager;

var Wego = React.createClass({

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    NSLocaleManager.usesMetricSystem((usesMetricSystem) => {
      this.setState({
        usesMetricSystem: usesMetricSystem
      });
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Uses metric system? {this.state.usesMetricSystem ? 'YES' : 'NO'}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Wego', () => Wego);
