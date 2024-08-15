import {WhyUsItem} from "../WhyUsItem/WhyUsItem.tsx";
import {FaLock} from "react-icons/fa";
import {Link} from "react-router-dom";


export function Footer() {
    return (
        <>
            <footer>
                <section
                    className={"bg-[url('/src/assets/Footer/img.png')] text-white bg-cover bg-no-repeat bg-center"}>
                    <div className={"flex flex-col items-center py-40"}>
                        <h5 className={"text-6xl text-center"}>Better for People & the Planet</h5>
                        <p className={"opacity-90 mt-16 text-center text-lg"}>Ut eget at et aliquam sit quis nisl,
                            pharetra et ac pharetra
                            est dictum in vulputate</p>
                        <div className={"uppercase py-8 text-black"}>
                            <button
                                className={"bg-white py-2 px-4 mr-4 sm:mr-8 sm:px-9 sm:py-3 hover:bg-black hover:text-white duration-500"}>
                                shop men
                            </button>
                            <button
                                className={"bg-white py-2 px-4 mr-4 sm:mr-8 sm:px-9 sm:py-3 hover:bg-black hover:text-white duration-500"}>
                                shop women
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={"container mx-auto p-4 md:px-16 xl:px-40"}>
                        <div className={"flex flex-wrap items-center justify-around"}>
                            <WhyUsItem icon={<FaLock className={"w-6 h-6"}/>} text={"Secure Payment"}/>
                            <WhyUsItem icon={<FaLock className={"w-6 h-6"}/>} text={"Secure Payment"}/>
                            <WhyUsItem icon={<FaLock className={"w-6 h-6"}/>} text={"Secure Payment"}/>
                        </div>
                    </div>
                </section>
                <section className={"mt-12"}>
                    <div className={"container mx-auto p-4 md:px-16 xl:px-40"}>
                        <div className={"grid grid-cols-3"}>
                            <ul className={"flex flex-col items-center text-center justify-start px-8"}>
                                <li className={"mb-8"}>
                                    <img src={"/src/assets/Header/img.png"} alt={"site logo"} className={"mx-auto"}/>
                                </li>
                                <li className={"mt-4 text-gray-600"}>
                                    <p>
                                        Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est
                                        bibendum sapien proin nascetur
                                    </p>
                                </li>
                            </ul>
                            <ul className={"flex flex-col items-center text-center justify-start px-8"}>
                                <li className={"mb-8 text-2xl"}>
                                    Shop
                                </li>
                                <li className={"mt-4 text-gray-600"}>
                                    <Link to={"/product/men"}>
                                        Shop Men
                                    </Link>
                                </li>
                                <li className={"mt-4 text-gray-600"}>
                                    <Link to={"/product/women"}>
                                        Shop Women
                                    </Link>
                                </li>
                                <li className={"mt-4 text-gray-600"}>
                                    <Link to={"/lookbook"}>
                                        Lookbook
                                    </Link>
                                </li>
                                <li className={"mt-4 text-gray-600"}>
                                    <Link to={"/sale"}>
                                        Lookbook
                                    </Link>
                                </li>
                            </ul>
                            <ul className={"flex flex-col items-center text-center justify-start px-8"}>
                                <li className={"mb-8 text-2xl"}>
                                    About
                                </li>
                                <li className={"mt-4 text-gray-600"}>
                                    <Link to={"/our-store"}>
                                        Our Store
                                    </Link>
                                </li></ul>

                        </div>
                    </div>
                </section>
 className={"flex flex-col items-center text-center justify-start"}            </footer>
        </>
    );
}
