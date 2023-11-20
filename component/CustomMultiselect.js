import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const CustomMultiselect = ({ options, selectedItems, onSelectedItemsChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleItem = (item) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];
    onSelectedItemsChange(updatedItems);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Select Options</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {options.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => toggleItem(item)}
              style={[
                styles.option,
                selectedItems.includes(item) && styles.selectedOption,
              ]}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});

export default CustomMultiselect;
