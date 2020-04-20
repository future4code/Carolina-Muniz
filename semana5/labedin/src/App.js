import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Carolina da S. e Souza Muniz" 
          descricao="Sou casada e tenho 1 filha de 5 anos chamada Catarina.
          Tenho 36 anos, sou natural de Manaus-AM, e moro em São Paulo-SP desde Abril de 2016.
          Estou me preparando para atuar como Desenvolvedor Web Full Stack.
          Meus hobbies são atividades que exijam trabalhos manuais, como costura, crochê, jardinagem...
          Minhas principais características são: curiosa, responsável, dedicada, íntegra, organizada e flexível.
          "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Autônomo" 
          descricao="Me dediquei a projetos pessoais e empreendedorismo. Realizei cursos e prestei serviços nas áreas de estética, confecção e artesanato.
          Esse período foi essencial para o desenvolvimento da minha família e reflexão sobre a minha carreira.
          Estou em transição buscando recolocação na área de Tecnologia da Informação (Desenvolvedor Web Full Stack).
          Me sinto pronta e focada para retornar ao mercado e aplicar as soft skills adquiridas e aperfeiçoadas, tais como: organização de tarefas, empatia e planejamento.
          " 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Assistente Administrativo" 
          descricao="Gestão de Departamento Pessoal: Folha de pagamento, Gestão de benefícios, Controle de ponto eletrônico, Férias;
          Recrutamento e Seleção: Condução de entrevistas, Aplicação de teste, Divulgação de vagas;
          Treinamentos (On Boarding) de novos colaboradores;
          " 
        />
      </div>

      <div className="page-section-container">
      <h2>Contato</h2>
      <CardPequeno 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          email="carolmuniz@carolmuniz.com.br"
          endereco="Rua A, 111 - São Paulo" 
          />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

         
    </div>
  );
}

export default App;
