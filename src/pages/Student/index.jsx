import { Sidebar } from "../../components/Sidebar"

export const Student = () => {
  return (
    <div className="h-screen  bg-gray-100 ">
      <main className="container mx-auto flex flex-col">
        <section className="flex gap-6">
          <Sidebar />
        </section>
        <div className="flex flex-row justify-items-center gap-64 pt-16 px-14">
          <div className="flex flex-col items-center pt-16 scroll-m-1 ">
            <span className="text-gray-400 pr-64">Prefeito Manoel de Aguiar</span>
            <h1 className="text-gray-900 text-3xl font-bold">A Plataforma <strong className="text-roxo-900">cedup</strong> chegou para conectar ainda mais alunos, professores e escola.</h1>
            <strong className="pt-4 text-roxo-900  pr-50 font-semibold ">Seja claro no que você deseja e persevere através dos estudos. Dessa forma, você vai colher os frutos de todo este tempo investido.</strong>
          </div> 
          
          <img src="/images/Webinar-amico.svg" alt="imagem ilustrativa de educação" className="w-96" />
        </div>
      </main>
    </div>
  )
}