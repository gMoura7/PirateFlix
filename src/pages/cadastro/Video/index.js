import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import PageDefault from '../../../components/PageDefault';
import InputField from '../Categoria/components/InputField';
import useForm from '../../../hooks/useForm';
import videosRepositories from '../../../repositories/videos';
import categoriasRepositories from '../../../repositories/categorias';
import Button from './styles';

function CadastrarVideo() {
  const initialValues = {
    title: '',
    description: '',
    videoUrl: '',
    imageUrl: '',
    category: '',
    codeSec: '',
  };

  const {
    handleChange, clearForm, values,
  } = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);
  const categoryNames = categorias.map(({ nome }) => nome);
  const history = useHistory();

  useEffect(() => {
    categoriasRepositories
      .getAllWithVideos()
      .then((categories) => {
        setCategorias([...categories]);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const categoriaEscolhida = categorias.find((categoria) => categoria.nome === values.category);

    if (e.target.getAttribute('name') === 'delVideo') {
      clearForm();
      return;
    }
    videosRepositories.create({
      titulo: values.title,
      url: values.videoUrl,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        history.push('/');
      });
  }

  return (
    <PageDefault newCategoryBtn>
      <h1>Cadastro de Video</h1>
      <form onSubmit={handleSubmit} noValidate>
        <InputField
          inputProps={{
            onChange: handleChange,
            type: 'text',
            name: 'title',
            value: values.title,
            required: true,
          }}
          labelProps={{
            label: 'Titulo do video',
            requiredMessage: 'O titulo do video é necessário!',
          }}
        />
        <InputField
          inputProps={{
            onChange: handleChange,
            type: 'text',
            name: 'description',
            value: values.description,
            required: true,
          }}
          labelProps={{
            label: 'Descrição do video',
            requiredMessage: 'A descrição do video é necessária!',
          }}
        />
        <InputField
          inputProps={{
            onChange: handleChange,
            type: 'text',
            name: 'videoUrl',
            value: values.videoUrl,
            required: true,
          }}
          labelProps={{
            label: 'URL do video',
            requiredMessage: 'A URL do video é necessária!',
          }}
        />
        <InputField
          inputProps={{
            onChange: handleChange,
            type: 'text',
            name: 'imageUrl',
            value: values.imageUrl,
            required: true,
          }}
          labelProps={{
            label: 'URL da imagem do video',
            requiredMessage: 'A URL da imagem do video é necessária!',
          }}
        />

        <InputField
          inputProps={{
            onChange: handleChange,
            type: 'text',
            name: 'category',
            value: values.category || '',
            required: true,
            list: 'categories-options',
            suggestions: categoryNames,
            autoComplete: 'off',
          }}
          labelProps={{
            label: 'Categoria do video',
            requiredMessage: 'A categoria do video é necessária!',
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
            requiredMessage: 'O Código de Segurança é necessário!',
          }}
        />
        <Button name="addVideo">Salvar</Button>
        <Button name="delVideo" onClick={handleSubmit} className="cleanButton">Limpar</Button>
      </form>
    </PageDefault>
  );
}

export default CadastrarVideo;
