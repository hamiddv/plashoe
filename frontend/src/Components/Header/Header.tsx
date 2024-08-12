import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {MdClose, MdManageAccounts, MdMenu, MdShoppingCart} from "react-icons/md";

export function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    function isActiveNavbar(path: string) {
        return location.pathname === path;
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header>
                <nav className={"uppercase flex justify-between items-center px-2 py-1 sm:px-[35px] sm:py-4 font-bold"}>
                    <div className={"flex justify-between items-center w-full xl:w-auto sm:py-[18px] sm:px-5"}>
                        <button className={"xl:hidden"} onClick={toggleMenu}>
                            {menuOpen ? <MdClose className={"w-8 h-8"}/> : <MdMenu className={"w-8 h-8"}/>}
                        </button>
                        <div className={"mx-auto"}>
                            <Link to={"/"}>
                                <img src={"/src/assets/Header/img.png"} alt={"site logo"} className={"mx-auto"}/>
                            </Link>
                        </div>
                        <ul className={"hidden xl:flex items-start text-base px-5 ml-5"}>
                            <li className={`${isActiveNavbar("/men") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                                <Link to={"/men"}>Men</Link>
                            </li>
                            <li className={`${isActiveNavbar("/women") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                                <Link to={"/women"}>Women</Link>
                            </li>
                            <li className={`${isActiveNavbar("/collection") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                                <Link to={"/collection"}>Collection</Link>
                            </li>
                            <li className={`${isActiveNavbar("/lookbook") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                                <Link to={"/lookbook"}>Lookbook</Link>
                            </li>
                            <li className={`${isActiveNavbar("/sale") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                                <Link to={"/sale"}>Sale</Link>
                            </li>
                            <li className={`${isActiveNavbar("/our-story") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                                <Link to={"/our-story"}>Our Story</Link>
                            </li>
                            <li className={`${isActiveNavbar("/contact") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={"flex items-center"}>
                        <ul className={"flex xl:px-5 justify-around items-center"}>
                            <li className={`${isActiveNavbar("/our-story") ? "text-black" : "text-[#979a9b]"} mx-2 hidden xl:block`}>
                                <Link to={"/our-story"}> Our Story</Link>
                            </li>
                            <li className={`${isActiveNavbar("/contact") ? "text-black" : "text-[#979a9b]"} mx-2 hidden xl:block`}>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                            <li className={"mx-2 xl:ml-8"}>
                                <MdShoppingCart className={"w-6 h-6"}/>
                            </li>
                            <li className={`${isActiveNavbar("/account") ? "text-black" : "text-[#979a9b]"} xl:mx-2 xl:ml-8`}>
                                <Link to={"/account"}><MdManageAccounts className={"w-7 h-7 text-black"}/></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div
                    className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className={"flex justify-between items-center px-[35px] py-4 font-bold"}>
                        <button onClick={toggleMenu}>
                            <MdClose className={"w-8 h-8"}/>
                        </button>
                        <Link to={"/"} className={"mx-auto"}>
                            <img src={"/src/assets/Header/img.png"} alt={"site logo"}/>
                        </Link>
                        <div className={"w-8 h-8"}></div>
                    </div>
                    <ul className={"flex flex-col items-start text-base px-5 mt-10"}>
                        <li className={`${isActiveNavbar("/men") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                            <Link to={"/men"} onClick={toggleMenu}>Men</Link>
                        </li>
                        <li className={`${isActiveNavbar("/women") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                            <Link to={"/women"} onClick={toggleMenu}>Women</Link>
                        </li>
                        <li className={`${isActiveNavbar("/collection") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                            <Link to={"/collection"} onClick={toggleMenu}>Collection</Link>
                        </li>
                        <li className={`${isActiveNavbar("/lookbook") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                            <Link to={"/lookbook"} onClick={toggleMenu}>Lookbook</Link>
                        </li>
                        <li className={`${isActiveNavbar("/sale") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                            <Link to={"/sale"} onClick={toggleMenu}>Sale</Link>
                        </li>
                        <li className={`${isActiveNavbar("/our-story") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                            <Link to={"/our-story"} onClick={toggleMenu}>Our Story</Link>
                        </li>
                        <li className={`${isActiveNavbar("/contact") ? "text-black" : "text-[#979a9b]"} mx-2 my-4`}>
                            <Link to={"/contact"} onClick={toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
