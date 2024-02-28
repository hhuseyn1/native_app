import PasswordInput from "../components/PasswordInput"
import { StyledText, StyledTextInput, StyledView } from "../components/StyledComponents"

const ResetPassword = () => {
  return (
    <StyledView className="flex-1 bg-[#EDEDED] p-4">
      <StyledText className="text-black mb-2 text-base font-medium">Enter your registered e-mail and click recover account.</StyledText>
      <PasswordInput placeholder="New password" placeholderTextColor="#7C7C7C"/>
      <PasswordInput placeholder="Confirm new password" placeholderTextColor="#7C7C7C"/>
    </StyledView>
  )
}

export default ResetPassword