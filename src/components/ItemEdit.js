import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input } from './common';
//import ItemScreen from './ItemScreen';
import * as actions from '../actions';

class ItemEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
        myLibraryTitle: this.props.library.title,
        myLibraryDescription: this.props.library.description
      }
    }

  updateTitle = (myLibraryTitle) => {
       this.setState({myLibraryTitle})
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
          <Button onPress={() => this.props.selectLibraryActionCreator(this.props.library.id, this.state.myLibraryTitle, this.state.myLibraryDescription)}>
            Save Changes
          </Button>
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

const mapStateToProps = state => {
  return { selectedLibraryIdFromMapStateToProps: state.selectedLibraryIdFromReducer }
}


export default connect(null, actions)(ItemEdit);
