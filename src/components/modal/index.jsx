import React from "react";
import { Modal, View, Text, Button } from 'react-native';
import { styles } from "./styles";

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete}) => {
  return (
      <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.container}>
        <Text style={styles.title}>Desea quitar la tarea?</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailMessage}>Ingresar</Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title='Cancel'
            color='#4A55A2'
            onPress={onCancel}
          />
          <Button 
          title='Delete'
          color='#4A55A2'
          onPress={() => onDelete(selectedEvent.id)}
          />
        </View>
      </View>
    </Modal>
  )
};

export default CustomModal;