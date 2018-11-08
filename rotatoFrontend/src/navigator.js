import { createStackNavigator } from 'react-navigation'; 

// Containers
import HomeContainer from './containers/HomeContainer';
import AddGroupContainer from './containers/AddGroupContainer';
import ActiveGroupContainer from './containers/ActiveGroupContainer';
import EditGroupContainer from './containers/EditGroupContainer';

export default createStackNavigator(
  {
    Home: HomeContainer,
    AddGroup: AddGroupContainer,
    ActiveGroup: ActiveGroupContainer,
    EditGroup: EditGroupContainer
  },
  {
    initialRouteName: 'Home'
  }
)