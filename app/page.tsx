import styles from './page.module.css'
import Card from './components/cardHome/card'
import CarouselUse from './components/Carousel/Carousel'

export default function Home() {

  return (
    <main >
      <div className={styles.main}>

        <Card />
      </div>
    </main>
  )
}
