import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { transactionData } from '../utils'
import TransactionCard from '../components/TransactionCard'

export default function Transactions() {
  return (
    <View className="mt-8">
      <Text className="text-3xl dark:text-white mb-4" style={{
        fontFamily: "SpaceGroteskBold",
      }}>Last Transactions
      </Text>


      <FlatList 
      data={transactionData}
      keyExtractor={(item) => item.id}
      initialNumToRender={20}
      contentContainerStyle={{paddingBottom: 100}}
      removeClippedSubviews={false}
      height={400}
      renderItem={() => <TransactionCard {...item} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View className="h-4" />}
      />

    </View>
  )
}