import React, { useState, useEffect } from 'react';

import PageDefault from '../../../components/PageDefault';
import InputField from './components/InputField';

import { Button, Spinner, SpinnerWrapper } from './styles';
import './index.css';
import Table from './components/Table';
import useForm from '../../../hooks/useForm';

const CadastrarCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#CFB53B',
    codeSec: '',
    submitMethod: 'POST',
  };

  const [categorias, setCategorias] = useState([]);
  const {
    handleChange, editExistingData, clearForm, values,
  } = useForm(valoresIniciais);

  function refreshCategorias() {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8081/categorias'
      : 'https://pirateflix-backend.herokuapp.com/categorias';
    fetch(URL).then(async (response) => {
      const res = await response.json();
      return res;
    }).then((jsonResponse) => {
      setCategorias([
        ...jsonResponse,
      ]);
    });
  }

  // Table setup

  function handleAction(actionType, data) {
    if (actionType === 'delete') {
      const URL = window.location.hostname.includes('localhost')
        ? `http://localhost:8081/categorias/${data.id}`
        : `https://pirateflix-backend.herokuapp.com/categorias/${data.id}`;

      fetch(URL, {
        method: 'DELETE',
      }).then(async (response) => {
        const resCode = await response.status;
        if (resCode === 200) refreshCategorias();
      });
    }
    if (actionType === 'edit') {
      const editableValues = {
        id: data.id,
        nome: data.nome || '',
        descricao: data.descricao || '',
        cor: data.cor,
        submitMethod: 'PUT',
      };
      editExistingData(editableValues);
    }
    if (actionType === 'add') {
      let URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8081/categorias'
        : 'https://pirateflix-backend.herokuapp.com/categorias';

      URL = data.submitMethod === 'PUT' ? `${URL}/${data.id}` : URL;

      const newValues = {
        nome: data.nome,
        descricao: data.descricao,
        cor: data.cor,
      };

      fetch(URL, {
        method: data.submitMethod,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newValues),
      }).then(async (response) => {
        const res = await response.status;
        if (res === (data.submitMethod === 'PUT' ? 200 : 201)) {
          refreshCategorias();
        }
      });
    }
  }

  const columns = [
    {
      id: 1,
      name: 'Nome',
      selector: 'nome',
      className: 'mediumCell',
    },
    {
      id: 2,
      name: 'Descrição',
      selector: 'descricao',
      className: 'largeCell',
    },
    {
      id: 3,
      name: 'Editar',
      selector: 'edit',
      className: 'smallCell',
    },
    {
      id: 4,
      name: 'Remover',
      selector: 'delete',
      className: 'smallCell',
    },
  ];

  const actions = [
    {
      id: 1,
      content: 'Editar',
      handle: handleAction,
      type: 'edit',
    },
    {
      id: 2,
      content: 'Remover',
      handle: handleAction,
      type: 'delete',
    },
  ];

  // Back to page setup

  function formValidation(state) {
    const invalids = Object.keys(state).filter((key) => state[key] === '');

    return (invalids.length === 0);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.name === 'delCategoria') {
      clearForm(valoresIniciais);
      return;
    }

    const ValidForm = formValidation(values);

    if (!ValidForm) {
      return;
    }

    handleAction('add', values);
    clearForm(valoresIniciais); // Reset state
  }

  useEffect(refreshCategorias, [
    values,
  ]);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handleSubmit} noValidate>
        <InputField
          inputProps={{
            onChange: handleChange,
            type: 'text',
            name: 'nome',
            value: values.nome,
            required: true,
          }}
          labelProps={{
            label: 'Nome',
            requiredMessage: 'Nome é obrigatório',
          }}
        />

        <InputField
          inputProps={{
            onChange: handleChange,
            as: 'textarea',
            type: 'text',
            name: 'descricao',
            value: values.descricao,
            required: true,
            style: { height: '20vh', borderTop: 'solid 24px rgba(0,0,0,0.0)', paddingTop: '0' },
          }}
          labelProps={{
            label: 'Descrição',
            requiredMessage: 'Descrição é obrigatória',
          }}
        />

        <InputField
          inputProps={{
            onChange: handleChange,
            type: 'color',
            name: 'cor',
            value: values.cor,
          }}
          labelProps={{
            label: 'Cor da categoria',
          }}
        />

        <InputField
          inputProps={{
            onChange: handleChange,
            type: 'text',
            name: 'codeSec',
            value: values.codeSec,
            required: true,
          }}
          labelProps={{
            label: 'Código de Segurança',
            requiredMessage: 'O Código de Segurança é obrigatório',
          }}
        />

        <Button name="addCategoria">Salvar</Button>
        <Button name="delCategoria" onClick={handleSubmit} className="cleanButton">Limpar</Button>
      </form>

      {categorias.length === 0 ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )
        : (
          <Table
            columns={columns}
            data={categorias}
            actions={actions}
          />
        )}
      <br />
    </PageDefault>
  );
};

export default CadastrarCategoria;
