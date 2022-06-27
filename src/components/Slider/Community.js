import { memo } from "react"

const Community = ({ data }) => {
  const { description,
    image,
    title  } = data;
    
  const handleClick = () => alert(title);

  return (<div onClick={handleClick} className="cursor-pointer bg-white shadow-custom mr-4 rounded-lg overflow-hidden box-border">
    <img className="w-72 h-[120px] object-cover" src={image} alt={title} />
    <div className="p-3 box-border">
      <p className="line-clamp-1 font-bold">{title}</p>
      <p className="text-sm line-clamp-2 text-[#757575]">{description}</p>
    </div>
  </div>)
}

export default memo(Community);