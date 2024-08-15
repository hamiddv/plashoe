import {Rating} from "@mui/material";

interface ProductListItemProps{
    imgSrc: string;
    title: string;
    price: number;
    rate?: number;
}

export function ProductListItem({imgSrc, title, price, rate}: ProductListItemProps) {
    return (
        <>
            <div className={"flex flex-col items-center"}>
                <div className="group relative">
                    <img src={imgSrc}/>
                    <a className="w-full block text-center bg-black opacity-0 cursor-pointer text-white py-2 px-12 absolute inset-x-0 bottom-0 group-hover:opacity-70 prope transition duration-500">
                        Quick View
                    </a>
                </div>
                <div className={"py-8 flex flex-col items-center"}>
                    <a className={"cursor-pointer"}>
                        <h2 className={"text-lg "}>{title}</h2>
                    </a>
                    <span className={"text-gray-600 font-bold"}>${price}</span>
                    <Rating name={"read-only"} value={rate} readOnly/>
                </div>
            </div>
        </>
    );
}