import Layout from "../components/layout"

import styles from '../styles/grid.module.css'

export default function Tienda() {

  return (
    <Layout
      title={'Tienda Virtual'}
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
    >
        <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <div className={styles.grid}>
             
            </div>
        </main>
    </Layout>
  )
}



