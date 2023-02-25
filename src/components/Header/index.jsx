import { Bell } from "phosphor-react"

export const Header = () => {
  return (
    <header className=" bg-gray-100">
      <div className="container mx-auto flex flex-row ">
          <div className="flex-1">
            <h2>Cedup</h2>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Darlan Vieira</h2>
            <Bell size={32} />
            <img src="https://github.com/darlan-vieira.png" alt="foto de uma pessoa" className="w-20 rounded-full" />
          </div>
        </div>
    </header>
  )
}