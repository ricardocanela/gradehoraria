import React from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import TabelaLinha from './TabelaLinha'

import './global.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: 5,
      rows: [
        {hora: '8-10', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '10-12', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '12-14', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '14-16', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '16-18', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '-', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '-', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '-', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '-', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '-', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '-', seg: '', ter: '', qua: '', qui: '', sex: ''},
        {hora: '-', seg: '', ter: '', qua: '', qui: '', sex: ''},
      ]
    };
  }

  downloadImage() {
    var node = document.getElementById('tabela');

    document.getElementById('main').style['opacity'] = "1";

    domtoimage.toBlob(node)
    .then(function (blob) {
        saveAs(blob, 'gradehoraria.png');
    }).then(function () {
      document.getElementById('main').style['opacity'] = "0.9";
    })
  }

  addRow = () => {
    this.setState({
      numRows: this.state.numRows + 1
    });
  }

  removeRow = () => {
    this.setState({
      numRows: this.state.numRows - 1
    });
  }

  createTable = () => {
    let table = []

    this.state.rows.map((row) => {
      table.push(<TabelaLinha hora={row.hora} seg={row.seg} />)
    })

    return table.slice(0, this.state.numRows)
  }

  render(){
    return (
      <div id="app">
        <h2 id="title">Organize sua grade horária de forma rápida e intuitiva!</h2>
        <div id='tabela'>
          <main id="main">
            <table>
              <tbody>
                <tr>
                  <th>Grade Horária</th>
                  <th>Segunda</th>
                  <th>Terça</th>
                  <th>Quarta</th>
                  <th>Quinta</th>
                  <th>Sexta</th>
                  <th>Sábado</th>
                  <th>Domingo</th>
                </tr>
                {this.createTable()}
              </tbody>
            </table>
          </main>
        </div>
        <button id='botaoAdicionarLinha' onClick={this.addRow}>
          Adicinoar Linha +
        </button>
        <button id='botaoRemoverLinha' onClick={this.removeRow}>
          Remover Linha -
        </button>
        <button id='botaoBaixarImagem' onClick={this.downloadImage}>
          Baixar imagem
        </button>
      </div>
    );
  }
}

export default App;
