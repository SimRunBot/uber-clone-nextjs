import tw from "tailwind-styled-components";
import Link from "next/link";
import { useState } from "react";

const Search = () => {
  const [pickupInput, setPickupInput] = useState();
  const [dropoffInput, setDropoffInput] = useState();

  return (
    <Wrapper>
      <BackButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </BackButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>

        <InputFields>
          <Input
            placeholder="Enter Pickup Location"
            value={pickupInput}
            onChange={(e) => setPickupInput(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoffInput}
            onChange={(e) => setDropoffInput(e.target.value)}
          />
        </InputFields>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmLocationContainer>
        <Link
          href={{
            pathname: "/confirm",
            query: {
              pickup: pickupInput,
              dropoff: dropoffInput,
            },
          }}
        >
          <ConfirmLocationButton>Confirm Locations</ConfirmLocationButton>
        </Link>
      </ConfirmLocationContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  h-screen
  bg-gray-200
`;

const BackButtonContainer = tw.div`
  bg-white
  px-4
`;
const BackButton = tw.img`
cursor-pointer
  h-12`;

const InputContainer = tw.div`
flex
items-center
bg-white
px-4

`;

const FromToIcons = tw.div`
  w-10 flex flex-col
  mr-2
  items-center`;
const Circle = tw.img`
  h-2.5`;
const Line = tw.img`
  h-10`;
const Square = tw.img`
  h-3`;

const InputFields = tw.div`
flex flex-col flex-1
`;
const Input = tw.input`
  h-10
  bg-gray-200
  my-2
  rounded-sm
  p-2
  outline-none
  border-none
  `;

const PlusIcon = tw.img`
w-10 h-10 
bg-gray-200
rounded-full
ml-3`;

const SavedPlaces = tw.div`flex items-center bg-white
px-4
py-2`;
const StarIcon = tw.img`
w-10 h-10 
bg-gray-400
rounded-full
p-2
mr-2
`;
const ConfirmLocationContainer = tw.div`
  flex justify-center items-center
`;

const ConfirmLocationButton = tw.button`
  mt-2
  py-3
  px-4
  bg-black
  text-white
  text-2xl
`;

export default Search;
