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
        codeSec: '',
        categoriaEnviada: false
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

  function formValidation(state){
    const invalids = Object.keys(state).filter((key) => {
      return state[key] === "";
    });
    
    return (invalids.length === 0 ? true : false);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(e.target.name === "delCategoria"){
      setValues(valoresIniciais);
      return;
    }
    const ValidForm = formValidation(values);
    setValues({...values, categoriaEnviada: true});

    if (! ValidForm){
      return false;
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
          requiredMessage: "Nome é obrigatório",
          submitted: values.categoriaEnviada
        }} />

        <InputField onChange={handleChange} as="textarea" {...{
          label: "Descrição",
          type: "text",
          name: "descricao",
          value: values.descricao,
          required: true,
          requiredMessage: "Descrição é obrigatória",
          submitted: values.categoriaEnviada,
          style: { height: "20vh", borderTop: "solid 24px rgba(0,0,0,0.0)", paddingTop: "0" }
        }} />

        <InputField onChange={handleChange} {...{
          label: "Cor da categoria",
          type: "color",
          name: "cor",
          value: values.cor
        }} />

        <InputField onChange={handleChange} {...{
          label: "Código de Segurança",
          type: "text",
          name: "codeSec",
          value: values.codeSec,
          required: true,
          requiredMessage: "O Código de Segurança é obrigatório",
          submitted: values.categoriaEnviada
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