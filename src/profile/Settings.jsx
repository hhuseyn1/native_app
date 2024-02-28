import {
  StyledView,
  StyledText,
  StyledTouchableOpacity,
} from '../components/StyledComponents';
import ProfileLockIcon from "../../assets/profileLockIcon.svg";
import RightArrow from "../../assets/rightArrow.svg";

const Settings = () => {
  return (
    <StyledView className="flex-1 bg-[#EDEDED] p-4">
      <StyledTouchableOpacity className="w-full h-[72px] flex-row justify-between items-center rounded-[8px] bg-[#FFFFFF] py-4 px-6 my-[8px]">
        <StyledView className="flex-row items-center">
          <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
            <ProfileLockIcon />
          </StyledView>
          <StyledText className="text-base text-black font-medium ">
            Reset password
          </StyledText>
        </StyledView>
        <RightArrow />
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default Settings;
