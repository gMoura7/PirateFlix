import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import InputField from './components/InputField';
import { Button } from './styles';
import './index.css';

const CadastrarCategoria = () => {
  const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#CFB53B',
        codeSec: ''
      }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value){
    setValues({
      ...values, 
      [key]: value
    })
  }
  
  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(e.target.name === "delCategoria"){
      setValues(valoresIniciais);
      return;
    }
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  return(
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handleSubmit} noValidate>
        <InputField onChange={handleChange} {...{
          label: "Nome",
          type: "text",
          name: "nome",
          value: values.nome,
          required: true,
          requiredMessage: "Nome é obrigatório"
        }} />

        <InputField onChange={handleChange} as="textarea" {...{
          label: "Descrição",
          type: "text",
          name: "descricao",
          value: values.descricao,
          required: true,
          requiredMessage: "Descrição é obrigatória",
          style: { height: "20vh", borderTop: "solid 24px rgba(0,0,0,0.0)", paddingTop: "0" }
        }} />

        <InputField onChange={handleChange} {...{
          label: "Cor da categoria",
          type: "color",
          name: "cor",
          value: values.cor,
          required: true
        }} />

        <InputField onChange={handleChange} {...{
          label: "Código de Segurança",
          type: "text",
          name: "codeSec",
          value: values.codeSec,
          required: true,
          requiredMessage: "O Código de Segurança é obrigatório"
        }} />

        <Button name="addCategoria">Salvar</Button>
        <Button name="delCategoria" onClick={handleSubmit} className="cleanButton">Limpar</Button>
      </form>
      <ul>
        {
          categorias.map((categoria, i) => {
            return (
              <li key={i}>{categoria.nome}</li>
            )
          })
        }
      </ul>

    </PageDefault>
  )
}

export default CadastrarCategoria;