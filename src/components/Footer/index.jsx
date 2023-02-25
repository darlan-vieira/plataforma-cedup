import { FacebookLogo, InstagramLogo } from 'phosphor-react'
import React from 'react'

export const Footer = () => {
  return (
    <section>
      <footer>
        <div>
          <h3>CEDUP</h3>
          <a href="">www.cedupguaramirim.com.br</a>
        </div>
        <div>
          <FacebookLogo size={32} />
          <InstagramLogo size={32} />
        </div>
        <div>
          <span>2022 todos os direitos reservados</span>
        </div>
      </footer>
    </section>
  )
}
