import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Platform,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

function StartGameScreen() {
  console.log("device width", deviceWidth);

  return (
    <View>
      <Pressable
        android_ripple={{ color: "red" }}
        style={({ pressed }) => [pressed && styles.pressed, styles.buttonStyle]}
      >
        <Text style={styles.buttonText}>StartGameScreen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#1abc9c",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
  },
});

export default StartGameScreen;
