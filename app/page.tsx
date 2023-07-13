import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const data = [
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
    {
      tipo: "Carioca",
      umidade: '14',
      peneira: "90%"
    },
  ]
  return (
    <main >      
      <div className={styles.main}>
        {data.map((item, i) => (
          <Link href={`/feijao/${item.tipo}`} key={i} className={styles.card} >
            <Image width="250" height="200" className={styles.imageCards} src={'/feijao.jpg'} alt='Feijão' />
            <h3>{item.tipo}</h3>
            <p>Umidade: {item.umidade}</p>
            <p>Peneira 12: {item.peneira}</p>
          </Link>
        ) )}
      </div>
    </main>
  )
}
