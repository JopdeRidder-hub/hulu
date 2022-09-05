import requests from "../utils/requests"
import { useRouter } from "next/router"


const titles = () => {
  const router = useRouter()

  return (
    Object.entries(requests).map(([key, {title, url}]) => (
      <h2 onClick={() => router.push(`/?genre=${key}`)} key={key} className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-200">{title}</h2>
    ))
  )
}

const Nav = () => {
  return (
    <nav className="relative">
    <div className="flex px-10 py-3 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scroll-pl-6 hover:overscroll-contain overflow-y-hidden scrollbar-hide">
      {titles()}
    </div>
    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
    </nav>
  )
}


export default Nav
