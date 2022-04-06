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
  Text, Button, Block, NavBar, Icon, Accordion
} from 'galio-framework';
import theme from '../theme';

const { height } = Dimensions.get('window');
const orderConfirmedImage = require('../../assets/order_confirmed.png');

const data = [
    { title: "WHAT IS A HUMAN RIGHT?", content: "Lorem ipsum dolor sit amet"},
    { title: "HOW DO I KNOW WHEN MY RIGHTS HAVE BEEN VIOLATED?", content: "Lorem ipsum dolor sit amet" },
    { title: "AT WHAT POINT DO I GO TO COURT TO PROTECT MY RIGHTS?", content: "Lorem ipsum dolor sit amet" },
    { title: "I AM A USER, HOW DO I GET ASSISTANCE WHEN MY RIGHTS HAVE BEEN VIOLATED?", content: "Lorem ipsum dolor sit amet" }

  ];
  

class FAQ extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="FAQ"
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <Block flex center space="around" style={styles.container}>
        <Accordion dataArray={data} />
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

export default FAQ;
