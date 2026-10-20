import { useState } from 'react';
import { View, Text, Image, Modal, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// A cool high-res image from Unsplash
const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=800&auto=format&fit=crop';

export default function ImageProject() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
          <Text style={styles.header}>Simple Image Display</Text>
          <Text style={styles.subtitle}>Tap the image below to view it full screen</Text>

          {/* Thumbnail Image */}
          <Pressable onPress={() => setModalVisible(true)}>
            <Image source={{ uri: SAMPLE_IMAGE }} style={styles.thumbnail} resizeMode="cover" />
          </Pressable>

        </View>

        {/* --- FULL SCREEN PICTURE MODAL --- */}
        <Modal visible={isModalVisible} transparent={true} animationType="fade">
          <View style={styles.modalOverlay}>
            {/* Tapping anywhere closes the modal */}
            <Pressable style={styles.fullScreenPressable} onPress={() => setModalVisible(false)}>
              <Image source={{ uri: SAMPLE_IMAGE }} style={styles.fullImage} resizeMode="contain" />
              <Text style={styles.closeText}>Tap anywhere to close</Text>
            </Pressable>
          </View>
        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#121212' },
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  
  header: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#888', marginBottom: 30, textAlign: 'center' },

  thumbnail: {
    width: 320,
    height: 220,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#333',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)', // Almost completely black
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenPressable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '80%', // Leaves room for the text at the bottom
  },
  closeText: {
    color: '#ffffff',
    marginTop: 20,
    fontSize: 16,
    opacity: 0.7,
  }
});
