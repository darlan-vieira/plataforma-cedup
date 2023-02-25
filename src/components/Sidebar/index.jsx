import { List, Kanban, House, UsersThree, Student, Books, Hamburger, Desktop } from "phosphor-react"
import React, { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"


export const Sidebar = () => {
  //const navigate = useNavigate()
  const menus = [
    { name: "Home", link: "/Home", icon: House },
    { name: "Estudante", link: "/estudante", icon: Student },
    { name: "Professor", link: "/professor", icon: UsersThree },
    { name: "Secretaria", link: "/secretaria", icon: Desktop },
    { name: "Biblioteca", link: "/biblioteca", icon: Books },
    { name: "Alimentação", link: "/alimentacao", icon: Hamburger },
  ];
  const [open, setOpen] = useState(false)
  return (
    <section className=" top-0 left-0 fixed flex gap-6">
      <div className={` bg-purple-900 min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
        <div className="py-3 flex justify-end">
          <List 
            size={32} 
            className="cursor-pointer"
            onClick={() => setOpen(!open)} 
          />
        </div>
        <div className="mt-4 flex flex-col gap-6 relative">
          {
            menus?.map((menu,i) => (
              <Link 
                to={menu.link} 
                key={i}
                className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-purple-800 rounded-md">
                <div>{React.createElement(menu?.icon, { size: "24" })}</div>
                <h2 
                  style={{
                    transitionDelay: `${i + 3}00ms`
                  }}
                  className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                >
                  {menu?.name}
                </h2>
                <h2 className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                  {menu?.name}
                </h2>
              </Link>
            ))
          }
          
        </div>
      </div>
    </section>
  )
}