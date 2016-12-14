import React, { Component } from 'react';
import { View, Text, TouchableHighlight, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { CardSection } from './common';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, selectedLibraryIdFromMapStateToProps} = this.props

    if(library.id === selectedLibraryIdFromMapStateToProps) {
      return(
        <CardSection>
          <Text style = {{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  onButtonPress() {
    Actions.editItem({ library: this.props.library });
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library

    return (
      <TouchableHighlight
        onPress={this.onButtonPress.bind(this)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return { selectedLibraryIdFromMapStateToProps: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(ListItem);
