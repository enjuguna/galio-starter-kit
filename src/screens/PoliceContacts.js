import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity, 
  ActivityIndicator
} from 'react-native';

// galio components
import {
  Text, Button, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';
import PoliceCon from '../components/PoliceCon';

const { height } = Dimensions.get('window');

class PoliceContacts extends React.Component {



  render() {

    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="Police Contacts"
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
          <Block flex style={{ padding: theme.SIZES.BASE }}>
          <Text h5>Provinces</Text>
              </Block>
              <PoliceCon/>
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
    marginBottom: height * 0.1
  }
});

export default PoliceContacts;
