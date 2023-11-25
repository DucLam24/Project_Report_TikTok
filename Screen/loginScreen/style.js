import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ADA3A3",
    backgroundColor: "#111111",
  },
  container01: {
    justifyContent: "center",
    marginTop: 10,
  },
  container02: {
    width: 450,
    justifyContent: "center",
  },
  container03: {},
  container04: {},
  image: {
    width: 225,
    height: 225,
    marginLeft: 75,
  },
  logoUser: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 60,
    left: 30,
  },
  logoEye: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 10,
    left: 210,
  },
  logoLock: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 150,
    left: 30,
  },
  text01: {
    fontFamily: "Roboto",
    color: "#CCFFFF",
    fontSize: 35,
    fontWeight: 800,
    marginLeft: 110,
    marginTop: 10,
    alignItems: "center",
  },
  text02: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 400,
    color: "#000",
    margin: 10,
  },
  btn01: {
    height: 40,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingLeft: 20,
  },
  container3_1: {
    marginTop: 55,
    marginLeft: 70,
  },
  text03: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: 700,
  },
  button1: {
    backgroundColor: "#33CC66",
    marginTop: 30,
    marginLeft: 75,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 70,
    borderRadius: 30,
  },
  container05: {
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 50,
  },
  text04: {
    color: "#ADA3A3",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto",
  },
  text05: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#FFF",
  },
});

export default Style;
