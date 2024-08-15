import {useParams} from "react-router-dom";
import {ProductList} from "../../Components/ProductList/ProductList.tsx";

export function Product() {
    const {categoryName} = useParams();

    return (
        <>
            <ProductList type={"category"} category={categoryName}/>
        </>
    );
}