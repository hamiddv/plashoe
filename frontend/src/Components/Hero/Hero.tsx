export function Hero() {
    return (
        <>
            <section className={"bg-hero bg-fixed bg-center bg-no-repeat bg-cover"}>
                <div className={"container mx-auto flex justify-start items-center xl:justify-start  xl:items-start p-8 md:py-16 md:px-16 xl:py-40 xl:px-40"}>
                    <div className={"xl:w-2/4"}>
                        <div className={"text-white"}>
                            <h1 className={"text-5xl md:text-7xl leading-[1.4em] font-bold"}>
                                Love the Planet we walk on
                            </h1>
                            <p>
                                Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut
                                nunc
                                in dictum mauris at ut.
                            </p>
                        </div>
                        <div className={"uppercase py-8"}>
                            <button className={"bg-white py-2 px-4 mr-4 sm:mr-8 sm:px-9 sm:py-3 hover:bg-black hover:text-white duration-500"}>
                                shop men
                            </button>
                            <button className={"bg-white py-2 px-4 mr-4 sm:mr-8 sm:px-9 sm:py-3 hover:bg-black hover:text-white duration-500"}>
                                shop women
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}