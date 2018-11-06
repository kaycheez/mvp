import { createStackNavigator } from 'react-navigation'; 

// Screens
import HomeContainer from './containers/HomeContainer';

export default createStackNavigator(
  {
    Home: HomeContainer
  },
  {
    initialRouteName: 'Home'
  }
)