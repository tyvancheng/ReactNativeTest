import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
import Layout from './components/Layout';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // See what result object looks like below
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };


  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  return (
    <NavigationContainer>
         <Layout />
      </NavigationContainer>
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <Layout />
    //   </NavigationContainer>
    //   <View style={styles.imageContainer}>
    //     {/* <Image source={PlaceholderImage} style={styles.image}/> */}
    //     <ImageViewer
    //       placeholderImageSource={PlaceholderImage}
    //       selectedImage={selectedImage}
    //     />
    //     {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
    //   </View>
    //   {showAppOptions ? (
    //     <View style={styles.optionsContainer}>
    //       <View style={styles.optionsRow}>
    //         <IconButton icon="refresh" label="Reset" onPress={onReset} />
    //         <CircleButton onPress={onAddSticker} />
    //         <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
    //       </View>
    //     </View>

    //   ) : (
    //     <View style={styles.footerContainer}>
    //       <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
    //       <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
    //     </View>
    //   )}
    //   <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
    //     <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
    //   </EmojiPicker>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});


// Result Object Example
// {
//   "assets": [
//     {
//       "assetId": null,
//       "base64": null,
//       "duration": null,
//       "exif": null,
//       "height": 4800,
//       "rotation": null,
//       "type": "image",
//       "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%username%252Fsticker-smash-47-beta/ImagePicker/77c4e56f-4ccc-4c83-8634-fc376597b6fb.jpeg",
//       "width": 3200
//     }
//   ],
//   "canceled": false,
//   "cancelled": false
// }