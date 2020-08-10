import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
// import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import { SpinnerWrapper, Spinner } from '../cadastro/Categoria/styles';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  });
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriesWithVdeos) => {
        setDadosIniciais(categoriesWithVdeos);
      });
  }, []);
  return (
    <div style={{ background: '#141414' }}>
      <PageDefault homepage>

        {dadosIniciais.length === 0
        && (
          <>
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          </>
        )}
        {dadosIniciais.length >= 1
        && dadosIniciais.map((categoria, index) => {
          if (index === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  videoDescription="Vídeo gameplay do jogo Sea of Thieves, disponível para PC (Windows 10) e Xbox One."
                  url={dadosIniciais[0].videos[0].url}
                />
                <Carousel
                  ignoreFirstVideo
                  category={categoria}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

      </PageDefault>

    </div>
  );
}

export default App;
