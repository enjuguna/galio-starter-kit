import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, SafeAreaView, Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';

// screens
import Article from './src/screens/Article';
import ArticleCover from './src/screens/ArticleCover';
import Cards from './src/screens/Cards';
import Components from './src/screens/Components';
import Login from './src/screens/Login';
import News from './src/screens/News';
import OrderConfirmed from './src/screens/OrderConfirmed';
import Presentation from './src/screens/Presentation';
import Dashboard from './src/screens/Dashboard';
import Register from './src/screens/Register';
import Registerv2 from './src/screens/Registerv2';
import Grid from './src/screens/Grid';
import Landing from './src/screens/Landing';
import Privacypolicy from './src/screens/Privacypolicy';
import AboutUs from './src/screens/AboutUs';
import FAQ from './src/screens/FAQ';
import PreviewLocation from './src/screens/PreviewLocation';
import PoliceContacts from './src/screens/PoliceContacts';
import CategoriesMenu from './src/screens/CategoriesMenu';

import theme from './src/theme';
import { Block, Icon, Text } from 'galio-framework';

const GalioDrawer = props => (
  <SafeAreaView style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block space="between" row style={styles.header}>
      <Block flex={0.3}><Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.avatar} /></Block>
      <Block flex style={styles.middle}>
        <Text size={theme.SIZES.FONT * 1.575}>John Mwangi</Text>
        <Text muted size={theme.SIZES.FONT * 1.175}>Activist</Text>
      </Block>
    </Block>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingTop: theme.SIZES.BASE * 1.6875,
    paddingBottom: theme.SIZES.BASE * 1.6875,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 0.5,
    marginTop: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : null,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
});

const MenuIcon = ({ name, family, focused }) => (
  <Icon
    name={name}
    family={family}
    size={theme.SIZES.FONT}
    color={focused ? theme.COLORS.WHITE : '#5D5D5D'}
  />
);

MenuIcon.defaultProps = {
  name: null,
  family: null,
  focused: false,
};

MenuIcon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  focused: PropTypes.bool,
};

const screens = {
  Home: {
    screen: Landing,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: props => <MenuIcon name="home" family="font-awesome" focused={props.focused} />,
    },
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      drawerLabel: 'About Us',
      drawerIcon: props => <MenuIcon name="address-card" family="font-awesome" focused={props.focused} />,
    },
  },
  Privacypolicy: {
    screen: Privacypolicy,
    navigationOptions: {
      drawerLabel: 'Privacy policy',
      drawerIcon: props => <MenuIcon name="shield" family="font-awesome" focused={props.focused} />,
    },
  },
  FAQ: {
    screen: FAQ,
    navigationOptions: {
      drawerLabel: 'FAQ',
      drawerIcon: props => <MenuIcon name="question" family="font-awesome" focused={props.focused} />,
    },
  },
  Components: {
    screen: Components,
    navigationOptions: {
      drawerLabel: 'Landing',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  PoliceContacts: {
    screen: PoliceContacts,
    navigationOptions: {
      drawerLabel: 'PoliceContacts',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  CategoriesMenu: {
    screen: CategoriesMenu,
    navigationOptions: {
      drawerLabel: 'CategoriesMenu',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  // Cards: {
  //   screen: Cards,
  //   navigationOptions: {
  //     drawerLabel: 'Cards',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // Article: {
  //   screen: Article,
  //   navigationOptions: {
  //     drawerLabel: 'Article Screen',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // ArticleCover: {
  //   screen: ArticleCover,
  //   navigationOptions: {
  //     drawerLabel: 'Article Cover',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  
  // Dashboard: {
  //   screen: Dashboard,
  //   navigationOptions: {
  //     drawerLabel: 'Dashboard screen',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // News: {
  //   screen: News,
  //   navigationOptions: {
  //     drawerLabel: 'News Screen',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // OrderConfirmed: {
  //   screen: OrderConfirmed,
  //   navigationOptions: {
  //     drawerLabel: 'Order Confirmed',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // Presentation: {
  //   screen: Presentation,
  //   navigationOptions: {
  //     drawerLabel: 'Presentation Screen',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // Login: {
  //   screen: Login,
  //   navigationOptions: {
  //     drawerLabel: 'Login Screen',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // Register: {
  //   screen: Register,
  //   navigationOptions: {
  //     drawerLabel: 'Register Screen',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // Registerv2: {
  //   screen: Registerv2,
  //   navigationOptions: {
  //     drawerLabel: 'Register Screen v2',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  Grid: {
    screen: Grid,
    navigationOptions: {
      drawerLabel: 'Grid Screen',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  PreviewLocation: {
    screen: PreviewLocation,
    navigationOptions: {
      drawerLabel: 'Preview Location',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
};

const options = {
  contentComponent: props => <GalioDrawer {...props} />,
  contentOptions: {
    labelStyle: {
      fontWeight: '500',
      color: theme.COLORS.GREY,
      fontSize: theme.SIZES.FONT * 1.375,
      marginLeft: theme.SIZES.BASE * 0.75,
    },
    activeLabelStyle: {
      color: theme.COLORS.WHITE,
    },
    activeBackgroundColor: theme.COLORS.THEME,
    itemsContainerStyle: {
      paddingVertical: 0,
    },
    iconContainerStyle: {
      marginHorizontal: 0,
      marginLeft: theme.SIZES.BASE * 1.85,
      // marginRight: theme.SIZES.BASE * 0.76,
    },
  },
};

const GalioApp = createDrawerNavigator(screens, options);

export default GalioApp;
