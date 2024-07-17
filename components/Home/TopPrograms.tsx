import { donationData } from "@/dummyData";
import { Donation } from "@/types";
import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const TopPrograms = () => {
  const renderItem = ({ item }: { item: Donation }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "800",
          marginTop: 15,
          marginLeft: 20,
        }}
      >
        Top Programs
      </Text>
      <FlatList
        data={donationData.slice(0, 5)}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        numColumns={1}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginVertical: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    gap: 5,
    width: 350,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default TopPrograms;
