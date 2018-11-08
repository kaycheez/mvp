import { createStackNavigator } from 'react-navigation'; 

// Containers
import HomeContainer from './containers/HomeContainer';
import AddGroupContainer from './containers/AddGroupContainer';
import ActiveGroupContainer from './containers/ActiveGroupContainer';

export default createStackNavigator(
  {
    Home: HomeContainer,
    AddGroup: AddGroupContainer,
    ActiveGroup: ActiveGroupContainer
  },
  {
    initialRouteName: 'Home'
  }
)