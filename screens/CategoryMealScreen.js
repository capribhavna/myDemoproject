import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryMealScreen= props =>{
    return(
        <View style = {styles.container}>
        <Text>CategoryMealScreen</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
     </View>
    )

}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
export default CategoryMealScreen;