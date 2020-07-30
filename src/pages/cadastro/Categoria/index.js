import React from 'react';
import PageDefault from '../../../components/PageDefault'
import InputField from './components/InputField';
import { Button } from './styles';
import './index.css';

const CadastrarCategoria = () => {
    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <form>
          <InputField {...{
            label: "Nome",
            type: "text",
            name: "nomeCategoria",
            required: true
          }} />

          <InputField as="textarea" {...{
            label: "Descrição",
            type: "text",
            name: "descricaoCategoria",
            required: true,
            style: { height: "20vh", borderTop: "solid 24px rgba(0,0,0,0.0)", paddingTop: "0" }
          }} />

          <InputField {...{
            label: "Cor",
            type: "color",
            name: "corCategoria",
            value: "#CFB53B",
            required: true
          }} />

          <InputField {...{
            label: "Código de Segurança",
            type: "text",
            name: "codeSec",
            required: true
          }} />

          <Button>Salvar</Button>
          <Button className="cleanButton">Limpar</Button>

        </form>

      </PageDefault>
    )
  }

export default CadastrarCategoria;