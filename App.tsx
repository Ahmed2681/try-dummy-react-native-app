import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// type GreetingProps = {
//   name: String;
// };

// const Greeting = (props: GreetingProps) => {
//   return (
//     <View style={styles.center}>
//       <Text>Hello {props.name}</Text>
//     </View>
//   );
// };

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times </Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}
      >
        <Text style={styles.btnText}>Click on me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 12,
    marginBottom: 10,
    borderRadius: 15,
  },
  btnText: {
    color: "white",
  },
});

export default App;
