import ReactIcon from 'react';
import PersonIcon from "../images/person.svg";
import NotifsIcon from "../images/notif.svg";

const Header = () => {
  return (
    <div className="bg-[#5D5FEF] h-[84px] w-full flex justify-end p-5">
           <div className="mr-10 text-white flex gap-6">
           <img src={NotifsIcon} alt="notification" />
           <img src={PersonIcon} alt="user" />
           </div>
          </div>
  )
}

export default Header;