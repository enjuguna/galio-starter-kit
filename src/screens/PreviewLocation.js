import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';


// galio components
import {
  Text, Button, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';

const { height } = Dimensions.get('window');

class PreviewLocation extends React.Component {

  state = {
      location: {},
      errorMessage: '',
  }

  componentWillMount(){
      this._getLocation();
  }

  _getLocation = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);

      if(status !== 'granted'){
          console.log('PERMISSION NOT GRANTED!');
          this.setState({
              errorMessage: 'PERMISSION NOT GRANTED!'
          })
      }
      
      const userLocation =  await Location.getCurrentPositionAsync();
      this.setState({
          location:userLocation
      })
    
  }
  render() {
    curr_location = this.state.location;
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
        <Block flex center space="around" style={styles.container}>
          <Block center flex={2}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Block flex style={{ padding: theme.SIZES.BASE }}>
                <Text p>

Here is the location
</Text>
<Text p>
{JSON.stringify(curr_location)}
</Text>
              </Block>
              </ScrollView>
          </Block>
        </Block>
        
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
    marginBottom: height * 0.1
  }
});

export default PreviewLocation;
