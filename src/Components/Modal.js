import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  Text,
  ActivityIndicator,
  View,
  Modal,
} from "react-native";

export const ModalComponent = ({
  modalVisible,
  setModalVisible,
  selectedMovie,
  setGetData,
  getData,
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View style={{ backgroundColor: "white", padding: 20 }}>
          <Text>Удалить {selectedMovie?.title}?</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              title="Yes"
              onPress={() => {
                const filteredData = getData.filter((item) => {
                  return item?.id !== selectedMovie?.id;
                });
                setGetData(filteredData);
                setModalVisible(false);
              }}
            />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
