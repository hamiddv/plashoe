import React, {useEffect, useState} from "react";
import {ProductListItem} from "../ProductListItem/ProductListItem.tsx";
import {Box, Slider} from "@mui/material";
import axios from "axios";
import {Link, useParams, useSearchParams} from "react-router-dom";
import {BaseUrl} from "../../main.tsx";

interface Category {
    id: number;
    name: string;
    slug: string;
    stock: number;
}

interface CategoriesState {
    men: Category[];
    women: Category[];
}

interface MinMaxValueState {
    min: number;
    max: number;
}

interface ProductListState {
    id: number;
    name: string;
    image: string;
    price: number;
    rate: number;
}

interface ProductListProps {
    type: string;
}

export function ProductList({type}: ProductListProps) {
    const [searchParams] = useSearchParams();
    const {gender} = useParams();
    const [productList, setProductList] = useState<ProductListState[]>([]);
    const [categories, setCategories] = useState<CategoriesState>({men: [], women: []});
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [minMaxPriceValue, setMinMaxPriceValue] = useState<MinMaxValueState>({min: 0, max: 0});
    const [defaultMinMaxPrice, setDefaultMinMaxPrice] = useState<MinMaxValueState>({min: 0, max: 0});

    const categoryName = searchParams.get("category") || "";

    useEffect(() => {
        axios.get(`${BaseUrl}api/shoes/category-list/`)
            .then((response) => setCategories(response.data))
            .catch(console.error);

        axios.get(`${BaseUrl}api/shoes/shoes-list/${gender}/?category=${categoryName}`)
            .then((response) => setProductList(response.data))
            .catch(console.error);

        axios.get(`${BaseUrl}api/shoes/shoe-min-max-price/`)
            .then((response) => {
                setDefaultMinMaxPrice(response.data)
                setMinMaxPriceValue(response.data)
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        axios.get(`${BaseUrl}api/shoes/shoes-list/${gender}/?category=${categoryName}&minPrice=${minMaxPriceValue.min}&maxPrice=${minMaxPriceValue.max}&name=${nameInput}`)
            .then((response) => setProductList(response.data))
            .catch(console.error);

    }, [location.pathname, nameInput, minMaxPriceValue, gender, categoryName]);

    const toggleFilterMenu = () => setFilterOpen(!isFilterOpen);

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
    };

    const handlePriceMinMaxValueChange = (_event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setMinMaxPriceValue({min: newValue[0], max: newValue[1]});
        }
    };

    const valuetext = (value: number) => `$${value}`;

    return (
        <>
            <section>
                <div className="container mx-auto p-4 md:px-16 xl:px-40 mb-16">
                    {type === "home" ? (
                        <h6 className="text-2xl">Latest Products</h6>
                    ) : (
                        <>
                            <h1 className="text-7xl capitalize font-bold text-[#6e7051] mb-8">
                                {categoryName}
                            </h1>
                            <button
                                onClick={toggleFilterMenu}
                                className="bg-[#6e7051] text-white text-xl uppercase py-2 px-6"
                            >
                                Filter Shoes
                            </button>
                        </>
                    )}
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        {productList.map((product) => (
                            <Link to={`/product-detail/${product.id}`} key={product.id}>
                                <ProductListItem
                                    imgSrc={product.image}
                                    title={product.name}
                                    rate={product.rate}
                                    price={product.price}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {type === "category" && (
                <>
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 transform ${
                            isFilterOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out`}
                    >
                        <div className="p-4">
                            <form>
                                <div className="mb-4">
                                    <input
                                        className="border-2 border-gray-500 rounded-lg px-2"
                                        placeholder="Search product"
                                        name="shoes-name"
                                        id="shoes-name"
                                        onChange={handleNameInputChange}
                                    />
                                </div>
                                <div className="mx-4 mb-4">
                                    <Box>
                                        <Slider
                                            value={[minMaxPriceValue.min, minMaxPriceValue.max]}
                                            onChange={handlePriceMinMaxValueChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={defaultMinMaxPrice.min}
                                            max={defaultMinMaxPrice.max}
                                        />
                                    </Box>
                                </div>
                                <div className="mb-4">
                                    <button
                                        className="bg-[#6e7051] py-1 px-8 rounded-lg text-white"
                                        type="submit"
                                    >
                                        Filter
                                    </button>
                                </div>
                            </form>
                            <div className="flex flex-col justify-center items-center">
                                <ul className="my-8">
                                    <li>
                                        <Link to="/product/men">Men</Link>
                                    </li>
                                    {categories.men.map((element) => (
                                        <li className="ml-4" key={element.id}>
                                            <Link to={`/product/men/?category=${element.slug}`}>
                                                {element.name}
                                                <span className="text-gray-500 text-sm">
                                                    ({element.stock})
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="/product/women">Women</Link>
                                    </li>
                                    {categories.women.map((element) => (
                                        <li className="ml-4" key={element.id}>
                                            <Link to={`/product/women/?category=${element.slug}`}>
                                                {element.name}
                                                <span className="text-gray-500 text-sm">
                                                    ({element.stock})
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {isFilterOpen && (
                        <div
                            className="fixed inset-0 bg-black opacity-50 z-10"
                            onClick={toggleFilterMenu}
                        ></div>
                    )}
                </>
            )}
        </>
    );
}
