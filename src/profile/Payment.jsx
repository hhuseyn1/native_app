import {
  StyledView,
  StyledText,
  StyledTouchableOpacity,
} from "../StyledComponents";
import CardIcon from "../../assets/cardIcon.svg";
import ProfileDeleteIcon from "../../assets/profileDeleteIcon.svg";
import PaymentIcon from "../../assets/paymentIcon.svg";

const Payment = () => {
  return (
    <StyledView className="flex-1 bg-[#FFFFFF] p-4">
      <StyledText className="text-2xl text-black font-semibold">
        My cards
      </StyledText>
      <StyledView className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-5">
        <StyledView className="flex-row items-center">
          <CardIcon />
          <StyledText className="text-base text-black font-medium ml-2">
            ************6436
          </StyledText>
        </StyledView>
        <StyledTouchableOpacity>
          <StyledView className="rounded-full justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
            <ProfileDeleteIcon />
          </StyledView>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledTouchableOpacity>
        <StyledText className="text-[#FF8C03] text-xl font-semibold">
          + Add new card
        </StyledText>
      </StyledTouchableOpacity>
      <StyledText className="text-2xl text-black font-semibold my-4">
        Payment history
      </StyledText>
      <StyledText className="text-xl text-[#B8B8B8] font-semibold my-1">
        Yesterday
      </StyledText>
      <StyledView className="w-full h-[80px] px-[10px]">
        <StyledView className="w-full flex-row justify-between">
          <StyledText className="text-lg text-black font-normal my-4">
            Port bazar
          </StyledText>
          <StyledText className="text-lg text-[#42C2E5] font-normal my-4">
            50.00 AZN
          </StyledText>
        </StyledView>
        <StyledView className="w-full flex-row justify-between">
          <StyledText className="font-normal text-sm text-[#909090]">
            14:35, Account AZN, 38999280820920802
          </StyledText>
          <PaymentIcon />
        </StyledView>
      </StyledView>
      <StyledView className="w-full h-[80px] px-[10px]">
        <StyledView className="w-full flex-row justify-between">
          <StyledText className="text-lg text-black font-normal my-4">
            Port bazar
          </StyledText>
          <StyledText className="text-lg text-[#42C2E5] font-normal my-4">
            50.00 AZN
          </StyledText>
        </StyledView>
        <StyledView className="w-full flex-row justify-between">
          <StyledText className="font-normal text-sm text-[#909090]">
            14:35, Account AZN, 38999280820920802
          </StyledText>
          <PaymentIcon />
        </StyledView>
      </StyledView>
      <StyledView className="w-full h-[80px] px-[10px]">
        <StyledView className="w-full flex-row justify-between">
          <StyledText className="text-lg text-black font-normal my-4">
            Port bazar
          </StyledText>
          <StyledText className="text-lg text-[#42C2E5] font-normal my-4">
            50.00 AZN
          </StyledText>
        </StyledView>
        <StyledView className="w-full flex-row justify-between">
          <StyledText className="font-normal text-sm text-[#909090]">
            14:35, Account AZN, 38999280820920802
          </StyledText>
          <PaymentIcon />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Payment;
