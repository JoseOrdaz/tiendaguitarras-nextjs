import Layout from "../components/layout"
import styles from '../styles/grid.module.css'

export default function Blog({posts}) {
  return (
    <Layout
      title={'Blog'}
      description="Blog de música, venta de guitarras, consejos, GuitarLA"
    >
        <main className="contenedor">
            <h1 className="heading">Blog</h1>
            <div className={styles.grid}>
              
            </div>
        </main>
    </Layout>
  )
}

