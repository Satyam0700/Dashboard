import { Clock } from "lucide-react"
import Image from "next/image"

const Card = ({ color, title, subTitle, peoples, width, height }) => {
    return (
        <div className="bg-[#211A75] py-4 px-2 mb-4 shadow-lg rounded-lg flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div style={{ background: color }} className="w-[10px] h-[10px] rounded-full" />
                    <span style={{ color: color }} className="font-semibold text-[14px]">{subTitle}</span>
                </div>
                <div className="cursor-pointer">
                    <Image src="/dot.png" width={24} height={24} />
                </div>
            </div>
            <h2 className="text-[18px] font-semibold text-white">{title}</h2>

            <div className="w-full bg-[#1E1C3A] h-2 rounded-full overflow-hidden">
                <div style={{ background: color}} className="w-[80px] h-2" />
            </div>

            <div className="flex items-center justify-between mt-1">
                <Image src={peoples} width={width} height={height}/>
                <p className="text-[#A5A5A5] flex items-center gap-2 font-semibold"><span><Clock color="#A5A5A5"/></span>Due in 4 days</p>
            </div>
        </div>
    )
}

export default Card