export function Brands() {
    return (
        <>
            <section>
                <div className={"container mx-auto p-8 md:py-16 md:px-16 xl:py-40 xl:px-40 text-black"}>
                    <div
                        className={"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6 flex-wrap justify-around items-center"}>
                        <div className={"col-span-full xl:col-span-1 text-center"}>
                            <h6>
                                As seen in:
                            </h6>
                        </div>
                        <div className="flex justify-center">
                            <img src={"/src/assets/Brands/img.png"}/>
                        </div>
                        <div className="flex justify-center">
                            <img src={"/src/assets/Brands/img_1.png"}/>
                        </div>
                        <div className="flex justify-center">
                            <img src={"/src/assets/Brands/img_2.png"}/>
                        </div>
                        <div className="flex justify-center">
                            <img src={"/src/assets/Brands/img_3.png"}/>
                        </div>
                        <div className="flex justify-center">
                            <img src={"/src/assets/Brands/img_4.png"}/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}