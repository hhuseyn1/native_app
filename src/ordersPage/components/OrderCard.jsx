import React from 'react'
import { StyledImg, StyledText, StyledView } from '../../components/StyledComponents'

const OrderCard = () => {
  return (
    <StyledView className='w-full mt-2 shadow-red-700 shadow-2xl bg-white flex flex-row rounded-md '>
        <StyledView className='mx-3 flex justify-center items-center'>
          <StyledImg
          source={require('../../assets/Image.png')}
          />
        </StyledView>
        <StyledView className=' mx-2 h-[110px] mt-2'>
            <StyledText className='shadow text-[16px] text-[#184639] font-bold'>Sezar Salad</StyledText>
            <StyledText className='shadow max-w-[200px] text-[12px] text-[#000] '>Lorem ipsum dolor sit amet, consectetur adipisci</StyledText>
        </StyledView>
        <StyledView className=' flex flex-col justify-between items-center'>
          <StyledView className='mt-2  border border-[#66B600] rounded-md px-2 py-1'>
            <StyledText className='text-[#66B600] font-bold'>1x</StyledText>
          </StyledView>
          <StyledText className='mb-2 font-600 text-[16px] text-center font-bold text-[#42C2E5]'>12 AZN</StyledText>
        </StyledView>
    </StyledView>
  )
}

export default OrderCard