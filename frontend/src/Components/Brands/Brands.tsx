import {Brand} from "../Brand/Brand.tsx";

export function Brands() {
    return (
        <>
            <section>
                <div className={"container mx-auto p-8 md:px-16 xl:px-40 text-black"}>
                    <div
                        className={"flex flex-wrap justify-around items-center"}>
                        <div className={"w-full 2xl:w-auto text-center"}>
                            <h6 className={"text-base font-bold"}>
                                As seen in:
                            </h6>
                        </div>
                        <Brand imgSrc={"/src/assets/Brands/img.png"}/>
                        <Brand imgSrc={"/src/assets/Brands/img_1.png"}/>
                        <Brand imgSrc={"/src/assets/Brands/img_2.png"}/>
                        <Brand imgSrc={"/src/assets/Brands/img_3.png"}/>
                        <Brand imgSrc={"/src/assets/Brands/img_4.png"}/>
                    </div>
                </div>

            </section>
        </>
    );
}