import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { BiSearch, BiCart } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="bg-black text-xs px-14 py-3 flex justify-between ">
        <span className="text-slate-300 font-semibold">
          Mon-Thu: <span className="text-white">9.00-5.30</span>
        </span>
        <span className="font-semibold text-slate-300">
          Visit our showroom in 1234 Street Adress City Address, 1234
          <span className="border-b-2 text-white m-2 ">Contact Us</span>
        </span>
        <div className="flex flex-row space-x-3">
          <span className="text-white font-semibold">
            Call Us: (00) 1234 5678
          </span>

          <AiOutlineFacebook className="w-4 h-4 cursor-pointer text-white " />
          <AiOutlineInstagram className="w-4 h-4 cursor-pointer text-white " />
        </div>
      </div>
      <div className="flex flex-row items-center border-b border-slate-300 space-x-20">
        <div className=" px-20 p-4  flex flex-row space-x-7 items-center ">
          <Image src="/vector.png" alt="logo-navbar" width={25} height={25} />
          <div className="space-x-4 flex-nowrap">
            <Link className="text-sm font-semibold" href="">
              Laptops
            </Link>
            <Link className="text-sm font-semibold" href="">
              Dekstop Pcs
            </Link>
            <Link className="text-sm font-semibold" href="">
              Networking Devices
            </Link>
            <Link className="text-sm font-semibold" href="">
              Printes and Scanners
            </Link>
            <Link className="text-sm font-semibold" href="">
              PC Parts
            </Link>
            <Link className="text-sm font-semibold" href="">
              All Other Products
            </Link>
            <Link className="text-sm font-semibold" href="">
              Repairs
            </Link>
          </div>

          <button className="ml-20 outline outline-2 outline-offset-2 text-blue-500 p-1 rounded-3xl font-semibold text-sm w-24">
            Our Deals
          </button>
        </div>
        <div className="flex flex-row space-x-7">
          <BiSearch className="w-6 h-6 cursor-pointer font-semibold" />
          <BiCart className="w-6 h-6 cursor-pointer font-semibold" />
          <div>
            <Image
              src="/photo.png"
              alt="logo"
              width={20}
              height={20}
              className="object-contain rounded-full "
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
