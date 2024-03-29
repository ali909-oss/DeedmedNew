import React from 'react';
 
import AppTextInput from '../components/AppTextInput'
import ErrorMessage from './ErrorMessage';
function AppFormField({name, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
