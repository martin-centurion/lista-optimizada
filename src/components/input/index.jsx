import React from "react";
import { TextInput, Button, View } from "react-native";
import { styles } from "./styles";

const Input = ({placeholder, value, onChangeText, buttonColor, buttonTitle, onHandlerButton}) => {
    return (
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder={placeholder}
            style={styles.input}
            value={value} // useState variable
            onChangeText={(text) => onChangeText(text)} // setea el valor del campo
          />

          <Button 
            title={buttonTitle} 
            color={buttonColor}
            onPress={onHandlerButton}
          />
        </View>
    )
}

export default Input;