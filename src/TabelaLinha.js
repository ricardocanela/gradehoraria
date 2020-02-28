import React from 'react';

class TabelaLinha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seg: 'seg'
        }
    }

    changeSeg = (e) => {
        this.setState({
            seg: document.getElementById("seg").textContent 
        },
        () => {
            this.refs.div.selectionStart = this.refs.div.selectionEnd = 0
        });
    }


    render() {

        return (
            <tr>
                  <td ><label contentEditable="true">{this.props.hora}</label></td>
                  <td >
                  <div id="seg"
                    contentEditable='true'
                    onInput={this.changeSeg} >
                    {this.state.seg}
                    </div>
                  </td>
                  <td ><label contentEditable="true"/></td>
                  <td ><label contentEditable="true"/></td>
                  <td ><label contentEditable="true"/></td>
                  <td ><label contentEditable="true"/></td>
                  <td ><label contentEditable="true"/></td>
                  <td ><label contentEditable="true"/></td>
            </tr>
        );
    }
}

export default TabelaLinha