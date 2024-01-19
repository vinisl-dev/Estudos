import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import axios from "axios";

const Container = styled.div`
  width:100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h2``;

function App() {
// cria os estado / *variaveis para armazenar os usuarios da api
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => { // faz a chamada a api
    try{
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b)=> (a.nome > b.nome ? 1 : -1)));
    } catch (error){
      toast.error(error);
    };
  };
  //efetua o carregamento dos usuario e monitora alterações no estado setUsers para recarregamento
  useEffect(()=>{
    getUsers();

  },[setUsers]);





  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        #passa as funções e estados como props para o componete form e para o Grid
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} /> 
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
    </>
  );
}

export default App;
