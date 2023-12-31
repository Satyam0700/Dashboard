import Card from "./Card"
import { progress } from '../constants/index'

const Progress = () => {
    return (
        <div className="flex flex-col gap-4 w-[339px]">
            <div className="flex items-center justify-between">
                <span className="text-white font-bold text-[20px]">In Progress (2)</span>
                <div className="bg-[#211A75] cursor-pointer px-4 py-1 rounded-lg font-bold text-xl text-[#6418C3]">
                    +
                </div>
            </div>

            <div>
                {progress.map((item) => (
                    <Card
                        key={item.title}
                        title={item.title}
                        subTitle={item.subTitle}
                        peoples={item.peoples}
                        color={item.color}
                        width={item.width}
                        height={item.height}
                    />
                ))}
            </div>
        </div>
    )
}

export default Progress