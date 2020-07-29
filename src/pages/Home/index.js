import React from 'react';
import BannerMain from '../../components/BannerMain'
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';



function App() {
  return (
    <div style={{ background: "#141414" }}>
      
      <PageDefault homepage>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={dadosIniciais.categorias[0].videos[0].description}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />      

        <Carousel
          category={dadosIniciais.categorias[3]}
        /> 
      
      </PageDefault>

    </div>
  );
}

export default App;
