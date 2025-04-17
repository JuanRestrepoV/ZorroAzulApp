import { useState, useEffect } from 'react'
import Layout from "../../Components/Navbar/Layout";
import Card from '../../Components/Card'

function Home() {
  //items sera el contenedor de toda la info de la API
  //setItems seteara (tomara y guardara) esa informacion en la caja
  const [items, setItems] = useState(null)

  useEffect(() => {
    //Utilizamos fetch para solicitar info a la API
    fetch('https://api.escuelajs.co/api/v1/products')
    //convertimos la respuesta en formato json
      .then(response => response.json())
    //guardamos la data (objeto iterable) en formato json en setItems
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
      {
        //hay items? si sí, por cada elemento que tengas en tu array
        //vas a mostrarme una card
        items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      }
    </Layout>
  );
}

export default Home;
