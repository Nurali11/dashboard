import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../modules/Header'
import { useNavigate, useParams } from 'react-router-dom';
import Man from "../assets/images/photo.svg";
import { ClipLoader } from 'react-spinners';
import { Context } from '../Context/Context';
import toast, { Toaster } from "react-hot-toast"
import Loading from '../components/Loading';

const CreateTicket = () => {
  let date = new Date()
  const {id:editId} = useParams()
  const navigate = useNavigate()
  let dateTime = `${date.getDate().toString().padStart(2, 0)}.${(date.getMonth() + 1).toString().padStart(2, 0)}.${date.getFullYear()}`
  const { ticketsList, setTicketsList } = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)
  const id = ticketsList[ticketsList.length - 1]?.id ? ticketsList[ticketsList.length - 1]?.id + 1 : 1
  const [imgURL, setImgURL] = useState("")
  const [comment, setComment] = useState("")
  const [updatedAt, setUpdatedAt] = useState("")
  const [username, setUsername] = useState("")
  const [createdAt, setCreatedAt] = useState(dateTime)
  const [flightDate, setFlightDate] = useState("")
  const [flightTime, setFlightTime] = useState("")
  const [priorityId, setPriorityId] = useState("")
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault()
    if(editId){
      setIsLoading(true)
      const editIndex = ticketsList.findIndex(item => item.id == editId)
      const editDate = ticketsList.find(item => item.id == editId)
      const data = {id:editId,imgURL, comment, updatedAt:createdAt, username, createdAt:editDate.createdAt, flightDate, flightTime, priorityId }
      ticketsList.splice(editIndex, 1, data)
      setTicketsList([...ticketsList])
      toast.success("Updated...")
      setTimeout(() => navigate(-1), 1000)
    }
    else{
      setIsLoading(true)
      const data = { id, imgURL, comment, updatedAt, username, createdAt, flightDate, flightTime, priorityId }
      setTicketsList([...ticketsList, data])
      toast.success("Created...")
      setTimeout(() => navigate(-1), 1000)
    }
  }

  const updateData = ticketsList.find(item => item.id == editId)
  useEffect(() => {
    if(editId){
      setComment(updateData.comment)
      setUsername(updateData.username)
      setFlightDate(updateData.flightDate)
      setFlightTime(updateData.flightTime)
      setPriorityId(updateData.priorityId)
      setImgURL(updateData.imgURL)
    }
  },[])

  return (
    <div className='bg-[#ffff] px-[32px] py-[20px] rounded-[20px]'>
      <Toaster  position="top-center"  reverseOrder={false}/>
      <h1 className='text-[28px] font-bold'>Create Tickets</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-[20px] mt-[30px]'>
            <div className='flex flex-col gap-[5px]'>
              <label>Enter Username</label>
              <input required value={username} onChange={(e) => setUsername(e.target.value)} className='w-[500px] border-[1.5px] border-[#DFE0EB] px-[10px] py-[5px] text-[20px] rounded-[10px]' type="text" placeholder='Enter Username'/>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <label>Enter Comment</label>
              <input required value={comment} onChange={(e) => setComment(e.target.value)} className='w-[500px] border-[1.5px] border-[#DFE0EB] px-[10px] py-[5px] text-[20px] rounded-[10px]' type="text" placeholder='Enter Comment'/>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <label>Flight Date</label>
              <input required value={flightDate} onChange={(e) => setFlightDate(e.target.value)} className='w-[500px] border-[1.5px] border-[#DFE0EB] px-[10px] py-[5px] text-[20px] rounded-[10px]' type="date"/>
            </div>
          </div>
          <div className='flex flex-col gap-[20px] mt-[30px]'>
            <div className='flex flex-col gap-[5px]'>
              <label>Choose Time</label>
              <input required value={flightTime} onChange={(e) => setFlightTime(e.target.value)} type="time" className='w-[500px] border-[1.5px] border-[#DFE0EB] px-[10px] py-[5px] text-[20px] rounded-[10px]' />
            </div>
            <div className='flex flex-col gap-[5px]'>
              <label>Choose Priority</label>
              <select value={priorityId || 3} onChange={(e) => setPriorityId(e.target.value)} className='w-[500px] border-[1.5px] border-[#DFE0EB] px-[10px] py-[5px] text-[20px] rounded-[10px]'>
                <option value="1">High</option>
                <option value="2">Low</option>
                <option value="3">Normal</option>
              </select>
            </div>
            <label>
              <input onChange={(e) => setImgURL(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file" />
              <div className="w-[100px] relative h-[100px] rounded-full border-[1.5px] border-dashed">
                <img className="rounded-full absolute w-full h-full" src={imgURL != "" ? imgURL : Man} alt="Man img" />
              </div>
            </label>
          </div>
        </div>
        <div className='flex items-center justify-center mt-[50px]'>
          <button className={` ${isLoading ? <Loading /> : ""} bg-[#191a50] text-white px-[30px] cursor-pointer py-[10px] rounded-[20px]`} type={"submit"}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTicket