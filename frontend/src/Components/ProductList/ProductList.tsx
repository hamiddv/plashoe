import React, {useState} from "react";
import {ProductListItem} from "../ProductListItem/ProductListItem.tsx";
import {Box, Slider} from "@mui/material";

interface BaseProductListProps {
    type: string;
}

interface CategoryProductListProps extends BaseProductListProps {
    type: "category";
    category: string;
}

interface NonCategoryProductListProps extends BaseProductListProps {
    type: Exclude<string, "category">;
    category?: string;
}

type ProductListProps = CategoryProductListProps | NonCategoryProductListProps;


export function ProductList({type, category}: ProductListProps) {
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [nameInput, setNameInput] = useState("")
    const [priceMinMaxValue, setPriceMinMaxValue] = useState([0, 100])

    function toggleFilterMenu() {
        setFilterOpen(!isFilterOpen);
    }

    function handleNameInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNameInput(event.target.value)
    }

    function handleSubmitInput() {

    }

    function valuetext(value: number) {
        return `$${value}`;
    }


    function handlePriceMinMaxValueChange(newValue: number | number[]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setPriceMinMaxValue(newValue);
    }

    return (
        <>
            <section>
                <div className={"container mx-auto p-4 md:px-16 xl:px-40 mb-16"}>
                    {type === "home" && (
                        <div>
                            <h6 className={"text-2xl"}>Latest Products</h6>
                        </div>
                    )}
                    {type === "category" && (
                        <>
                            <div>
                                <h1 className={"text-7xl capitalize font-bold text-[#6e7051] mb-8"}>{category}</h1>
                            </div>
                            <div>
                                <button
                                    onClick={toggleFilterMenu}
                                    className={"bg-[#6e7051] text-white text-xl uppercase py-2 px-6"}
                                >
                                    Filter Shoes
                                </button>
                            </div>
                        </>
                    )}
                    <div className={'grid grid-cols-2 sm:grid-cols-3'}>
                        <ProductListItem imgSrc={"/src/assets/Product/img.png"} title={"test"} rate={2} price={50}/>
                        <ProductListItem imgSrc={"/src/assets/Product/img.png"} title={"test"} rate={2} price={50}/>
                        <ProductListItem imgSrc={"/src/assets/Product/img.png"} title={"test"} rate={2} price={50}/>
                        <ProductListItem imgSrc={"/src/assets/Product/img.png"} title={"test"} rate={2} price={50}/>
                        <ProductListItem imgSrc={"/src/assets/Product/img.png"} title={"test"} rate={2} price={50}/>
                        <ProductListItem imgSrc={"/src/assets/Product/img.png"} title={"test"} rate={2} price={50}/>
                    </div>
                </div>
            </section>

            {
                type === "category" && <>
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 transform ${
                            isFilterOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out`}
                    >
                        <div className="p-4">
                            <form>
                                <div className={"mb-4"}>
                                    <input className={"border-2 border-gray-500 rounded-lg px-2"}
                                           placeholder={"search product"} name={"shoes-name"}
                                           id={"shoes-name"} onChange={handleNameInputChange}/>
                                </div>
                                <div className={"mx-4 mb-4"}>
                                    <Box>
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={priceMinMaxValue}
                                            onChange={(_, value) => handlePriceMinMaxValueChange(value)}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={10}
                                            max={100}
                                        />
                                    </Box>
                                </div>
                                <div className={"mb-4"}>
                                    <button value={nameInput}
                                            className={"bg-[#6e7051] py-1 px-8 rounded-lg text-white"}
                                            type={"submit"} onClick={handleSubmitInput}>
                                        Filter
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>


                    {
                        isFilterOpen && (
                            <div
                                className="fixed inset-0 bg-black opacity-50 z-10"
                                onClick={toggleFilterMenu}
                            ></div>
                        )
                    }
                </>
            }
        </>
    )
        ;
}
