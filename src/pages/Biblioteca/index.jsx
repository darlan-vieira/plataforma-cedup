import { useState } from "react"
import { Card } from "../../components/Card"
import { Sidebar } from "../../components/Sidebar"

export const Biblioteca = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>

      <main className="w-full min-h-screen bg-gray-200">
        <div className=" container max-auto flex flex-row px-18 items-center justify-items-center pt-8 mb-12">
          <h1 className="text-3xl font-bold px-28 ">
            Bem vindos em nossa <strong className="text-purple-900">Biblioteca</strong> virtual, 
            aqui você pode encontrar todos os nossos livros! 
            Aproveite agora mesmo e bons estudos. 
          </h1>
          <img src="/images/Bibliophile-pana.svg" alt="imagen de uma pessoa lendo um livro" className="w-96 " />
        </div>
        <section className="max-w-screen mx-4">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h2 className="text-[24px] font-bold mb-12">Preparamos uma lista de nossos livros 
              e classificamos por categoria! Você pode escolher um livro e fazer uma <strong className="text-purple-900">reserva.</strong>
            </h2>
            <div className="w-screen ml-12 ">
              <h2 className="text-roxo-900 text-[20px] text-start font-bold px-40 mb-6">Literatura</h2>
              <Card />
              <h2 className="text-roxo-900 text-[20px] text-start font-bold px-40 mb-6">Educação</h2>
              <Card />
              <h2 className="text-roxo-900 text-[20px] text-start font-bold px-40 mb-6">Poesia</h2>
              <Card />
              <h2 className="text-roxo-900 text-[20px] text-start font-bold px-40 mb-6">Biografia</h2>
              <Card />
            </div>
            
          </div>
        </section>
      </main>
    </>
  )
}
