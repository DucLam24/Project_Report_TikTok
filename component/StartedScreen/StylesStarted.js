import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    marginLeft: 100,
    marginTop: 60,
    flex: 1,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },

  container2: {
    marginLeft: 70,
    marginTop: 50,
    flex: 1,
  },

  text01: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily: "Roboto",
  },
  container3: {
    flex: 0.5,
    marginLeft: 75,
  },
  container3_1: {
    width: 250,
    height: 90,
    backgroundColor: "#000",
    justifyContent: "center",
    borderRadius: 35,
  },
  text02: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily: "Roboto",
    color: "#FFF",
    marginLeft: 85,
  },
});

export default Styles;
