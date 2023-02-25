import { ChartLineUp, Cpu, ListChecks, Truck, User } from 'phosphor-react'
import React from 'react'
import { Sidebar } from '../../components/Sidebar'


export function Home() {
  return (
    <div className="w-screen h-full  bg-gray-100 ">
      <main className="container mx-auto flex flex-col">
        <section className="flex gap-6 mb-24">
          <Sidebar />

          <div className="flex flex-row justify-items-center gap-64 pt-16 px-14">
          <div className="flex flex-col items-center pt-16 scroll-m-1 ">
            <span className="text-gray-400 text-lg pr-64">Prefeito Manoel de Aguiar</span>
            <h1 className="text-gray-900 text-3xl font-bold">A Plataforma <strong className="text-roxo-900">cedup</strong> chegou para conectar alunos, professores e escola!</h1>
            <span className="pt-4 text-roxo-900 text-lg  pr-50 font-semibold ">Seja claro no que você deseja e persevere através dos estudos. Dessa forma, você vai colher os frutos de todo este tempo investido.</span>
          </div> 
          
          <img src="/images/Webinar-amico.svg" alt="imagem ilustrativa de educação" className="w-96" />
        </div>
        </section>

        <section className='w-full h-24 bg-purple-900 rounded-md ml-12'>
          <div className='flex flex-row gap-4 items-center justify-items-center space-x-72 ml-32 mt-4'>
            <div className='flex flex-col items-center'>
              <h2 className='text-gray-100 text-2xl font-bold'>400+</h2>
              <span className='text-gray-200 text-lg font-semibold'>Alunos</span>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-gray-100 text-2xl font-bold'>20+</h2>
              <span className='text-gray-200 text-lg font-semibold'>Professores</span>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-gray-100 text-2xl font-bold'>5+</h2>
              <span className='text-gray-200 text-lg font-semibold'>Cursos</span>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-gray-100 text-2xl font-bold'>40+</h2>
              <span className='text-gray-200 text-lg font-semibold'>Profissionais</span>
            </div> 
          </div>
        </section>

        <section>
          <div className='flex mt-32'>
            <h1 className='text-gray-900 text-2xl font-semibold  ml-12'>Conheça nossos cursos técnicos!</h1>
          </div>
          <div className='grid grid-cols-2 '>
          <div className="container mx-auto card w-4/5 flex flex-col items-center mt-28">
            <div className='w-20 h-20 bg-sky-200 flex items-center justify-center rounded-lg '>
              <Cpu size={48} />
            </div>
              <h1 className="text-roxo-900 text-xl font-bold mt-6">Análise e Desenvolvimento de Sistemas</h1>
              <span className="text-gray-600 text-start text-lg mt-6"><strong className='text-gray-900'>Mercado de Trabalho</strong>
                <br/>
                <br/>
              <strong className='text-gray-900'>Área de atuação:</strong> o técnico em desenvolvimento de sistemas atua em diferentes organizações, públicas ou privadas, de diversos portes atuando na programação de sistemas e/ou na manipulação de banco de dados.
                <br/>
                <br/>
              <strong className='text-gray-900'>Perfil profissional:</strong> após a conclusão do curso, o estudante terá perfil dinâmico, proativo e obstinado por tecnologias e sistemas. Busca estar atualizado/a e adquirir constante conhecimento em sua área. Sugeri/implementa melhorias sistêmicas por meio da sua contribuição na elaboração de novos projetos, na busca da melhor experiência do usuário.
                <br/>
                <br/>
              <strong className='text-gray-900'>Funções:</strong> entre as funções executadas estão:
              Analisar requisitos de software e diagramá-los com UML;
              Programar software a partir de projeto e requisitos estabelecidos, utilizando linguagem de programação e tecnologia selecionadas;
              Utilizar ferramentas de versionamento para controle de mudanças no código e realizar testes de software;
              Instalar sistemas de banco de dados, construindo bases de dados e manipulando-as de acordo com as necessidades do sistema; 
              Planejar o desenvolvimento de software;
              Desenvolver algoritmos;
              Auxiliar na modelagem e manipulação de banco de dados;
              Auxiliar na administração de banco de dados;
              Desenvolver código orientado a objetos;
              Auxiliar na elaboração de projeto de sistema orientado a objeto;
              Desenvolver interface para melhor experiência do usuário;
              Desenvolver e organizar interface gráfica para aplicações desktop;
              Programar aplicativos computacionais com integração de banco de dados para desktop;
              Gerenciar a configuração e versionamento de Software;
              Executar testes e realizar melhorias em aplicativos computacionais;
              Desenvolver e organizar interface de usuário e elementos visuais para aplicações web. (front-end);
              Programar aplicativos computacionais com integração de banco de dados para web. (back-end).
            </span>
          </div>

          <div className="container mx-auto card w-4/5 flex flex-col items-center mt-28">
            <div className='w-20 h-20 bg-sky-200 flex items-center justify-center rounded-lg '>
              <Truck size={48} />
            </div>
              <h1 className="text-roxo-900 text-xl font-bold mt-6">Logística</h1>
              <span className="text-gray-600 text-start text-lg mt-6"><strong className='text-gray-900'>Mercado de Trabalho</strong>
                <br/>
                <br/>
              <strong className='text-gray-900'>Área de atuação:</strong> o técnico em desenvolvimento de sistemas atua em diferentes organizações, públicas ou privadas, de diversos portes atuando na programação de sistemas e/ou na manipulação de banco de dados.
                <br/>
                <br/>
              <strong className='text-gray-900'>Perfil profissional:</strong> após a conclusão do curso, o estudante terá perfil dinâmico, proativo e obstinado por tecnologias e sistemas. Busca estar atualizado/a e adquirir constante conhecimento em sua área. Sugeri/implementa melhorias sistêmicas por meio da sua contribuição na elaboração de novos projetos, na busca da melhor experiência do usuário.
                <br/>
                <br/>
              <strong className='text-gray-900'>Funções:</strong> entre as funções executadas estão:
              Analisar requisitos de software e diagramá-los com UML;
              Programar software a partir de projeto e requisitos estabelecidos, utilizando linguagem de programação e tecnologia selecionadas;
              Utilizar ferramentas de versionamento para controle de mudanças no código e realizar testes de software;
              Instalar sistemas de banco de dados, construindo bases de dados e manipulando-as de acordo com as necessidades do sistema; 
              Planejar o desenvolvimento de software;
              Desenvolver algoritmos;
              Auxiliar na modelagem e manipulação de banco de dados;
              Auxiliar na administração de banco de dados;
              Desenvolver código orientado a objetos;
              Auxiliar na elaboração de projeto de sistema orientado a objeto;
              Desenvolver interface para melhor experiência do usuário;
              Desenvolver e organizar interface gráfica para aplicações desktop;
              Programar aplicativos computacionais com integração de banco de dados para desktop;
              Gerenciar a configuração e versionamento de Software;
              Executar testes e realizar melhorias em aplicativos computacionais;
              Desenvolver e organizar interface de usuário e elementos visuais para aplicações web. (front-end);
              Programar aplicativos computacionais com integração de banco de dados para web. (back-end).
            </span>
          </div>

          <div className="container mx-auto card w-4/5 flex flex-col items-center mt-28">
            <div className='w-20 h-20 bg-sky-200 flex items-center justify-center rounded-lg '>
              <ListChecks size={48} />
            </div>
              <h1 className="text-roxo-900 text-xl font-bold mt-6">Qualidade</h1>
              <span className="text-gray-600 text-start text-lg mt-6"><strong className='text-gray-900'>Mercado de Trabalho</strong>
                <br/>
                <br/>
              <strong className='text-gray-900'>Área de atuação:</strong> o técnico em desenvolvimento de sistemas atua em diferentes organizações, públicas ou privadas, de diversos portes atuando na programação de sistemas e/ou na manipulação de banco de dados.
                <br/>
                <br/>
              <strong className='text-gray-900'>Perfil profissional:</strong> após a conclusão do curso, o estudante terá perfil dinâmico, proativo e obstinado por tecnologias e sistemas. Busca estar atualizado/a e adquirir constante conhecimento em sua área. Sugeri/implementa melhorias sistêmicas por meio da sua contribuição na elaboração de novos projetos, na busca da melhor experiência do usuário.
                <br/>
                <br/>
              <strong className='text-gray-900'>Funções:</strong> entre as funções executadas estão:
              Analisar requisitos de software e diagramá-los com UML;
              Programar software a partir de projeto e requisitos estabelecidos, utilizando linguagem de programação e tecnologia selecionadas;
              Utilizar ferramentas de versionamento para controle de mudanças no código e realizar testes de software;
              Instalar sistemas de banco de dados, construindo bases de dados e manipulando-as de acordo com as necessidades do sistema; 
              Planejar o desenvolvimento de software;
              Desenvolver algoritmos;
              Auxiliar na modelagem e manipulação de banco de dados;
              Auxiliar na administração de banco de dados;
              Desenvolver código orientado a objetos;
              Auxiliar na elaboração de projeto de sistema orientado a objeto;
              Desenvolver interface para melhor experiência do usuário;
              Desenvolver e organizar interface gráfica para aplicações desktop;
              Programar aplicativos computacionais com integração de banco de dados para desktop;
              Gerenciar a configuração e versionamento de Software;
              Executar testes e realizar melhorias em aplicativos computacionais;
              Desenvolver e organizar interface de usuário e elementos visuais para aplicações web. (front-end);
              Programar aplicativos computacionais com integração de banco de dados para web. (back-end).
            </span>
          </div>

          <div className="container mx-auto card w-4/5 flex flex-col items-center mt-28">
            <div className='w-20 h-20 bg-sky-200 flex items-center justify-center rounded-lg '>
              <ChartLineUp size={32} />
            </div>
              <h1 className="text-roxo-900 text-xl font-bold mt-6">Administração</h1>
              <span className="text-gray-600 text-start text-lg mt-6"><strong className='text-gray-900'>Mercado de Trabalho</strong>
                <br/>
                <br/>
              <strong className='text-gray-900'>Área de atuação:</strong> o técnico em desenvolvimento de sistemas atua em diferentes organizações, públicas ou privadas, de diversos portes atuando na programação de sistemas e/ou na manipulação de banco de dados.
                <br/>
                <br/>
              <strong className='text-gray-900'>Perfil profissional:</strong> após a conclusão do curso, o estudante terá perfil dinâmico, proativo e obstinado por tecnologias e sistemas. Busca estar atualizado/a e adquirir constante conhecimento em sua área. Sugeri/implementa melhorias sistêmicas por meio da sua contribuição na elaboração de novos projetos, na busca da melhor experiência do usuário.
                <br/>
                <br/>
              <strong className='text-gray-900'>Funções:</strong> entre as funções executadas estão:
              Analisar requisitos de software e diagramá-los com UML;
              Programar software a partir de projeto e requisitos estabelecidos, utilizando linguagem de programação e tecnologia selecionadas;
              Utilizar ferramentas de versionamento para controle de mudanças no código e realizar testes de software;
              Instalar sistemas de banco de dados, construindo bases de dados e manipulando-as de acordo com as necessidades do sistema; 
              Planejar o desenvolvimento de software;
              Desenvolver algoritmos;
              Auxiliar na modelagem e manipulação de banco de dados;
              Auxiliar na administração de banco de dados;
              Desenvolver código orientado a objetos;
              Auxiliar na elaboração de projeto de sistema orientado a objeto;
              Desenvolver interface para melhor experiência do usuário;
              Desenvolver e organizar interface gráfica para aplicações desktop;
              Programar aplicativos computacionais com integração de banco de dados para desktop;
              Gerenciar a configuração e versionamento de Software;
              Executar testes e realizar melhorias em aplicativos computacionais;
              Desenvolver e organizar interface de usuário e elementos visuais para aplicações web. (front-end);
              Programar aplicativos computacionais com integração de banco de dados para web. (back-end).
            </span>
          </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}
