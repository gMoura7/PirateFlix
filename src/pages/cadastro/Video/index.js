import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import PageDefault from '../../../components/PageDefault';

function CadastrarVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastrarVideo;
