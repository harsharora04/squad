import { memo } from "react";
import TimerIcon from "../../assets/images/cards/timer.png";
import {differenceInHours} from "date-fns";

const Job = ({ data }) => {
  const { businessLogo,
    businessName,
    earnings,
    estimatedTime,
    title  } = data;
  
  const earningsFormatted = (new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(earnings));

  const hourTime = differenceInHours(new Date(), new Date(estimatedTime));
  const handleClick = () => {
    alert(title);
  }

  return (<div onClick={handleClick} className="cursor-pointer shadow-custom bg-white mr-4 rounded-lg p-3 box-border">
    <div className="flex pb-4 border-b border-[#E0E0E0]">
      <img className="h-12 w-12 rounded-full mr-2" src={businessLogo} alt={businessName} />
        <div>
            <p className="line-clamp-1">{title}</p>
            <p className="line-clamp-1 text-sm	text-[#757575]">{businessName}</p>
        </div>
    </div>
    <div className="flex pt-5 items-center justify-center">
      <div className="flex items-center">
        <img src={TimerIcon} className="w-8	h-8 object-contain mr-2" alt="timer" />
        <div>
          <p className="text-xs text-[#757575]">Upto</p>
          <p className="text-sm">{earningsFormatted}</p>
        </div>
      </div>
      <div className="flex items-center ml-4">
        <img src={TimerIcon} className="w-8	h-8 object-contain mr-2" alt="timer" />
        <div>
          <p className="text-xs text-[#757575]">Time</p>
          <p className="text-sm">{hourTime}</p>
        </div>
      </div>
    </div>
  </div>)
}

export default memo(Job);