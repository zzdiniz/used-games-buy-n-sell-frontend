import CloseIcon from "../../../assets/icons/CloseIcon";
import ErrorIcon from "../../../assets/icons/ErrorIcon";
import SuccessIcon from "../../../assets/icons/SuccessIcon";
import customStyles from "./message.module.css";
import { useEffect, useState } from "react";
import bus from "../../../utils/bus";

const Message = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message,setMessage] = useState("")
  const [type, setType] = useState("error");
  useEffect(()=>{
    bus.addListener('flash',({message,type})=>{
        setIsVisible(true)
        setMessage(message)
        setType(type)
    })
  },[])
  return (
    isVisible && (
      <div className={customStyles.messageWrapper}>
        <div
          className={`${customStyles.messageContainer} ${customStyles[type]}`}
        >
          {type === "success" ? <SuccessIcon /> : <ErrorIcon />}
          <div className={customStyles.message}>{message}</div>
          <CloseIcon color={type === "success" ? "#2DC071" : "#E0232E"} setIsVisible={setIsVisible}/>
        </div>
      </div>
    )
  );
};

export default Message;
