import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";
import { useEffect, useState } from "react";

const RideSelector = ({ pickupLatLong, dropoffLatLong }) => {
  const [rideDuration, setRideDuration] = useState();

  useEffect(() => {
    if (pickupLatLong && dropoffLatLong) {
      console.log(pickupLatLong, dropoffLatLong);
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupLatLong[0]},${pickupLatLong[1]};${dropoffLatLong[0]},${dropoffLatLong[1]}?access_token=${process.env.NEXT_PUBLIC_mapboxToken} 
      `
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.routes) {
            setRideDuration(data.routes[0].duration / 100);
          }
        });
    }
  }, [pickupLatLong, dropoffLatLong]);

  return (
    <Wrapper>
      <Title>Choose a ride or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => {
          return (
            <Car key={index}>
              <CarImage src={car.imgUrl} />
              <CarDetails>
                <Service>{car.service}</Service>
                <Time>{(car.multiplier * rideDuration).toFixed(0)} min</Time>
              </CarDetails>
              <Price>{(car.multiplier * rideDuration).toFixed(2)} €</Price>
            </Car>
          );
        })}
      </CarList>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex-1
  flex
  flex-col
  overflow-y-scroll
`;

const Title = tw.div`
  text-gray-500 text-center text-sm py-2 border-b
`;

const CarList = tw.div`
overflow-y-scroll
`;

const Car = tw.div`
  flex p-4 items-center 
`;

const CarImage = tw.img`
  h-12 mr-4
`;
const CarDetails = tw.div`
 flex-1
`;

const Service = tw.div`
  font-medium text-l
`;

const Time = tw.div`
  text-xs text-blue-500
`;

const Price = tw.div`
  text-xs
`;

export default RideSelector;
