import {  FaFacebookF } from "react-icons/fa";
import {  FaGithub } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {  FaTiktok } from "react-icons/fa";
import {  FaInstagram } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="bg-gray-800 justify-center text-center p-8 text-2xl text-white">
            <p>Made by &hearts; Alishba Shabbir</p>
            <p>&#169; CopyRight</p>
           
            <div className=" flex text-gray-400 hover:text-white">
            <a href="#">alishbashabbir312@gmail.com</a>
            </div>
            <div className="flex gap-x-4 text-gray-400 hover:text-white"><FaFacebookF className="icon" />
            <FaGithub className="icon" />
            <FaLinkedinIn className="icon" />
            <FaInstagram className="icon" />
            <FaTiktok className="icon" />
           </div>

                
        </div>
    )
}