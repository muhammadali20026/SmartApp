import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const DietPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState('');

  const handleCustomRequest = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    // send the description to the server using a post request
    // clear the description field
    setDescription('');
    // close the modal
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Breakfast</Text>
        <Text>- Oatmeal with berries</Text>
        <Text>- Scrambled eggs with spinach</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lunch</Text>
        <Text>- Grilled chicken salad</Text>
        <Text>- Quinoa and roasted vegetable stir-fry</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Evening Snacks</Text>
        <Text>- Apple slices with almond butter</Text>
        <Text>- Greek yogurt with granola and honey</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dinner</Text>
        <Text>- Baked salmon with roasted potatoes</Text>
        <Text>- Veggie burger with sweet potato fries</Text>
      </View>
      <TouchableOpacity onPress={handleCustomRequest}>
        <Text style={styles.customRequestButton}>Custom Request</Text>
      </TouchableOpacity>
      <Modal visible={showModal}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            placeholder="Enter your custom request description"
          />
          <BorderlessButton onPress={handleSubmit}>
            <Text style={styles.submitButton}>Submit</Text>
          </BorderlessButton>
        </View>
      </Modal>
    </View>
  );
};
export default DietPlan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  section: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
  customRequestButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 4,
    marginTop: 16,
  },
  customRequestButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 4,
    width: '80%',
  },
  descriptionInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  submitButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 4,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});



