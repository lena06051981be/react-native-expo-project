import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
} from "react-native";
// import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
    <View style={styles.container}>
        <TextInput
          placeholder="Type text"
          value={value}
          onChangeText={inputHandler}
        />    
        {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Hi everywere! Does it works? Yeap. Ok</Text>
        <StatusBar style="auto" />
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30
  },
});



// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app! Hi everywere! Does it works? Yeap. Ok</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
