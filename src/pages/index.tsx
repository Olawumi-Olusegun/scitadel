import { Button } from "@/components/ui/button";
import { MoveRight, Volleyball } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [triggerSearch, setTriggerSearch] = useState(false);

    const [deviceWidth, setDeviceWidth] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };


    useEffect(() => {
        const handleDeviceWidth = () => {
            console.log(deviceWidth)
            if (window.innerWidth > 100) {
                setDeviceWidth(true)
                setIsOpen(false)
            } else {
                setDeviceWidth(false)

            }
        }

        window.addEventListener("resize", handleDeviceWidth);

        return () => window.removeEventListener("resize", handleDeviceWidth)

    }, [])
    return (
        <>
            <div className={`z-20 container mx-auto p-4 fixed top-0 left-0 right-0 ${isOpen && "bg-white"} `}>
                {/* Header */}
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link to={"/"} className={`flex items-center space-x-2  ${isOpen ? "text-green-500" : "text-white"}`}>
                        <Volleyball />
                        <h1 className="font-bold text-xl">Scitadel</h1>
                    </Link>

                    {/* Hamburger Menu */}
                    <button
                        className="text-black/80 block lg:hidden focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <div className={`w-6 h-0.5 bg-green-500 mb-1 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
                        <div className={`w-6 h-0.5 bg-green-500 mb-1 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
                        <div className={`w-6 h-0.5 bg-green-500 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-4 text-black/80">
                        <li><Link to={"/"}>Goalkeepers</Link></li>
                        <li><Link to={"/"}>Defenders</Link></li>
                        <li><Link to={"/"}>Midfielders</Link></li>
                        <li><Link to={"/"}>Attackers</Link></li>
                        <li><Link to={"/signin"}>Log in</Link></li>
                        <li><Link to={"/"}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="mt-4 flex flex-col space-y-3 text-black/80 lg:hidden h-screen">
                        <li className="mb-3">
                            <Button onClick={() => setTriggerSearch((prev) => !prev)} variant={"outline"} className="w-full flex items-center justify-center gap-1 group outline outline-green-700 bg-green-100 hover:bg-green-200 duration-300  text-green-700 font-bold py-2 px-4 rounded mt-4">
                                Search for Players
                                <MoveRight className="group-hover:translate-x-1 duration-300" />
                            </Button>
                        </li>
                        <li onClick={() => setIsOpen(false)}><Link to={"/"}>Goalkeepers</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to={"/"}>Defenders</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to={"/"}>Midfielders</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to={"/"}>Attackers</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to={"/signin"}>Log in</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to={"/"}>Contact Us</Link></li>
                    </ul>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 relative w-full mx-auto min-h-dvh bg-green-700">
                <div className="h-full relative">
                    <img src="./assets/images/kano-pillars.jpg" alt="Kano pillars" className="w-full h-full object-cover object-center pointer-events-none" />
                    <Button onClick={() => setTriggerSearch((prev) => !prev)} variant={"outline"} className="flex items-center justify-center gap-1 group outline outline-green-700 bg-green-100 hover:bg-green-200 absolute bottom-10 left-1/2 -translate-x-1/2 duration-300 w-[50%] text-green-700 font-bold py-2 px-4 rounded mt-4">
                        Search for Players
                        <MoveRight className="group-hover:translate-x-1 duration-300" />
                    </Button>
                </div>
                <div className="px-8 flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center text-white">
                        <h2 className="font-bold text-3xl lg:text-5xl mb-4">Football Talents abound in Nigeria. <br />
                            Let's help you refine & vet your search for talented players!
                        </h2>
                    </div>
                </div>
            </div>

            <Dialog open={triggerSearch} onOpenChange={setTriggerSearch}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Oops!</DialogTitle>
                        <DialogDescription>
                            Kindly note that this action is not accessible yet as the website is under construction.
                        </DialogDescription>
                        <p className="text-sm">Please check back later</p>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Home