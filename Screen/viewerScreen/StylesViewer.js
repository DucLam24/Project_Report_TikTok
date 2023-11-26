import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: "row",
  },
  container2: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    gap: 100,
  },
  container3: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 24,
    width: 24,
  },
  txt1: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
  },
  img2: {
    height: 140,
    width: 140,
    borderRadius: 100,
    borderWidth: 1,
  },
  img1: {
    position: "absolute",
    height: 24,
    width: 24,
    marginLeft: 330,
  },
  txt2: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#948D8D",
    fontSize: 16,
  },
  container4: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  container41: {
    flexDirection: "column",
  },
  txt3: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  txt4: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
    color: "#948D8D",
    fontSize: 14,
  },
  container5: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingBottom: 50,
  },
  txt5: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  img3: {
    height: 130,
    width: 130,
  },
  container6: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#1C1B1B",
    height: 42,
  },
  container61: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  img4: {
    height: 29.84,
    width: 27,
  },
  txt6: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 10,
    color: "#FFFFFF",
  },
  img5: {
    height: 43,
    width: 63,
  },
});
export default Styles;
