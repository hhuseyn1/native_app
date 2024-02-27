import React from 'react'
import { StyledText,StyledTouchableOpacity,StyledView,StyledScrollView } from '../StyledComponent'
import LocationSvg  from '../../../assets/location.svg'
import ColaSvg from '../../../assets/cola.svg' 
import PizzaSvg from '../../../assets/pizza.svg' 
import CupcakeSvg from '../../../assets/cupcake.svg' 
import LunchSetSvg from '../../../assets/lunchset.svg'
import VeganSvg from '../../../assets/vegan.svg'
import VegetarianSvg from '../../../assets/vegetarian.svg'
import Carousel1Svg from '../../../assets/carousel1.svg'
import HamburgerSvg from '../../../assets/Hamburger.svg'
import QRSvg from '../../../assets/QR.svg'
import HomeSvg from '../../../assets/Home.svg'
import SubscriptionSvg from '../../../assets/subscription.svg'
import moment from 'moment'

const date = new Date();
date.setMonth(date.getDate() - 2);
const month = date.toLocaleString([], { month: 'short' });

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getWeekDates() {
    let now = moment();
    let weekStart = now.clone().startOf('week');
    let dates = [];
  
    for (let i = 0; i < 7; i++) {
      dates.push(weekStart.clone().add(i, 'days'));
    }
    return dates;
  }

const HomePage = () => {
    const date = new Date();
    const day = days[date.getDay()];
    let dates = getWeekDates();

  return (
      <>
            <StyledView className='w-full h-[8%] mt-5 flex-row justify-between px-[20px]'>
                <StyledText className='text-black text-[16px]'>
                    <LocationSvg />
                </StyledText>
                <StyledText className='text-black text-[16px]'>Caspian Plaza</StyledText>
            </StyledView>

            <StyledScrollView className='flex-1'>
                <StyledView  className='bg-white h-[1350px]'>
                    <StyledView className='w-full h-[230px] justify-center items-center '>
                        <Carousel1Svg></Carousel1Svg>
                    </StyledView>
                    <StyledView className='w-full h-[130px] flex-col pl-[20px]'>
                        <StyledText className='text-black text-[20px]'>Categories</StyledText>
                        <StyledView className='flex-row justify-around'>
                            <StyledView className='mt-3 mr-5 items-center'>
                                <ColaSvg></ColaSvg>
                                <StyledText className='text-black text-[14px]'>Drinks</StyledText>
                            </StyledView>
                            <StyledView className='mt-3 mr-5 items-center'>
                                <PizzaSvg></PizzaSvg>
                                <StyledText className='text-black text-[14px]'>Pizza</StyledText>
                            </StyledView>
                            <StyledView className='mt-3 mr-5 items-center'>
                                <CupcakeSvg></CupcakeSvg>
                                <StyledText className='text-black text-[14px]'>Desserts</StyledText>
                            </StyledView>
                            <StyledView className='mt-3 mr-5 items-center'>
                                <VeganSvg></VeganSvg>
                                <StyledText className='text-black text-[14px]'>Vegetarian foods</StyledText>
                            </StyledView>
                            <StyledView className='mt-3 mr-5 items-center'>
                                <CupcakeSvg></CupcakeSvg>
                                <StyledText className='text-black text-[14px]'>Desserts</StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                    
                    <StyledView className='w-full h-[40px] mt-5 flex-row justify-between px-[20px]'>
                        <StyledText className='text-black text-[20px]'>Today's menu ({new Date().getDate() + ` ${month}`})</StyledText>
                        <StyledText className='text-[14px] items-center text-[#66B600] mt-1'>See more</StyledText>
                    </StyledView>


                    <StyledView className='flex-row justify-between'>
                        <StyledView className='w-[200px] h-[300px] ml-5 justify-evenly items-center'>
                            <LunchSetSvg className='radius-xl'></LunchSetSvg>
                            <StyledView className='py-5'>
                                    <StyledText className='text-black font-bold text-[16px]'>Lunch Set</StyledText>
                                    <StyledText className='text-black my-1'>Lorem ipsum dolor sit amet, consectetur adipisici</StyledText>
                                <StyledView className='items-end pr-1'>
                                    <StyledText className='text-[14px] text-[#42C2E5] items-center'>from 12 Azn</StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledView>

                        <StyledView className='w-[200px] h-[300px] ml-5 justify-evenly items-center'>
                            <LunchSetSvg className='radius-xl'></LunchSetSvg>
                            <StyledView className='py-5'>
                                    <StyledText className='text-black font-bold text-[16px]'>Lunch Set</StyledText>
                                    <StyledText className='text-black my-1'>Lorem ipsum dolor sit amet, consectetur adipisici</StyledText>
                                <StyledView className='items-end pr-1'>
                                    <StyledText className='text-[14px] text-[#42C2E5] items-center'>from 12 Azn</StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledView>

                    </StyledView>

                 
                    <StyledView className='w-full h-[50px] mt-5 flex-row justify-between px-[20px]'>
                        <StyledText className='text-black text-[20px]'>Top sales</StyledText>
                        <StyledText className='text-[14px] items-center text-[#66B600] mt-1'>See more</StyledText>
                    </StyledView>

                    <StyledView className='flex-row justify-between'>
                        <StyledView className='w-[267px] h-[281px] ml-5 bg-slate-100 justify-evenly items-center rounded-xl'>
                            <VegetarianSvg className='radius-xl object-fit'></VegetarianSvg>
                            <StyledView className='py-5'>
                                    <StyledText className='text-black font-bold text-[16px]'>Vegetarian bowl</StyledText>
                                    <StyledText className='text-black my-1'>Lorem ipsum dolor sit amet, consectetur adipisici</StyledText>
                                <StyledView className='items-end pr-1'>
                                    <StyledText className='text-[14px] text-[#42C2E5] items-center'>12 Azn</StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledView>

                        <StyledView className='w-[267px] h-[281px] ml-5 bg-slate-100 justify-evenly items-center rounded-xl'>
                            <VegetarianSvg className='radius-xl object-fit'></VegetarianSvg>
                            <StyledView className='py-5'>
                                    <StyledText className='text-black font-bold text-[16px]'>Vegetarian bowl</StyledText>
                                    <StyledText className='text-black my-1'>Lorem ipsum dolor sit amet, consectetur adipisici</StyledText>
                                <StyledView className='items-end pr-1'>
                                    <StyledText className='text-[16px] text-[#42C2E5] items-center'>12 Azn</StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledView>

                    </StyledView>
                    <StyledView className='pt-5 h-[250px] px-5'>
                        <StyledView className='justify-center'>
                            <StyledText className='text-black items-center justify-center text-[20px]'>Weekly menu</StyledText>
                        </StyledView>
                        <StyledView className='w-[full] flex-row h-[140px] items-center justify-between'>
                            {dates?.map((date,index) =>(
                                <StyledView key={index} className='w-[48px] h-[98px] rounded-full bg-[#66B600] items-center justify-center'>
                                    <StyledText className='text-lg text-white'>{date.format('ddd')}</StyledText>
                                    <StyledText className='text-lg text-white'>{date.format('D')}</StyledText>
                                </StyledView>
                            ))}
                        </StyledView>
                    </StyledView>

                </StyledView>

            </StyledScrollView>

        <StyledView className='w-full h-[10%] flex-row bg-white bottom-0 absolute items-center justify-around'>
            <StyledView className='items-center'>
                <HomeSvg></HomeSvg>
                <StyledText className='text-black text-[12px] mt-2'>Home</StyledText>
            </StyledView>
            <StyledView className='items-center'>
                <SubscriptionSvg></SubscriptionSvg>
                <StyledText className='text-black text-[12px] mt-2'>Subscription</StyledText>
            </StyledView>
            <StyledView className='items-center'>
                <QRSvg></QRSvg>
                <StyledText className='text-black text-[12px] mt-2'>Scan</StyledText>
            </StyledView>
            <StyledView className='items-center'>
                <HamburgerSvg></HamburgerSvg>
                <StyledText className='text-black text-[12px] mt-2'>Menu</StyledText>
            </StyledView>
        </StyledView>
    </>
  )
}

export default HomePage