import { useEffect } from "react";
import tw from "tailwind-styled-components";
import ActionButtons from "./ActionButtons";
import InputSearchField from "./InputSearchField";

const ActionItems = () => {
  return (
    <Wrapper>
      <Header>
        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        <Profile>
          <Name>Peter</Name>
          <UserImage src=" https://img.icons8.com/windows/50/000000/square-full.png" />
        </Profile>
      </Header>
      <ActionButtons />
      <InputSearchField />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  h-32
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-20 text-sm
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px

`;

export default ActionItems;
