import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LibraryList from './components/LibraryList';
import ItemEdit from './components/ItemEdit';
import ItemAdd from './components/ItemAdd';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="main">
      <Scene
        onRight={() => Actions.addItem()}
        rightTitle="+ New"
        key="itemList"
        component={LibraryList}
        title="Item List in App"
      />
      <Scene
        key="editItem"
        component={ItemEdit}
        title="EDIT ITEM FORM"
      />
      <Scene
        key="addItem"
        component={ItemAdd}
        title="Add New Item"
      />
    </Scene>
    </Router>
  );
}

export default RouterComponent;
