import Header from "./Components/Header"
import Card from "./Components/Card"
import Banner from "./Components/Banner"
import Form from "./Components/form"

import "./app.css"
function App() {

  return (
    <>
      <Header/>
      <Banner
      titulo="BEM VINDO!!!"
      subTitulo="COSSEC usados"/>
      <Card/>
     <Form/>
    </>
  )
}

export default App
