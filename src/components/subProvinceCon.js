import React from 'react';
import { Stylesheet, View, ActivityIndicator, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// galio components
import {
  Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';
import theme from '../theme';

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#000000';


const { width } = Dimensions.get('screen');


export default class SubProvinceCon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount () {
        return fetch('https://1d44d23174e8.ngrok.io/api/SubProvinces/Get')
        .then ((response) => response.json())
        .then ((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }



    render() {

      const { navigation } = this.props;


        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            )
        } else {

            let police = this.state.dataSource.map((val, key) => {
                return (
                    <View key={key}>
                      
                      <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Block row center card shadow space="between" style={styles.card1}  onPress={() => navigation.openDrawer()}>
          <Icon
            size={BASE_SIZE}
            name={'shield'}
            color={COLOR_WHITE}
            family={'Foundation'}
          />

        <Block flex onPress={() => Alert.alert('Like!')} >
          <Text size={BASE_SIZE * 1.725}>{val.name}{"\n"}</Text>
          {/* <Text size={BASE_SIZE * 1.325}>{"Headquarters"}</Text> */}
          {/* <Text size={BASE_SIZE * 1.275} muted>{val.tittle}</Text> */}
          <Text size={BASE_SIZE * 1.275} muted>{val.contact}</Text>
        </Block>
        <Button
                      key="right-heart"
                      onlyIcon
                      icon="angle-right"
                      iconFamily="font-awesome"
                      color="transparent"
                      iconColor={theme.COLORS.BLACK}
                      iconSize={theme.SIZES.BASE * 1.0625}
                      style={{ marginRight: theme.SIZES.BASE }}
                    />
      </Block>
      </TouchableOpacity>

                    </View>

                    
                )
            });
           return (
                <View style={{flex: 1, padding: 20}}>
                    {police}
                </View>
           ) 
        }
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
    marginHorizontal: BASE_SIZE * -0.5,
    marginVertical: BASE_SIZE * 0.3 ,
    padding: BASE_SIZE ,
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
