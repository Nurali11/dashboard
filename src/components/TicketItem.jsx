import React from 'react'
import man from "../assets/images/photo.svg";
import PriorityBtn from './PriorityBtn';
import { MoreIcon } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

const TicketItem = ({item}) => {
  const navigate = useNavigate();
  return (
    <tr>
            <td className="py-[24px] px-[31px] border-b-[2px] border-[#DFE0EB]">
              <div className="flex items-center gap-[24px]">
                <img src={item.imgURL ? item.imgURL : man} className="w-[44px] rounded-full h-[44px]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]">
                    {item.comment}
                  </p>
                 <p className="text-[12px] text-[#C5C7CD] font-normal leading-4 tracking-[0.1px]">
                    {item.updatedAt}
                  </p>
                </div>
              </div>
            </td>
            <td className="py-[24px] border-b-[2px] border-[#DFE0EB] text-left space-y-1">
              <p className="font-semibold text-[14px] leading-[20px] text-[#252733]">
                {item.username}
              </p>
              <p className="text-[12px] text-[#C5C7CD] font-normal leading-4 tracking-[0.1px]">
                {item.createdAt}
              </p>
            </td>
            <td className="py-[24px] border-b-[2px] border-[#DFE0EB] space-y-1">
              <p className="text-[14px] font-semibold leading-[20px] text-[#252733]">
                {item.flightDate}
              </p>
              <p className="text-[12px] text-[#C5C7CD] font-normal leading-4 tracking-[0.1px]">
                {item.flightTime}
              </p>
            </td>
            <td className="py-[24px] border-b-[2px] border-[#DFE0EB] items-left">
              <PriorityBtn priorityId={item.priorityId ? item.priorityId : 3} />
            </td>
            <td onClick={() => navigate(`${item.id}`)} className="py-[24px] px-[82px 41px] border-b-[2px] cursor-pointer border-[#DFE0EB] text-[#C5C7CD]">
              <MoreIcon />
            </td>
    </tr>
  )
}

export default TicketItem