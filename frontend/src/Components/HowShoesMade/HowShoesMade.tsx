import {How} from "../How/How.tsx";

export function HowShoesMade() {
    return (
        <>
            <section>
                <div className={"container mx-auto p-4 md:px-16 xl:px-40"}>
                    <div className={"mb:4 text-center"}>
                        <div className={"mb-4"}>
                            <h2 className={"text-[40px]"}>
                                See how your shoes are made
                            </h2>
                        </div>
                        <div className={"mb-4 lg:w-9/12 lg:mx-auto"}>
                            <p className={"text-[#989A9B] text-[16px]"}>
                                Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra
                                ornare
                                donec adipiscing semper aliquet integer risus leo volutpat nulla enim ultrices
                            </p>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 lg:grid-cols-4"}>
                        <div className={"col-span-1 flex flex-col justify-around pr-8 text-left"}>
                            <How number={1} title={"Pet Canvas"} caption={"Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus"}/>
                            <How number={2} title={"Algae foam + vegan glue"} caption={"Enim tincidunt donec vulputate magna pharetra mattis in"}/>
                        </div>
                        <div className={"lg:col-span-2"}>
                            <img src={"/src/assets/HowShoesMade/img.png"}/>
                        </div>
                        <div className={"col-span-1 flex flex-col justify-around pl-8 text-right"}>
                            <How number={3} title={"Organic cotton"} caption={"A vel ipsum, sed dignissim elementum ultrices amet"}/>
                            <How number={4} title={"Upcycled plastic bottles"} caption={"Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}