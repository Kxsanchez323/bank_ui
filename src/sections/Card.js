import { View, Text, ScrollView } from "react-native";
import React from "react";
import { carousalData } from "../utils";
import CardItem from "../components/CardItem";


export default function Card() {
  return (
    <View className="mt-8 mb-4">
      <Text
        style={{
          fontFamily: "SpaceGroteskBold",
        }}
        className="text-3xl mb-4 dark:text-white"
      >
        My Cards
      </Text>

      <ScrollView
      horizontal
      className="space-x-5"
      showsHorizontalScrollIndicator={false}
      >
        {
          carousalData.map((item) => (
            <CardItem 
            key={item.id}
            imgUrl={item.imgUrl}
            price={item.price}
            cardType={item.cardType}
            cardNumber={item.cardNumber}
            backgroundColor={item.backgroundColor}
            />
          ))

        }
      </ScrollView>
    </View>
  );
}
