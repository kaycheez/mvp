import { createStackNavigator } from 'react-navigation'; 

// Screens
import HomeContainer from './containers/HomeContainer';
import AddGroupContainer from './containers/AddGroupContainer';

export default createStackNavigator(
  {
    Home: HomeContainer,
    AddGroup: AddGroupContainer
  },
  {
    initialRouteName: 'Home'
  }
)