import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const [pickupLatLong, setPickupLatLong] = useState();
  const [dropoffLatLong, setDropoffLatLong] = useState();

  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_mapboxToken,
          limit: 1,
        })
    ).then((response) =>
      response.json().then((data) => {
        setPickupLatLong(data.features[0].center);
      })
    );
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_mapboxToken,
          limit: 1,
        })
    ).then((response) =>
      response.json().then((data) => {
        setDropoffLatLong(data.features[0].center);
      })
    );
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <BackButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </BackButtonContainer>
      <Map pickupLatLong={pickupLatLong} dropoffLatLong={dropoffLatLong} />
      <RideContainer>
        <RideSelector
          pickupLatLong={pickupLatLong}
          dropoffLatLong={dropoffLatLong}
        />
        <ConfirmLocationContainer>
          <ConfirmButton>Confirm Uber</ConfirmButton>
        </ConfirmLocationContainer>
      </RideContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`;

const BackButtonContainer = tw.div`
  bg-white
  z-10
  rounded-full
  absolute
  top-4
  left-4
  shadow-md
`;
const BackButton = tw.img`
  cursor-pointer
  object-contain
  h-full
  h-12`;

const RideContainer = tw.div`
  flex-1
  flex
  flex-col
  h-1/2
`;

const ConfirmLocationContainer = tw.div`
  border-t-2
`;

const ConfirmButton = tw.div`
  bg-black
  text-white
  my-4
  mx-4
  text-xl
  text-center
  py-4
  cursor-pointer
  `;

export default Confirm;
