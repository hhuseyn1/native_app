import {
  StyledView,
  StyledTextInput,
  StyledText,
  StyledTouchableOpacity,
} from "../components/StyledComponents";
import EditProfileIcon from "../../assets/icons/editProfileIcon.svg";
const EditProfile = () => {
  return (
    <StyledView className="flex-1 bg-[#EDEDED] p-4">
      <StyledView className="flex-row items-center mb-3">
        <StyledView className="relative w-[100px] h-[100px] bg-[#FFC6AE] rounded-full">
          <StyledTouchableOpacity className="rounded-full absolute right-0 bottom-0 justify-center items-center w-[36px] h-[36px] bg-[#FFFFFF]">
            <EditProfileIcon />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledText className="text-xl text-[#32343E] font-bold ml-6">
          Jhon Lancelot
        </StyledText>
      </StyledView>
      <StyledView className="flex-row my-2">
        <StyledView className="w-1/2 pr-1">
          <StyledTextInput
            placeholder="Aytac"
            placeholderTextColor="#7C7C7C"
            className="bg-[#FFFFFF] text-black text-base font-medium px-2 h-[45px] rounded-[8px]"
          ></StyledTextInput>
        </StyledView>
        <StyledView className="w-1/2 pl-1">
          <StyledTextInput
            placeholder="Samadova"
            placeholderTextColor="#7C7C7C"
            className="bg-[#FFFFFF] text-black text-base font-medium px-2 h-[45px] rounded-[8px]"
          ></StyledTextInput>
        </StyledView>
      </StyledView>
      <StyledView className="flex-row my-2">
        <StyledView className="w-1/6 ">
          <StyledTextInput
            placeholder="055"
            placeholderTextColor="#7C7C7C"
            className="bg-[#FFFFFF] text-black text-base font-medium px-2 h-[45px] rounded-[8px]"
          ></StyledTextInput>
        </StyledView>
        <StyledView className="w-5/6 pl-2">
          <StyledTextInput
            placeholder="999 99 99"
            placeholderTextColor="#7C7C7C"
            className="bg-[#FFFFFF] text-black text-base font-medium px-2 h-[45px] rounded-[8px]"
          ></StyledTextInput>
        </StyledView>
      </StyledView>
      <StyledTextInput
        placeholder="SABAH.HUB"
        placeholderTextColor="#7C7C7C"
        className="bg-[#FFFFFF] w-full my-2 text-black text-base font-medium px-2 h-[45px] rounded-[8px]"
      ></StyledTextInput>
      <StyledTextInput
        placeholder="example@gmail.com"
        placeholderTextColor="#7C7C7C"
        className="bg-[#FFFFFF] w-full my-2 text-black text-base font-medium px-2 h-[45px] rounded-[8px]"
      ></StyledTextInput>
      <StyledTouchableOpacity className="w-full h-[47px] bg-[#66B600] rounded-[24px] justify-center items-center mt-auto">
        <StyledText className="font-medium text-lg text-[#FFFFFF]">
          Save
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default EditProfile;
