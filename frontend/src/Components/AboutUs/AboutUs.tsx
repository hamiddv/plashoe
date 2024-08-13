export function AboutUs() {
    return (
        <>
            <section>
                <div className={"container mx-auto md:px-16 xl:px-40 py-20 grid grid-cols-1 sm:grid-cols-2"}>
                    <div>
                        <img className={"w-full"} src={"/src/assets/AboutUs/img.png"} alt={"About us img"}/>
                    </div>
                    <div
                        className={"py-4 sm:px-4 md:px-6 lg:py-12 lg:px-14 xl:py-20 xl:px-16 2xl:py-28 2xl:px-20 flex flex-col justify-between items-center sm:items-start"}>
                        <div className={"my-2 sm:m-0"}>
                            <h6 className={"text-sm text-center sm:text-left lg:text-base font-bold text-[#f6aa28]"}>
                                About Us
                            </h6>
                        </div>
                        <div className={"my-2 sm:m-0"}>
                            <h2 className={"text-3xl text-center sm:text-left lg:text-[40px] leading-[1.3em] font-medium"}>
                                Selected materials designed for comfort and sustainability
                            </h2>
                        </div>
                        <div className={"my-2 sm:m-0"}>
                            <p className={"text-base text-center sm:text-left lg:text-lg text-[#989A9B]"}>
                                Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit
                                nunc,
                                magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing
                                at ut
                                magna.
                            </p>
                        </div>
                        <div className={"my-2 sm:m-0"}>
                            <button
                                className={"border-b-2 border-b-amber-600 uppercase tracking-widest hover:border-b-black"}>Read
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}