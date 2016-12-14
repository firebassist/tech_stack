import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
  constructor (props) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
  }


  renderRow(library) {
    return <ListItem library={library} />
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.props.librariesFromList);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps)(LibraryList);
