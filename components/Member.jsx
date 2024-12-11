import Image from "next/image"

const Member = () => {
    return (
        <div className="bg-dark-2 px-7 py-5 rounded-lg flex flex-col lg:flex-row max-xl:gap-10 max-xl:items-start items-center justify-between">
            <div className="flex items-start gap-3">
                <Image src="/back.png" width={38} height={38} alt="icon" className="mt-1 cursor-pointer max-sm:hidden" />
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-[28px] text-white">School November Tasks</h1>
                    <p className="text-[#A5A5A5]">Created by Instructor Day on November 31, 2022</p>
                    <div className="flex items-center flex-wrap gap-4">
                        <Image src="/people.png" alt="people" width={148} height={40} className="max-xl:hidden" />
                        <div className="flex items-center w-fit bg-[#6418C3] gap-2 px-5 py-2 rounded-md cursor-pointer">
                            <Image src="/add.png" width={24} height={24} />
                            <p className="text-white font-bold">Invite People </p>
                        </div>
                        <span className="text-white font-bold px-4 py-2 border border-[#7879F1] cursor-pointer rounded-lg">Private</span>
                        <span className="text-white font-bold px-4 py-2 rounded-lg bg-[#7879F1] cursor-pointer">Edit</span>
                        <div className="flex items-center gap-2 px-4 py-2 border border-[#7879F1] cursor-pointer rounded-lg">
                            <Image src="/chat.png" width={24} height={24} />
                            <span className="text-white font-semibold">45 Comments</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end justify-end gap-5">
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col gap-1 text-right">
                        <span className="text-white font-bold">Centered Martial Arts</span>
                        <span className="font-normal text-sm text-[#7879F1]">Sunnyvale, Ca</span>
                    </div>
                    <Image src="/logo.png" width={57} height={57} alt="logo" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white font-semibold"><span className="max-xl:hidden">Total </span>Progress 60%</span>
                    <div className="w-[150px] bg-[#1E1C3A] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#6418C3] w-[80px] h-2" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Member