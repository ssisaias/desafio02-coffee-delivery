import { IconContext } from "@phosphor-icons/react";
import { Banner } from "../../components/Banner";
import { CoffeeList } from "../../components/CoffeeList";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <IconContext.Provider
                value={{
                    color: 'white',
                    size: '1rem',
                    weight: "fill",
                }}
            >
                <Banner />
                <CoffeeList />
            </IconContext.Provider>
        </HomeContainer>
    )
}