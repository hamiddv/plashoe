import {ProductListItem} from "../ProductListItem/ProductListItem.tsx";

export function ProductList() {
    return (
        <>
            <section>
                <div className={"container mx-auto p-4 md:px-16 xl:px-40"}>
                    <div>
                        <h6 className={"text-2xl"}>Products</h6>
                    </div>
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
        </>
    );
}