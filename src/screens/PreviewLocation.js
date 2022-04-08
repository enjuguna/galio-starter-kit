import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import { FontAwesome } from '@expo/vector-icons'; 
import * as Location from 'expo-location';

import MapComponent from '../components/MapComponent';

// galio components
import { Text, Button, Block, NavBar, Icon } from 'galio-framework';
import theme from '../theme';





class PreviewLocation extends React.Component {

 
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="Preview Location"
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE * 1.7}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Block flex style={{ padding: theme.SIZES.BASE * 1.22}}>
<MapComponent />

              </Block>
              <Block flex style={{ padding: theme.SIZES.BASE }}>

              <Button color="info" style={styles.button}  disabled={!MapComponent} round>
                  Continue
                </Button>
                </Block>
              </ScrollView>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    marginTop: theme.SIZES.BASE * 1.875,
  },
 
});

export default PreviewLocation;
