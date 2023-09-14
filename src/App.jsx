import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import { useState } from "react";
import MyBoundary from "./components/MyBoundary";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <MyBoundary>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </MyBoundary>
      
    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

      {/* <Formulario /> */}
    </>
  )
}

export default App
