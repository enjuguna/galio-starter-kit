import React from 'react';
import {
  Dimensions, StyleSheet, ScrollView, Alert, Platform, TouchableOpacity, Linking
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// galio components
import {
  Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';
import theme from '../theme';

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';


const { width } = Dimensions.get('screen');

export default class Landing extends React.Component {
    
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="HRD Response"
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
          <Block flex space="between" style={styles.cards}>
          <Card
                  flex
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  style={styles.card}
                  titleColor={theme.COLORS.WHITE}
                  footerStyle={styles.cardFull}
                  imageStyle={{ height: theme.SIZES.BASE * 13.75 }}
                  image="https://i.postimg.cc/7P24fRwp/Green-International-Day-of-Democracy-Landscape-Banner.png"
                >
                  <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.cardGradient} />
                </Card>
    </Block>
    <Block style={styles.container}>
    <Button color="info" style={styles.button} round>
                  Login
                </Button>

    </Block>
    
    <Block style={{ padding: theme.SIZES.BASE }}>
    <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h4>Options</Text>
    </Block>
    <Block row center card shadow space="between" style={styles.card1} key={'title'} onPress={() => navigation.openDrawer()}>
          <Icon
            size={BASE_SIZE}
            name={'list-bullet'}
            color={COLOR_WHITE}
            family={'Galio'}
          />

        <Block flex>
          <Text size={BASE_SIZE * 1.125}>{'Police contacts'}</Text>
          <Text size={BASE_SIZE * 0.875} muted>{'Get police contacts near you'}</Text>
        </Block>
        <Button style={styles.right}>
          <Icon size={BASE_SIZE} name="minimal-right" family="Galio" color={COLOR_GREY} />
        </Button>
      </Block>
      <Block row center card shadow space="between" style={styles.card1} key={'title'}>
          <Icon
            size={BASE_SIZE}
            name={'list-bullet'}
            color={COLOR_WHITE}
            family={'Galio'}
          />

        <Block flex>
          <Text size={BASE_SIZE * 1.125}>{'Your rights'}</Text>
          <Text size={BASE_SIZE * 0.875} muted>{'Learn your rights and the actions you can take'}</Text>
        </Block>
        <Button style={styles.right}>
          <Icon size={BASE_SIZE} name="minimal-right" family="Galio" color={COLOR_GREY} />
        </Button>
      </Block>
      <Block row center card shadow space="between" style={styles.card1} key={'title'}>
          <Icon
            size={BASE_SIZE}
            name={'list-bullet'}
            color={COLOR_WHITE}
            family={'Galio'}
          />

        <Block flex>
          <Text size={BASE_SIZE * 1.125}>{'Court contacts'}</Text>
          <Text size={BASE_SIZE * 0.875} muted>{'Get court contacts for every level'}</Text>
        </Block>
        <Button style={styles.right}>
          <Icon size={BASE_SIZE} name="minimal-right" family="Galio" color={COLOR_GREY} />
        </Button>
      </Block>
      <Block row center card shadow space="between" style={styles.card1} key={'title'}>
          <Icon
            size={BASE_SIZE}
            name={'list-bullet'}
            color={COLOR_WHITE}
            family={'Galio'}
          />

        <Block flex>
          <Text size={BASE_SIZE * 1.125}>{'Register as a HRD'}</Text>
          <Text size={BASE_SIZE * 0.875} muted>{'Register for an account as a human rights defendant'}</Text>
        </Block>
        <Button style={styles.right}>
          <Icon size={BASE_SIZE} name="minimal-right" family="Galio" color={COLOR_GREY} />
        </Button>
      </Block>
    </ScrollView>
      </Block>
      
      


    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  button: {
    marginBottom: 10,
    marginTop: -10,
  },
  cards: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  cardFooter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  cardNoRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardAvatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  cardTitle: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE / 2,
  },
  cardImageContainer: {
    borderWidth: 0,
    overflow: 'hidden',
  },
  cardImageRadius: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  cardImage: {
    width: 'auto',
    height: theme.SIZES.BASE * 12.5,
  },
  cardRounded: {
    borderRadius: theme.SIZES.BASE * 0.5,
  },
  cardFull: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  cardGradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
  card1: {
    borderColor: 'transparent',
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.40,
  },
  menu: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  settings: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
