import { View, Text } from 'react-native'
import React from 'react'
import VectorLeftArrow from './src/assets/icons/vectorleftarrow.svg';
import HeartIcon from './src/assets/icons/heart.svg';
import XVector from './src/assets/icons/XVector.svg';
import Group16 from './src/assets/icons/Group 16.svg';
import Ellipse from './src/assets/icons/ellipse.svg';
import Avacado from './src/assets/icons/Avacado.svg';
import Ellipse134 from './src/assets/icons/Ellipse 134.svg';
import Ellipse133 from './src/assets/icons/Ellipse 133.svg';
import Ellipse132 from './src/assets/icons/Ellipse 132.svg';
import Ellipse131 from './src/assets/icons/Ellipse 131.svg';
import Ellipse130 from './src/assets/icons/Ellipse 130.svg';
import Ellipse129 from './src/assets/icons/Ellipse 129.svg';
import Sandwich from './src/assets/icons/Sandwich.svg';
import Tomato from './src/assets/icons/Tomato.svg';
import Salad from './src/assets/icons/Salad.svg';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from './src/components/common/StyledComponents';
import {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  ScrollViewComponent,
  StatusBar,
} from 'react-native';

const Login = () => {
    const [visible, setVisible] = useState(true);
    const inputRefOne = useRef(null);
    const [inputOne, setInputOne] = useState();
    const [inputTwo, setInputTwo] = useState();
    const [inputThree, setInputThree] = useState();
    const [inputFour, setInputFour] = useState();
    const inputRefTwo = useRef(null);
    const inputRefThree = useRef(null);
    const inputRefFour = useRef(null);


  return (
  OTP
  <StyledSafeAreaView className="bg-[#FAFAFA]">
    <StyledView className={`relative`}>
      <StyledView
        className={`${
          visible ? 'flex' : 'hidden'
        }  absolute opacity-80 bg-zinc-700 h-screen w-full z-40 justify-center items-center`}></StyledView>
      <StyledView
        className={`${
          visible ? 'flex' : 'hidden'
        }  absolute bg-transparent h-screen w-full z-50 justify-center items-center`}>
        <StyledView className="flex bg-white flex-col h-[200px] shadow-md w-[350px] rounded-[8px]">
          <StyledTouchableOpacity
            onPress={() => {
              setVisible(false);
            }}>
            <StyledView className="w-full pt-[20px] pr-[20px] items-end">
              <XVector />
            </StyledView>
          </StyledTouchableOpacity>
          <StyledView className="flex flex-col items-center h-full py-[25px] px-[30px]">
            <StyledView className="-mt-[25px] mb-[8px]">
              <Group16 />
            </StyledView>
            <StyledText className="font-[600] text-[#414141] text-center text-[16px]">
              Try again
            </StyledText>
            <StyledText className="font-[400] text-[#414141] text-center text-[16px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView className="flex-1 z-30 flex-col justify-start">
        <StyledView className="flex justify-center pl-[24px] h-[56px]">
          <StyledTouchableOpacity>
            <VectorLeftArrow />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledView className="justify-start mt-[20px] h-screen">
          <StyledView className="w-full justify-between h-screen px-[24px]">
            <StyledView>
              <StyledText className="text-[#184639] text-[24px] font-[700] mb-[4px]">
                Enter verification code
              </StyledText>
              <StyledText className="text-[#868782] text-[16px] font-[400] mb-[14px]">
                We sent the code via email
              </StyledText>
            </StyledView>
            <StyledView className="mb-[50%]">
              <StyledView className="flex flex-row gap-2 h-[130px] justify-center items-start">
                <StyledTextInput
                  maxLength={1}
                  onFocus={() => {
                    if (inputTwo !== undefined && String(inputTwo).length > 0)
                      inputRefTwo.current.focus();
                  }}
                  value={inputOne}
                  ref={inputRefOne}
                  onChangeText={text => {
                    setInputOne(text);
                    if (String(text).length > 0)
                      inputRefTwo?.current?.focus();
                  }}
                  className="h-[100px] w-[42px] border-b-[2px] border-[#DFDFDF] text-center placeholder:text-red-500 text-[#204F50] text-[48px]"
                  placeholder="0"
                  keyboardType="numeric"
                />
                <StyledTextInput
                  maxLength={1}
                  onFocus={() => {
                    if (
                      inputThree !== undefined &&
                      String(inputThree).length > 0
                    )
                      inputRefThree.current.focus();
                  }}
                  onKeyPress={e => {
                    if (
                      e.nativeEvent.key === 'Backspace' &&
                      (inputTwo === undefined || inputTwo === '')
                    ) {
                      inputRefOne.current.focus();
                      setInputOne();
                    }
                  }}
                  value={inputTwo}
                  ref={inputRefTwo}
                  onChangeText={text => {
                    setInputTwo(text);
                    if (String(text).length > 0)
                      inputRefThree?.current?.focus();
                  }}
                  className="h-[100px] w-[42px] border-b-[2px] border-[#DFDFDF] text-center placeholder:text-[#DFDFDF] text-[#204F50] text-[48px]"
                  placeholder={'0'}
                  keyboardType="numeric"
                />
                <StyledTextInput
                  maxLength={1}
                  onFocus={() => {
                    if (
                      inputFour !== undefined &&
                      String(inputFour).length > 0
                    )
                      inputRefFour.current.focus();
                  }}
                  onKeyPress={e => {
                    if (
                      e.nativeEvent.key === 'Backspace' &&
                      (inputThree === undefined || inputThree === '')
                    ) {
                      inputRefTwo.current.focus();
                      setInputTwo();
                    }
                  }}
                  value={inputThree}
                  ref={inputRefThree}
                  onChangeText={text => {
                    setInputThree(text);
                    if (String(inputThree).length > 0)
                      inputRefFour?.current?.focus();
                  }}
                  className="h-[100px] w-[42px] border-b-[2px] border-[#DFDFDF] text-center placeholder:text-[#DFDFDF] text-[#204F50] text-[48px]"
                  placeholder={'0'}
                  keyboardType="numeric"
                />
                <StyledTextInput
                  maxLength={1}
                  onKeyPress={e => {
                    if (
                      e.nativeEvent.key === 'Backspace' &&
                      (inputFour === undefined || inputFour === '')
                    ) {
                      inputRefThree.current.focus();
                      setInputThree();
                    }
                  }}
                  value={inputFour}
                  ref={inputRefFour}
                  onChangeText={text => {
                    setInputFour(text);
                  }}
                  className="h-[100px] w-[42px] border-b-[2px] border-[#DFDFDF] text-center placeholder:text-[#DFDFDF] text-[#204F50] text-[48px]"
                  placeholder={'0'}
                  keyboardType="numeric"
                />
              </StyledView>
              <StyledText className="text-center">
                <StyledText className="text-[#204F50] font-[600] text-[16px]">
                  Resend{' '}
                </StyledText>
                <StyledText className="text-[15px] text-[#868782] font-[400]">
                  in <StyledText>40 </StyledText>seconds
                </StyledText>
              </StyledText>
            </StyledView>
            <StyledTouchableOpacity className="flex flex-row mb-[50%] justify-center items-center bg-[#66B600] rounded-[24px] h-[48px] w-full">
              <StyledText className="text-white font-[500] text-[18px]">
                Sign in
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  </StyledSafeAreaView>

  Forgot Password part 2
  <StyledSafeAreaView className="bg-[#FAFAFA]">
    <StyledView className="relative">
      <StyledView className="absolute top-8">
        <Ellipse />
      </StyledView>
      <StyledView className="absolute top-28 left-12">
        <Ellipse131 />
      </StyledView>
      <StyledView className="absolute top-14 left-[45%]">
        <Avacado />
      </StyledView>
      <StyledView className="absolute top-14 z-0 right-0">
        <Ellipse130 />
      </StyledView>
      <StyledView className="absolute top-36 z-0 right-6">
        <Ellipse133 />
      </StyledView>
      <StyledView className="flex-1 z-50 flex-col justify-start">
        <StyledView className="justify-start mt-[50%] h-screen">
          <StyledView className="w-full justify-between h-screen px-[24px]">
            <StyledView>
              <StyledText className="text-[#184639] text-center text-[24px] font-[600] mb-[14px]">
                Check your message
              </StyledText>
              <StyledText className="text-[#184639] text-center text-[16px] font-[500] mb-[14px]">
                We have sent a password recover instructions to your message
              </StyledText>
            </StyledView>
            <StyledTouchableOpacity className="flex flex-row mb-[75%] justify-center items-center bg-[#66B600] rounded-[24px] h-[48px] w-full">
              <StyledText className="text-white font-[500] text-[18px]">
                Back to homepage
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  </StyledSafeAreaView>

  Forgot Password part 1
  <StyledSafeAreaView className="bg-[#FAFAFA]">
    <StyledView className="relative">
      <StyledView className="absolute top-8">
        <Ellipse />
      </StyledView>
      <StyledView className="absolute top-28 left-12">
        <Ellipse131 />
      </StyledView>
      <StyledView className="absolute top-14 left-[45%]">
        <Avacado />
      </StyledView>
      <StyledView className="absolute top-14 z-0 right-0">
        <Ellipse130 />
      </StyledView>
      <StyledView className="absolute top-36 z-0 right-6">
        <Ellipse133 />
      </StyledView>
      <StyledView className="flex-1 z-50 flex-col justify-start">
        <StyledView className="justify-start mt-[50%] h-screen">
          <StyledView className="w-full justify-start px-[24px]">
            <StyledText className="text-[#184639] text-center text-[24px] font-[600] mb-[14px]">
              Forgot Password?
            </StyledText>
            <StyledText className="text-[#184639] text-[16px] font-[500] mb-[14px]">
              Enter your registered e-mail and click recover account.
            </StyledText>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="E-mail"
                keyboardType="numeric"
                className="w-full text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledTouchableOpacity className="flex flex-row justify-center items-center bg-[#66B600] rounded-[24px] h-[48px] w-full">
              <StyledText className="text-white font-[500] text-[18px]">
                Confirm
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  </StyledSafeAreaView>

  Sign In
  <StyledSafeAreaView className="bg-[#FAFAFA]">
    <StyledView className="relative">
      <StyledView className="absolute top-14">
        <Ellipse />
      </StyledView>
      <StyledView className="absolute z-10 top-14 left-10">
        <Ellipse134 />
      </StyledView>
      <StyledView className="absolute z-10 top-14 left-3">
        <Sandwich />
      </StyledView>
      <StyledView className="absolute top-14 left-[45%]">
        <Tomato />
      </StyledView>
      <StyledView className="absolute top-20 z-10 right-0">
        <Salad />
      </StyledView>
      <StyledView className="absolute top-36 z-0 right-0">
        <Ellipse130 />
      </StyledView>
      <StyledView className="absolute -top-5 z-0 -right-5">
        <Ellipse129 />
      </StyledView>
      <StyledView className="absolute top-14 z-10 right-3">
        <Ellipse132 />
      </StyledView>
      <StyledView className="flex-1 z-50 flex-col justify-start">
        <StyledView className="flex justify-center pl-[24px] h-[56px]">
          <StyledTouchableOpacity>
            <VectorLeftArrow />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledView className="justify-center h-screen">
          <StyledView className="w-full justify-start px-[24px]">
            <StyledText className="text-[#184639] text-[32px] font-[600] mb-[14px]">
              Sign In
            </StyledText>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="Phone number or email"
                keyboardType="numeric"
                className="w-full text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="Password"
                keyboardType="numeric"
                className="w-full text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledTouchableOpacity>
              <StyledText className="text-[14px] text-[#184639] mb-[16px]">
                Already have an account?
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="flex flex-row justify-center items-center bg-[#66B600] rounded-[24px] h-[48px] w-full">
              <StyledText className="text-white font-[500] text-[18px]">
                Sign in
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  </StyledSafeAreaView>
  Sign Up
  <StyledSafeAreaView className="bg-[#FAFAFA]">
    <StyledView className="relative">
      <StyledView className="absolute top-14">
        <Ellipse />
      </StyledView>
      <StyledView className="absolute z-10 top-14 left-10">
        <Ellipse134 />
      </StyledView>
      <StyledView className="absolute z-10 top-14 left-3">
        <Sandwich />
      </StyledView>
      <StyledView className="absolute top-14 left-[45%]">
        <Tomato />
      </StyledView>
      <StyledView className="absolute top-20 z-10 right-0">
        <Salad />
      </StyledView>
      <StyledView className="absolute top-36 z-0 right-0">
        <Ellipse130 />
      </StyledView>
      <StyledView className="absolute -top-5 z-0 -right-5">
        <Ellipse129 />
      </StyledView>
      <StyledView className="absolute top-14 z-10 right-3">
        <Ellipse132 />
      </StyledView>
      <StyledView className="flex-1 z-50 flex-col justify-start">
        <StyledView className="flex justify-center pl-[24px] h-[56px]">
          <StyledTouchableOpacity>
            <VectorLeftArrow />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledView className="justify-center h-screen">
          <StyledView className="w-full justify-start px-[24px]">
            <StyledText className="text-[#184639] text-[32px] font-[600] mb-[14px]">
              Sign Up
            </StyledText>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="First name"
                className="w-[49%] text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-[#66B600] p-[10px] rounded-[8px] h-[45px] mb-5"
              />
              <StyledTextInput
                placeholder="Last name"
                className="w-[49%] text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="050"
                className="w-[24%] text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
              <StyledTextInput
                placeholder="Phone number"
                keyboardType="numeric"
                className="w-[74%] text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="Company name"
                keyboardType="numeric"
                className="w-full text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="Email"
                keyboardType="numeric"
                className="w-full text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="Password"
                keyboardType="numeric"
                className="w-full text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledView className="flex flex-row justify-between">
              <StyledTextInput
                placeholder="Password"
                keyboardType="numeric"
                className="w-full text-[16px] font-[500] border-[1px] bg-white shadow-md shadow-zinc-800 border-white p-[10px] rounded-[8px] h-[45px] mb-5"
              />
            </StyledView>
            <StyledTouchableOpacity>
              <StyledText className="text-[14px] text-[#184639] mb-[16px]">
                Already have an account?
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="flex flex-row justify-center items-center bg-[#66B600] rounded-[24px] h-[48px] w-full">
              <StyledText className="text-white font-[500] text-[18px]">
                Sign up
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
          <StyledView className="flex flex-row w-full mt-[25px] justify-center items-end">
            <StyledText className="text-center">
              <StyledText className="text-[#A2A2A2] text-center font-[400] text-[14px]">
                By clicking Sign up, you agree to our{' '}
              </StyledText>
              <StyledText ellipsizeMode="tail" className="text-[#184639]">
                Terms of {'\n'} Use and Privacy Policy
              </StyledText>
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  </StyledSafeAreaView>
  );
}

export default Login