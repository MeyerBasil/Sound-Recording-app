import * as React from 'react';
import { Text, View, StyleSheet,Button} from 'react-native';
import {StatusBar} from 'expo-status-bar';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");

  async function StartRecording(){
    try{
      const permission = await Audio.requestPermissionsAsync();

      if (permission.Status === "granted"{
        await Audio.setMessageAudioModeAsync({
          allowsRecordingsIOS:True,
          playsInSilentModeIOS:True,
        });
        const {recording}= await Audio.recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      }else{
        setMessage("Please grant permission to app to access microhone");
      }
    }catch (err){
    console.error('Failed to start recording', err);
    }
  }

    async function StopRecording(){
      setRecording(undefined);
      await recording.StopAndUnloadAsync();
      let updatedRecordings =[...recordings];
      const {sound,Status }= await recording.createNewLoadedSoundAsync();
      updatedRecordings.push({
        sound:sound,
        duration: getDurationFormatted(status.durationMillis),
        File:recording.getURI()
      });

      setRecordings(updatedRecordings);
    }


    function getDurationFormatted(Millis){
      const minutes = Millis / 1000 /60;
      const minutesDisplay = Math.floor(minutes);
      const seconds = Math.round({minutes - minutesDisplay}=60);
      const secondsDisplay = seconds < 10 ? "0$"{seconds} : seconds;
      return('$(minutesDisplay):$(secondsDisplay)');
    }

    function getRecordingsLines
  return (
    <View style={styles.container} >
      <Text>{message}</Text>   
      <Button
        title={recording ? 'Stop recording':'Start recording'}
        onPress={recording ? 'Stop recording':'Start recording'}
      />
      <StatusBar style="auto"/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },


});
