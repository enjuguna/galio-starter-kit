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
import SubProvinceCon from '../components/SubProvinceCon';

const { height } = Dimensions.get('window');

class PoliceConSubProvince extends React.Component {



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
          right={[
                    <Button
                      key="right-search"
                      onlyIcon
                      icon="search"
                      color="transparent"
                      iconFamily="font-awesome"
                      iconColor={theme.COLORS.BLACK}
                      iconSize={theme.SIZES.BASE * 1.0625}
                      onPress={() => Alert.alert('Search')}
                    />,
                  ]}
          
            />
                  <Text h5 flex style={{ padding: theme.SIZES.BASE }}>Sub-Counties</Text>

          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Block flex style={{ padding: theme.SIZES.BASE }}>
              </Block>
              <SubProvinceCon/>
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

export default PoliceConSubProvince;
