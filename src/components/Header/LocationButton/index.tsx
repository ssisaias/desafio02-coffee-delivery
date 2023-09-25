import { MapPin } from "@phosphor-icons/react";
import { LocationButtonContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

export function LocationButton() {
  const {cart} = useContext(CartContext);

  return (
    <LocationButtonContainer >
      <MapPin size={24} /> <span>{cart.deliveryAddress?.city}</span>
    </LocationButtonContainer>
  )
}