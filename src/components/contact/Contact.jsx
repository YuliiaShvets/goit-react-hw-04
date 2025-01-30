import { RiFileUserFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css"

const Contact = ({ id, name, number, handleDelete }) => (
  <li className={s.contactList}>
    <div className={s.contact}>
    <span className={s.contactSpan}> <RiFileUserFill className={s.icon}/>
      {name} 
    </span>
    <span className={s.contactSpan}> <BsFillTelephoneFill className={s.icon}/>
      {number}
    </span>
    </div>
    <button
      onClick={() => handleDelete(id)}
      className={s.contactBtn}
    >
      Delete
    </button>
  </li>
);

  
  export default Contact;