import React from "react";
import Link from "next/link";
import {FaBuilding} from 'react-icons/fa'; // Replace `fa` with the desired icon library prefix (e.g., `ai`, `bs`, `md`, etc.)
import {AiFillCalendar}from 'react-icons/ai';
import {AiFillFileText}from 'react-icons/ai';
import {AiOutlineUsergroupAdd}from 'react-icons/ai';
const Sidebar=()=>{
    return(
        <div className="sidebar">
         <ul>
           <li>  <Link href="/Description">
           <AiFillCalendar/>
        Job description 
      </Link></li>
      <li>  <Link href="/company">
        <FaBuilding/>
        Company
      </Link></li>
      <li>  <Link href="/notes">
        <AiFillFileText/>
        Notes
      </Link></li>
      <li>  <Link href="/network">
        <AiOutlineUsergroupAdd/>
        Networking
      </Link></li>
            </ul>
        </div>
    )
}
export default Sidebar;