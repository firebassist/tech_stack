import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { SimpleButton, Card, CardSection, Input } from './common';
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

  onButtonPress() {
    Actions.itemList()
    this.props.removeLibraryActionCreator(this.props.library.id)
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
          <SimpleButton onPress={() => this.props.selectLibraryActionCreator(this.props.library.id, this.state.myLibraryTitle, this.state.myLibraryDescription)}>
            Save Changes
          </SimpleButton>
        </CardSection>
        <CardSection>
          <SimpleButton
            onPress={this.onButtonPress.bind(this)}>
            Remove Item
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

const mapStateToProps = state => {
  return { selectedLibraryIdFromMapStateToProps: state.selectedLibraryIdFromReducer }
}


export default connect(null, actions)(ItemEdit);
