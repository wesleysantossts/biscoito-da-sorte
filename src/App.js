import React, { Component } from 'react';
import biscoito from './assets/biscoito.png';
import './styles/main.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.trocarFrase = this.trocarFrase.bind(this)
    
    this.frases = ['A melhor rede social ainda é uma mesa rodeada de amigos.', 'Nunca fiz amigos bebendo leite.', 'Tudo o que existe de bom nessa vida eu aprendi tomando cerveja.', 'Minha vida é um litro aberto.', 'Agradeça se você bebe mais cerveja do que remédio.', 'Muitas discussões seriam evitadas com a frase: gente, tem cerveja na geladeira!', 'Eu segui o meu coração e ele me mandou para o bar.', 'Vim, vi e bebi!']

  };

  trocarFrase(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';

    this.setState(state)
  };

  render(){
    return(
      // className - é o atributo "Class" do HTML, só que no React deve se chamar dessa forma
      <div className="container">
        {/* img - para importar as imagens devo usar o "import" no React, caso contrário não funcionará */}
        <img src={biscoito} alt='biscoito da sorte' className='img'/>
        <Botao nome="Abrir biscoito" acaoBtn={this.trocarFrase}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    )
  }
};

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn} className='botao'>{this.props.nome}</button>
      </div>
    )
  }
};

export default App;