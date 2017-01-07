import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { SimpleButton, Card, CardSection, Input } from './common';
import * as actions from '../actions';

class ItemAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
        myLibraryTitle: '',
        myLibraryDescription: ''
    }
  }

  updateTitle = (myLibraryTitle) => {
       this.setState({myLibraryTitle})
    }

  onButtonPress() {
      Actions.itemList()
      this.props.addLibraryActionCreator(this.state.myLibraryTitle,  this.state.myLibraryDescription)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Title"
            placeholder="EMPTY"
            value={this.state.myLibraryTitle}
            onChangeText={(myLibraryTitle) => this.setState({myLibraryTitle})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Description"
            placeholder="EMPTY"
            value={this.state.myLibraryDescription}
            onChangeText={(myLibraryDescription) => this.setState({myLibraryDescription})}
          />
        </CardSection>

        <CardSection>
          <SimpleButton onPress={this.onButtonPress.bind(this)}>
            Save New Item
          </SimpleButton>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};


export default connect(null, actions)(ItemAdd);
