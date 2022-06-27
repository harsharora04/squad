import { memo } from "react"

const Announcement = ({ data }) => {
  const { avatar,
    subtitle,
    title  } = data;
  
  const handleClick = () => alert(title);

  return (<div onClick={handleClick} className="cursor-pointer bg-white shadow-custom mr-4 rounded-lg p-3 box-border">
    <div className="flex items-center">
      <img src={avatar} className="w-6 mr-2	h-6 rounded-full" alt={title} />
      <p className="text-[#323232]">Announcement</p>
    </div>
    <p className="line-clamp-1 font-bold mt-2">{title}</p>
    <p className="line-clamp-2 text-sm text-[#757575] mt-2">{subtitle}</p>
  </div>)
}

export default memo(Announcement);