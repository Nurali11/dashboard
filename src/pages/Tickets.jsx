import React from 'react'
import man from "../assets/images/photo.svg";
import PriorityBtn from "../components/PriorityBtn";
import { MoreIcon } from "../assets/icons";

const Tickets = () => {
  return (
    <div className="flex flex-col py-[32px] pb-[72px] bg-[#ffff] gap-[54px] border-[1px] rounded-[8px] border-[#DFE0EB]">
      <div className="flex items-center justify-between px-[32px]">
        <p className="text-[23px] font-bold">All tickets</p>
        <div className="flex items-center justify-center gap-[32px] text-[#4B506D] text-[20px]">
          <div className="flex items-center justify-center gap-[5px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#C5C7CD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.12857 4.26839L3.31563 2.12548C3.48647 1.95815 3.7636 1.9582 3.93434 2.12548L6.12132 4.26839C6.39667 4.53812 6.20059 5.00001 5.81195 5.00001H4.5V13.5714C4.5 13.8081 4.30414 14 4.0625 14H3.1875C2.94586 14 2.75 13.8081 2.75 13.5714V5.00001H1.43794C1.04853 5.00001 0.853791 4.53758 1.12857 4.26839ZM7.5625 3.7143H14.5625C14.8041 3.7143 15 3.52243 15 3.28573V2.42858C15 2.19188 14.8041 2.00001 14.5625 2.00001H7.5625C7.32086 2.00001 7.125 2.19188 7.125 2.42858V3.28573C7.125 3.52243 7.32086 3.7143 7.5625 3.7143ZM7.125 6.71429V5.85715C7.125 5.62045 7.32086 5.42858 7.5625 5.42858H12.8125C13.0541 5.42858 13.25 5.62045 13.25 5.85715V6.71429C13.25 6.951 13.0541 7.14287 12.8125 7.14287H7.5625C7.32086 7.14287 7.125 6.951 7.125 6.71429ZM7.125 13.5714V12.7143C7.125 12.4776 7.32086 12.2857 7.5625 12.2857H9.3125C9.55414 12.2857 9.75 12.4776 9.75 12.7143V13.5714C9.75 13.8081 9.55414 14 9.3125 14H7.5625C7.32086 14 7.125 13.8081 7.125 13.5714ZM7.125 10.1429V9.28572C7.125 9.04901 7.32086 8.85715 7.5625 8.85715H11.0625C11.3041 8.85715 11.5 9.04901 11.5 9.28572V10.1429C11.5 10.3796 11.3041 10.5714 11.0625 10.5714H7.5625C7.32086 10.5714 7.125 10.3796 7.125 10.1429Z"
                fill="#C5C7CD"
              />
            </svg>
            <p>Sort</p>
          </div>
          <div className="flex items-center justify-center gap-[5px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4369 2H2.56315C2.06351 2 1.8114 2.60623 2.16542 2.96026L6.5 7.29549V12.125C6.5 12.3085 6.58955 12.4805 6.73993 12.5858L8.61493 13.8979C8.98484 14.1568 9.5 13.8944 9.5 13.437V7.29549L13.8347 2.96026C14.188 2.60694 13.9376 2 13.4369 2Z"
                fill="#C5C7CD"
              />
            </svg>
            <p>Filter</p>
          </div>
          <button className="text-white px-[10px] py-[5px] rounded-[18px] flex items-center gap-[5px] bg-[#190d36]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              <path
                fillRule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
              />
            </svg>
            Create Ticket
          </button>
        </div>
      </div>
      <table>
        <thead className="left-0">
          <tr className="text-left text-[#9FA2B4] tracking-[0.2px] font-bold text-[14px] border-b-[2px] border-[#DFE0EB ]">
            <th className="pl-[32px] pb-[12px]">Ticket Details</th>
            <th className="pb-[12px]">Customer Name</th>
            <th className="pb-[12px]">Date</th>
            <th className="pb-[12px]">Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-[24px] px-[31px] border-b-[2px] border-[#DFE0EB]">
              <div className="flex items-center gap-[24px]">
                <img src={man} className="w-[44px] h-[44px]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]">
                    Contact Email not Linked
                  </p>
                  <p className="text-[12px] text-[#C5C7CD] font-normal leading-4 tracking-[0.1px]">
                    Updated 1 day ago
                  </p>
                </div>
              </div>
            </td>
            <td className="py-[24px] border-b-[2px] border-[#DFE0EB] text-left space-y-1">
              <p className="font-semibold text-[14px] leading-[20px] text-[#252733]">
                Tom Cruise
              </p>
              <p className="text-[12px] text-[#C5C7CD] font-normal leading-4 tracking-[0.1px]">
                on 24.05.2019
              </p>
            </td>
            <td className="py-[24px] border-b-[2px] border-[#DFE0EB] space-y-1">
              <p className="text-[14px] font-semibold leading-[20px] text-[#252733]">
                May 26, 2019
              </p>
              <p className="text-[12px] text-[#C5C7CD] font-normal leading-4 tracking-[0.1px]">
                6:30 PM
              </p>
            </td>
            <td className="py-[24px] border-b-[2px] border-[#DFE0EB] items-left">
              <PriorityBtn priorityId={3} />
            </td>
            <td className="py-[24px] px-[82px 41px] border-b-[2px] cursor-pointer border-[#DFE0EB] text-[#C5C7CD]">
              <MoreIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tickets