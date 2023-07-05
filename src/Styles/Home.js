import { StyleSheet, Text, View, Button } from "react-native";
export const home = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  searchBar: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
  },
  searchInput: {
    backgroundColor: "#f5f5f5",
    fontSize: 16,
    padding: 12,
    borderRadius: 5,
  },
  ordersButton: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "space-between",
    marginBottom: 24,
  },
  listFilm: {
    // marginTop: 10,
    width: "80%",
    height: 150,
    padding: 12,
    backgroundColor: "#3989FA",
    borderRadius: 10,
  },
  separator: {
    height: 10, // Adjust the height as per your requirement
    backgroundColor: "transparent", // Set the desired gap color or use 'transparent' for no color
  },
  titleText: {
    fontWeight: "bold",
    color: "#fff",
  },
  descriptionBox: {
    paddingLeft: 125,
    paddingTop: 10,
  },
  descriptionText: {
    color: "#fff",
    fontSize: 10,
  },
  scrollStyle: {
    backgroundColor: "#fff",
    // marginLeft: 10,
    paddingLeft: 24,
  },
});
