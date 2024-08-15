import {Hero} from "../../Components/Hero/Hero.tsx";
import {Brands} from "../../Components/Brands/Brands.tsx";
import {AboutUs} from "../../Components/AboutUs/AboutUs.tsx";
import {HowShoesMade} from "../../Components/HowShoesMade/HowShoesMade.tsx";
import {ProductList} from "../../Components/ProductList/ProductList.tsx";

export function Home() {
    return (
        <>
            <Hero/>
            <Brands/>
            <AboutUs/>
            <HowShoesMade/>
            <ProductList type={"home"}/>
        </>
    );
}