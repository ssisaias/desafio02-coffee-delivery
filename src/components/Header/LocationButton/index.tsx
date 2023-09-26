import { MapPin } from "@phosphor-icons/react";
import { LocationButtonContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { DeliveryAddress } from "../../../interface/interfaces";

export function LocationButton() {
  const {cart, setCartAddress} = useContext(CartContext);
  const [currentCity, setCurrentCity] = useState<string>('');


  useEffect(() => {
    const deliveryDetails = localStorage.getItem('app-coffee-delivery-details');
    if(!cart.deliveryAddress?.city){
      if (deliveryDetails) {
        const deliveryDetailsParsed = JSON.parse(deliveryDetails);
        if(cart.deliveryAddress?.city !== deliveryDetailsParsed.city) {
          setCurrentCity(deliveryDetailsParsed.city);
        }
      }
    }
  }, [cart.deliveryAddress, setCartAddress])
  
  function getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setCurrentCity(data.locality);
            const address = cart.deliveryAddress || {city: data.locality, state: data.principalSubdivisionCode.split('-')[1]} as DeliveryAddress;
            console.log(address);
            setCartAddress(address);
          });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <LocationButtonContainer onClick={getGeoLocation}>
      <MapPin size={24} /> <span>{currentCity}</span>
    </LocationButtonContainer>
  )
}