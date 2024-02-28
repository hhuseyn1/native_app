import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OrderCard from './components/OrderCard'
import { StyledTouchableOpacity, StyledText, StyledView } from '../components/common/StyledComponents'

const OrdersPage = () => {
  return (
    <ScrollView>

    <StyledView className='flex flex-col px-[24px] w-screen'>
        <StyledView className='flex m-2 justify-between flex-row'>
          <StyledText className='text-[20px] font-600 font-bold text-[#000]'>Order summary</StyledText>
          <StyledTouchableOpacity>
            <StyledText className='text-[16px] font-500 underline text-[#FF8C03]'>Add  items</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
        
        <StyledView className='w-full flex flex-col '>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
        </StyledView>
        
        <StyledView className='flex m-2  justify-between flex-row'>
          <StyledView className='flex justify-between w-full flex-row'>
            <StyledText className='text-[20px] font-bold text-[#000] font-600 '>Payment</StyledText>
            <StyledTouchableOpacity>
              <StyledText className='text-[16px] font-500 text-[#66B600]'>Change</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
        <StyledTouchableOpacity className=' mx-2 mt-5 border border-dashed  border-[#FF8C03] p-5'>
          <StyledText className='font-bold font-500 text-[#FF8C03] text-[16px] text-center'>Add your card</StyledText>
        </StyledTouchableOpacity>

        <StyledView className='mx-2 mt-5'>
            <StyledView className='my-3 flex justify-between flex-row'>
              <StyledText className='text-[16px] font-400'>Course price</StyledText>
              <StyledText className='text-[16px] font-bold font-500 text-[#000]'>40 AZN</StyledText>
            </StyledView>
            <StyledView className='my-3 flex justify-between flex-row'>
              <StyledText className='text-[16px] font-400'>Discount 5%</StyledText>
              <StyledText className='text-[16px] font-bold font-500 text-[#000]'>-10 AZN</StyledText>
            </StyledView>
            <StyledView
            className='w-full h-0.5 bg-slate-300'
            />
            <StyledView className='my-2 flex justify-between flex-row'>
              <StyledText className='text-[18px] text-[#000] font-600 font-bold'>Total price</StyledText>
              <StyledText className='text-[20px] font-600 font-bold text-[#42C2E5]'>12 AZN</StyledText>
            </StyledView>
        </StyledView>

        <StyledView className='m-2 mt-10'>
          <StyledTouchableOpacity className=' rounded-[26px] p-2 bg-[#66B600]'>
            <StyledText className='text-center text-[#FFF] font-bold text-2xl'>Complete</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
    </StyledView>
    </ScrollView>
  )
}

export default OrdersPage