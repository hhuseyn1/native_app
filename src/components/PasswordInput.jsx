import React, { useState } from "react";
import {
  StyledView,
  StyledTextInput,
  StyledTouchableOpacity,
} from "./StyledComponents";
import EyeIcon from "../../../assets/eyeIcon.svg";
import EyeClosedIcon from "../../../assets/eyeClosedIcon.svg";

const PasswordInput = ({ placeholder, placeholderTextColor }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  {
    /* <StyledTextInput secureTextEntry={true} placeholder="New password" placeholderTextColor="#7C7C7C" className="w-full h-[45px] my-3 bg-[#FFFFFF] rounded-[8px] text-black p-[10px]" /> */
  }
  return (
    <StyledView className="w-max flex-row items-center">
      <StyledTextInput
        className="flex-1 h-[45px] my-3 bg-[#FFFFFF] rounded-l-lg text-black p-[10px]"
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <StyledTouchableOpacity
        activeOpacity={1}
        className="bg-[#FFFFFF] h-[45px] rounded-r-lg px-2 justify-center"
        onPress={toggleShowPassword}
      >
        {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default PasswordInput;
