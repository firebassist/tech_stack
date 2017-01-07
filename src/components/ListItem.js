import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { Card, CardSection, Button } from './common';

class ListItem extends Component {
  onButtonPress() {
    Actions.editItem({ library: this.props.library });
  }

  render() {
    const { id, title } = this.props.library

    return (
      <Card>
        <CardSection style={{ padding: 20 }}>
          <TouchableOpacity
            onPress={this.onButtonPress.bind(this)}>
            <View>
              <Text style={styles.textStyle}>
                {title}
              </Text>
            </View>
          </TouchableOpacity>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textStyle: {
    color: 'red',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  }
}

const mapStateToProps = state => {
  return { selectedLibraryIdFromMapStateToProps: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(ListItem);
