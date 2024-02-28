import {
  StyledView,
  StyledText,
  StyledTouchableOpacity,
} from "../StyledComponents";
import { Modal, ScrollView } from "react-native";
import { useState } from "react";
import ProfileUserIcon from "../../assets/profileUserIcon.svg";
import ProfileLocationIcon from "../../assets/profileLocationIcon.svg";
import ProfileDeleteIcon from "../../assets/profileDeleteIcon.svg";
import ProfileDocIcon from "../../assets/profileDocIcon.svg";
import ProfileInvoiceIcon from "../../assets/profileInvoiceIcon.svg";
import ProfileCardIcon from "../../assets/profileCardIcon.svg";
import ProfileSettingIcon from "../../assets/profileSettingIcon.svg";
import ProfileHelpIcon from "../../assets/profileHelpIcon.svg";
import ProfileLogOutIcon from "../../assets/profileLogOutIcon.svg";
import LayoutDeleteIcon from "../../assets/layoutDeleteIcon.svg";
import LayoutLogOutIcon from "../../assets/layoutLogOutIcon.svg";
import RightArrow from "../../assets/rightArrow.svg";

const Menu = () => {
  const [activeModal, setActiveModal] = useState("");

  return (
    <ScrollView>
      <StyledView className="flex-1 bg-[#FFFFFF] p-4">
        <StyledText className="text-2xl text-black font-semibold">
          Profile
        </StyledText>
        <StyledView className="py-3">
          <StyledTouchableOpacity className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-[8px]">
            <StyledView className="flex-row items-center">
              <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
                <ProfileUserIcon />
              </StyledView>
              <StyledText className="text-base text-black font-medium ">
                Personal information
              </StyledText>
            </StyledView>
            <RightArrow />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-[8px]">
            <StyledView className="flex-row items-center">
              <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
                <ProfileLocationIcon />
              </StyledView>
              <StyledText className="text-base text-black font-medium ">
                Add locations
              </StyledText>
            </StyledView>
            <RightArrow />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledText className="text-2xl text-black font-semibold">
          Options
        </StyledText>
        <StyledView className="py-3">
          <StyledTouchableOpacity className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-[8px]">
            <StyledView className="flex-row items-center">
              <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
                <ProfileInvoiceIcon />
              </StyledView>
              <StyledText className="text-base text-black font-medium">
                Invoices
              </StyledText>
            </StyledView>
            <RightArrow />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-[8px]">
            <StyledView className="flex-row items-center">
              <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
                <ProfileCardIcon />
              </StyledView>
              <StyledText className="text-base text-black font-medium ">
                Payments
              </StyledText>
            </StyledView>
            <RightArrow />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-[8px]">
            <StyledView className="flex-row items-center">
              <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
                <ProfileDocIcon />
              </StyledView>
              <StyledText className="text-base text-black font-medium ">
                Terms and conditions
              </StyledText>
            </StyledView>
            <RightArrow />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-[8px]">
            <StyledView className="flex-row items-center">
              <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
                <ProfileHelpIcon />
              </StyledView>
              <StyledText className="text-base text-black font-medium ">
                Help
              </StyledText>
            </StyledView>
            <RightArrow />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-[8px]">
            <StyledView className="flex-row items-center">
              <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
                <ProfileSettingIcon />
              </StyledView>
              <StyledText className="text-base text-black font-medium ">
                Settings
              </StyledText>
            </StyledView>
            <RightArrow />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            onPress={() => setActiveModal("delete")}
            className="w-full flex-row justify-between h-[80px] items-center rounded-[8px] bg-[#EDEDED] py-4 px-6 my-[8px]"
          >
            <StyledView className="flex-row items-center">
              <StyledView className="rounded-full mr-2 justify-center items-center h-[40px] w-[40px] bg-[#FFFFFF]">
                <ProfileDeleteIcon />
              </StyledView>
              <StyledText className="text-base text-black font-medium ">
                Delete your account
              </StyledText>
            </StyledView>
          </StyledTouchableOpacity>
        </StyledView>
        <StyledTouchableOpacity
          onPress={() => setActiveModal("logout")}
          className="w-full flex-row h-[44px] mt-16 items-center justify-center rounded-[24px] border-[1px] border-[#FF8C03]"
        >
          <ProfileLogOutIcon />
          <StyledText className="text-[#FF8C03] font-medium ml-3">
            Log out
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <Modal
        visible={activeModal === "delete" ? true : false}
        transparent={true}
        onRequestClose={() => {
          setActiveModal("");
        }}
      >
        <StyledView
          className="flex-1 justify-center items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <StyledView className="w-[380px] h-[250px] items-center p-4 rounded-[8px] bg-[#FFFFFF]">
            <StyledView className="w-[42px] justify-center items-center h-[42px] bg-[#FF3115] rounded-full">
              <LayoutDeleteIcon />
            </StyledView>
            <StyledText className="w-full text-center my-2 text-[#414141] font-semibold text-base">
              Delete your account
            </StyledText>
            <StyledText className="w-full text-center  text-[#414141] font-normal text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </StyledText>
            <StyledView className="flex-row mt-auto">
              <StyledTouchableOpacity
                onPress={() => {
                  setActiveModal("");
                }}
                className="w-[155px] h-[42px] justify-center items-center"
              >
                <StyledText className="text-[#757575] text-lg font-medium">
                  Cancel
                </StyledText>
              </StyledTouchableOpacity>
              <StyledTouchableOpacity className="w-[155px] h-[42px] justify-center items-center rounded-[5px] bg-[#FF3115]">
                <StyledText className="text-[#FFFFFF] text-lg font-medium">
                  Delete
                </StyledText>
              </StyledTouchableOpacity>
            </StyledView>
          </StyledView>
        </StyledView>
      </Modal>
      <Modal
        visible={activeModal === "logout" ? true : false}
        transparent={true}
        onRequestClose={() => {
          setActiveModal("");
        }}
      >
        <StyledView
          className="flex-1 justify-center items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <StyledView className="w-[380px] h-[250px] items-center p-4 rounded-[8px] bg-[#FFFFFF]">
            <StyledView className="w-[42px] justify-center items-center h-[42px] bg-[#FF8C03] rounded-full">
              <LayoutLogOutIcon />
            </StyledView>
            <StyledText className="w-full text-center my-2 text-[#414141] font-semibold text-base">
              Do you want to log out?
            </StyledText>
            <StyledText className="w-full text-center  text-[#414141] font-normal text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </StyledText>
            <StyledView className="flex-row mt-auto">
              <StyledTouchableOpacity
                onPress={() => {
                  setActiveModal("");
                }}
                className="w-[155px] h-[42px] justify-center items-center"
              >
                <StyledText className="text-[#757575] text-lg font-medium">
                  No
                </StyledText>
              </StyledTouchableOpacity>
              <StyledTouchableOpacity className="w-[155px] h-[42px] justify-center items-center rounded-[5px] bg-[#FF8C03]">
                <StyledText className="text-[#FFFFFF] text-lg font-medium">
                  Yes
                </StyledText>
              </StyledTouchableOpacity>
            </StyledView>
          </StyledView>
        </StyledView>
      </Modal>
    </ScrollView>
  );
};

export default Menu;
