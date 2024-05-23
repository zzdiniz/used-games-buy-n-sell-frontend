import { Dispatch, SetStateAction, useContext } from "react";
import customStyles from "./modal.module.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  const useAuth = useContext(UserContext);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className={customStyles.modalWrapper}>
      <div className={customStyles.triangle}></div>
      <div className={customStyles.modalContainer}>
        <button
          className={customStyles.logoutBtn}
          onClick={() => {
            navigate("/profile");
          }}
        >
          My profile
        </button>
        <button
          className={customStyles.logoutBtn}
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
