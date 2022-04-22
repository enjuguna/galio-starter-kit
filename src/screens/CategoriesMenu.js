import React from 'react';
import { Dimensions, StyleSheet, Platform, TouchableOpacity } from 'react-native';
// galio components
import {  Button, Icon, Block, Text, NavBar } from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');
const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;


const chunk = (arr, size) => {
  const list = new Array(Math.ceil(arr.length / size)).fill()
    .map(() => arr.splice(0, size));
  return list;
};
const grids = [
  {
    title: 'Dawn Raids',
    icon: 'x-circle',
    family: 'Foundation',
  },
  {
    title: 'Cyber/Data Incident',
    icon: 'laptop',
    family: 'Foundation',
  },
  
  {
    title: 'Unannounced Visit',
    icon: 'unlock',
    family: 'Foundation',
  },
  {
    title: 'Seizure of Documents',
    icon: 'shield',
    family: 'Foundation',
  },
  {
    title: 'Privileged Documents',
    icon: 'folder-lock',
    family: 'Foundation',
  },
  {
    title: 'Social Oppression',
    icon: 'web',
    family: 'Foundation',
  },
];

class CategoriesMenu extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          fix
          title="Response Category"
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
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
        />
        <Block style={styles.grid}>
          {
            chunk(grids, 2).map((row, rowId) => (
              <Block row space="evenly" key={`row-${rowId}`}>
                {
                  row.map(grid => (
                    <Block shadow middle style={styles.block} key={`grid-${grid.title}}`}>
                      <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                        <Block flex middle >
                          <Icon name={grid.icon} family={grid.family} color={grid.icon} size={BASE_SIZE * 3.075} />
                          <Text size={BASE_SIZE * 1.175}>
                            {grid.title}
                            {' '}
                          </Text>
                        </Block>
                      </Button>
                    </Block>
                  ))
                }
              </Block>
            ))
          }
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  block: {
    backgroundColor: COLOR_WHITE,
    borderRadius: BASE_SIZE / 2,
    height: width * 0.38,
    width: width * 0.38,
    shadowOpacity: 0.4,
    elevation: BASE_SIZE / 2,
  },
  button: {
    width: 'auto',
    height: 'auto',
  },
});

export default CategoriesMenu;
