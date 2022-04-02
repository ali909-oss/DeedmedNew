import React from 'react';
import { View, TextInput,Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      maxLength={300}
      placeholder='Enter Your Description'
      placeholderTextColor={'#b7bdcd'}

    />
  );
}

const DesText = () => {
  const [value, onChangeText] = React.useState();

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
      
    <View
      style={{
        backgroundColor: '#ffffff',
        borderBottomColor: '#000000',
        width:widthPercentageToDP('85%'),
        marginLeft:widthPercentageToDP('8%'),
        borderRadius:10

      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        fontSize={18}
        padding={15}
    
        
      />
    </View>
  );
}

export default DesText;