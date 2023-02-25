import { Fragment, useState } from "react"
import Carrousel from 'react-elastic-carousel'

const breakpoints = [
  {width: 1, itemsToShow: 1 },
  {width: 550, itemsToShow: 2 },
  {width: 768, itemsToShow: 3 },
  {width: 1200, itemsToShow: 4 }
];

export const Card = () => {
  return (
    <Fragment>
    <section className="w-11/12 flex flex-col justify-center ml-16 mb-16">
        <div className="flex flex-row justify-center">
          <Carrousel breakPoints={breakpoints}>
            <div className="card h-50 w-60 flex flex-col items-center">
              <img src="/livros/livro6.jpg" alt="capa de livro" className="w-5/6" />
              <h4 className="text-roxo-900 text-md font-bold mt-4">Bazar dos Poetas</h4>
              <span className="text-gray-400 text-center text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur adipisicing elit Animi</span>
              <button className="bg-roxo-900 hover:bg-purple-800 text-[18px] text-gray-100 font-medium px-8 py-1 mt-2 rounded-lg">reservar</button>
            </div>

            <div className="container mx-auto card h-50 w-60 flex flex-col items-center">
              <img src="/livros/livro2.jpg" alt="capa de livro" className="w-5/6" />
              <h4 className="text-roxo-900 text-md font-bold mt-4">Mente milionária</h4>
              <span className="text-gray-400 text-center text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta libero id? Eligen</span>
              <button className="bg-roxo-900 hover:bg-purple-800 text-[18px] text-gray-100 font-medium px-8 py-1 mt-2 rounded-lg">reservar</button>
            </div>

            <div className="container mx-auto card h-50 w-60 flex flex-col items-center">
              <img src="/livros/livro8.jpg" alt="capa de livro" className="w-5/6" />
              <h4 className="text-roxo-900 text-md font-bold mt-4">Mentes Únicas</h4>
              <span className="text-gray-400 text-center text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit qui enim nihil amet consectetur adipisicing. </span>
              <button className="bg-roxo-900 hover:bg-purple-800 text-[18px] text-gray-100 font-medium px-8 py-1 mt-2 rounded-lg">reservar</button>
            </div>

            <div className="container mx-auto card h-50 w-60 flex flex-col items-center">
              <img src="/livros/livro4.jpg" alt="capa de livro" className="w-5/6" />
              <h4 className="text-roxo-900 text-md font-bold mt-4">Como eu era antes de você</h4>
              <span className="text-gray-400 text-center text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit Animi </span>
              <button className="bg-roxo-900 hover:bg-purple-800 text-[18px] text-gray-100 font-medium px-8 py-1 mt-2 rounded-lg">reservar</button>
            </div>

            <div className="container mx-auto card h-50 w-60 flex flex-col items-center">
              <img src="/livros/livro3.jpg" alt="capa de livro" className="w-5/6" />
              <h4 className="text-roxo-900 text-md font-bold mt-4">Educação e Democracia</h4>
              <span className="text-gray-400 text-center text-sm mt-2">Como mudar a educação pública numa grande cidade como São Paulo</span>
              <button className="bg-roxo-900 hover:bg-purple-800 text-[18px] text-gray-100 font-medium px-8 py-1 mt-2 rounded-lg">reservar</button>
            </div>

            <div className="container mx-auto card h-50 w-60 flex flex-col items-center">
              <img src="/livros/livro6.jpg" alt="capa de livro" className="w-5/6" />
              <h4 className="text-roxo-900 text-md font-bold mt-4">Bazar dos Poetas</h4>
              <span className="text-gray-400 text-center text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur adipisicing elit Animi </span>
              <button className="bg-roxo-900 hover:bg-purple-800 text-[18px] text-gray-100 font-medium px-8 py-1 mt-2 rounded-lg">reservar</button>
            </div>
          </Carrousel>
        </div>
        
    </section>
  </Fragment>
  )
}



/*flex 
justify-center 
text-lg md:text-3xl 
p-6 md:p-10 w-50 md:w-60 h-50 md:h-60 bg-slate-300
items-center
drop-shadow-md
rounded-md"*/
