import React, { Component } from 'react';
import styled from 'styled-components';
import './style.css';
const Container = styled.div`
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Result = styled.h2`
  color: #900c3f;
  font-size: 7vh;
`;
const Button = styled.button`
  width: 10vw;
  height: 6vh;
  font-size: 5vh;
  border: none;
  margin-left: 3vw;
`;
const DivInput = styled.div`
  width: 55vw;
  height: 20vh;
  text-align: center;
  font-size: 5vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const DivButton = styled.div`
  height: 15vh;
  text-align: center;
  font-size: 5vw;
  display: flex;
`;
const DivClear = styled.div`
  height: 15vh;
  text-align: center;
  font-size: 5vw;
  display: flex;
`;
const Clear = styled.div`
  height: 5vh;
  padding: 1rem;
  text-align: center;
  font-size: 4vh;
  color: #ffbf00;
  border-radius: 20px;
`;
const Input = styled.input`
  height: 5vh;
  width: 20vw;
  text-align: center;
  font-size: 1.5vw;
  background-color: #ff7f50;
  border: none;
`;
const Paragraph = styled.p`
  width: 5vw;`
const Title = styled.h1`
  margin-top: 4vh;
  font-size: 5vw;
`;
export default class Calc extends Component {
  state = {
    n1: null,
    n2: null,
    resultado: 0,
    operador: null
  };

  limpar = () => {
    this.setState({
      n1: '',
      n2: '',
      resultado: '',
      operador: ''
    });
  };

  adicionar = () => {
    this.setState({
      resultado: this.state.n1 + this.state.n2,
      operador: '+'
    });
  };

  multiplicar = () => {
    this.setState({
      resultado: this.state.n1 * this.state.n2,
      operador: '*'
    });
  };

  subtrair = () => {
    this.setState({
      resultado: this.state.n1 - this.state.n2,
      operador: '-'
    });
  };

  dividir = () => {
    this.setState({
      resultado: this.state.n1 / this.state.n2,
      operador: '/'
    });
  };

  input2 = event => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  input1 = event => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  render() {
    const { limpar, adicionar, subtrair } = this;
    return (
      <Container>
        <Title>Calculadora</Title>
        <Result>{this.state.resultado}</Result>
        <DivInput>
          <Input
            placeholder="Value"
            value={this.state.n1}
            onChange={this.input1}
          />
          <Paragraph>{this.state.operador}</Paragraph>
          <Input
            placeholder="Value"
            value={this.state.n2}
            onChange={this.input2}
          />
        </DivInput>
        <DivButton>
          <Button onClick={adicionar}>+</Button>
          <Button onClick={subtrair}>-</Button>
          <Button onClick={this.multiplicar}>*</Button>
          <Button onClick={this.dividir}>/</Button>
        </DivButton>
        <DivClear>
          <Clear onClick={limpar}>limpar</Clear>
        </DivClear>
      </Container>
    );
  }
}
