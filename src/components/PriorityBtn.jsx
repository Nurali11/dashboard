import React from 'react'

const PriorityBtn = ({ priorityId}) => {
    const style = {
        1 : "bg-[#F12B2C]",
        2 : "bg-[#FEC400]",
        3 : "bg-[#29CC97]",
    }
    const title = {
        1 : "High",
        2 : "Low",
        3 : "Normal",
    }
  return (
    <button className={`${style[priorityId]} py-[5px] text-white px-[12px] rounded-[100px] flex items-center justify-center font-bold text-[13px] uppercase`}>{title[priorityId]}</button>
  )
}

export default PriorityBtn