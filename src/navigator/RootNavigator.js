import { createStackNavigator,createAppContainer } from "react-navigation";

import App from '../App';
import SelectedItem from '../screen/SelectedItem';

const RootNavigator = createStackNavigator(
    {
        picker: {
            screen: App,
            navigationOptions:{
               title:'Picker Spinner',
            }
        }, pickerItem: {
            screen: SelectedItem,
            navigationOptions:{
                title:'Item Form Picker Spinner',
             }
        }, 
    },
    {
        initialRouteName: "picker",
    }
);

export default createAppContainer(RootNavigator);