import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// galio components
import {
  Text, Button, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';

const { height } = Dimensions.get('window');

class AboutUs extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="About Us"
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
                HRD app is an application that is meant to help human rights defendants in the process of seeking legal representation.
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

export default AboutUs;
