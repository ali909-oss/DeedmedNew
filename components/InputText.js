import React from 'react';
import { View, TextInput,Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      maxLength={300}
      placeholder='Write Your Message'
    />
  );
}

const UselessText = () => {
  const [value, onChangeText] = React.useState();

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
      
    <View
      style={{
        backgroundColor: '#f9f9f9',
        borderBottomColor: '#000000',
        width:widthPercentageToDP('80%'),
        marginLeft:widthPercentageToDP('2%')

      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        fontSize={20}

    
        
      />
    </View>
  );
}

export default UselessText;