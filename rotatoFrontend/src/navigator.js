import { createStackNavigator } from 'react-navigation'; 

// Containers
import HomeContainer from './containers/HomeContainer';
import AddGroupContainer from './containers/AddGroupContainer';
import ActiveGroupContainer from './containers/ActiveGroupContainer';
import UpdateGroupContainer from './containers/UpdateGroupContainer';

export default createStackNavigator(
  {
    Home: HomeContainer,
    AddGroup: {
      screen: AddGroupContainer,
      navigationOptions: {
        header: null,
      }
    },
    UpdateGroup: {
      screen: UpdateGroupContainer,
      navigationOptions: {
        header: null,
      }
    },
    ActiveGroup: {
      screen: ActiveGroupContainer,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)