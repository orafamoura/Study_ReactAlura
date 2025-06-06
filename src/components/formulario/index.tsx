'use client';

import React from 'react';
import ButtonNormal from '../buttons';

const Formulario = () => {
  return (
    <form>
      <div>
        <label className='text-4xl font-bolder underline' htmlFor='tarefa'>
          Adicione um novo estudo
        </label>
        <input 
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder='O que você quer estudar'
          required
        />
      </div>
      <div>
        <label>
          Tempo
        </label>
        <input
          type='time'
          step='1'
          name='tempo'
          id='tempo'
          min='00:00:00'
          max='01:30:00'
          required
        />
      </div>
      <ButtonNormal />
    </form> 
  );
};

export default Formulario;
