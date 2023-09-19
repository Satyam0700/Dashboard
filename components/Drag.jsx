
const Drag = () => {
  return (
    <div className="flex flex-col gap-4 w-[339px]">
    <div className="flex items-center justify-between">
        <span className="text-white font-bold text-[20px]">Revised (0)</span>
        <div className="bg-[#211A75] cursor-pointer px-4 py-1 rounded-lg font-bold text-xl text-[#6418C3]">
            +
        </div>
    </div>

    <div className="bg-[#211A75] py-4 px-2 mb-4 shadow-lg rounded-lg">
        <div className="bg-dark-2 border-2 border-dotted border-[#7879F1] text-center py-5 rounded-lg">
            <h2 className="text-[#7879F1] font-semibold text-base">Move card here</h2>
        </div>
    </div>
</div>
  )
}

export default Drag