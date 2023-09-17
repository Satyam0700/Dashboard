import { ChevronDown, Search } from "lucide-react"
import Image from "next/image"
// import MobileSidebar from "./MobileSidebar"

const Navbar = ({ open }) => {
    return (
        <div className="w-full bg-dark-2 shadow-md py-3 px-4 flex items-center justify-around">

            <div className="md:hidden relative cursor-pointer flex w-8 h-8 ">
                <Image fill src="/menu.png" alt="logo" onClick={open}/>
                {/* <MobileSidebar /> */}
            </div>

            <div className="flex items-center w-72 bg-[#211A75] gap-4 px-5 py-3 rounded-full max-lg:hidden">
                <Search color="#7879F1" strokeWidth={2.55} />
                <input
                    type="text"
                    placeholder="Search here"
                    className="border-0 outline-none bg-transparent text-white font-semibold placeholder:text-[#AAAAAA]"
                />
            </div>

            <span className="font-bold text-base text-[#6418C3] underline cursor-pointer max-xl:hidden">OTHER MENUS</span>

            <div className="max-[485px]:hidden">
                <Image src="/icons.png" width={200} height={200} />
            </div>

            <div className="flex items-center w-fit bg-[#211A75] gap-2 px-5 py-3 max-md:hidden cursor-pointer rounded-full">
                <Image src="/us.png" width={25} height={25} />
                <p className="text-white flex items-center gap-1">ENGLISH <span><ChevronDown color="#6418C3" size={18} /></span> </p>
            </div>

            <div className="flex gap-4 items-center">
                <Image src="profile.svg" width={57} height={57} alt="profile-image" />
                <div className="flex flex-col gap-1">
                    <span className="text-white font-bold">Instructor Day</span>
                    <span className="font-normal text-sm text-[#7879F1]">Super Admin</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar