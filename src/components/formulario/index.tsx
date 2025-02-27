import React from 'react';
import ButtonNormal from '../buttons';

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form>
        <div>
          <label htmlFor='tarefa'>
            Adicione um novo estudo
          </label>
          <input 
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder='O que vocÊ quer estudar'
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
    )
  }
}


export default Formulario;