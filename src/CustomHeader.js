import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";

export default function CustomHeader() {
  return (
    <View style={styles.customHeader}>
      <Text style={styles.customHeaderText}>
        <Text style={{ color: "#B34ADA" }}>(</Text>
        <Text style={{ color: "#D8CFC3" }}>(</Text>
        <Text style={{ color: "#35CBE2" }}>(</Text>
        <Text style={{ color: "#F7781F" }}>(</Text>
        <Text style={{ color: "#54BF74" }}>(</Text>
        <Text style={{ color: "#F5B232" }}>(</Text> Good Radio
        <Text style={{ color: "#F5B232" }}> )</Text>
        <Text style={{ color: "#54BF74" }}>)</Text>
        <Text style={{ color: "#F7781F" }}>)</Text>
        <Text style={{ color: "#35CBE2" }}>)</Text>
        <Text style={{ color: "#D8CFC3" }}>)</Text>
        <Text style={{ color: "#B34ADA" }}>)</Text>
      </Text>
    </View>
  );
}
