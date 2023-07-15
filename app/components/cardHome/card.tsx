import Image from "next/image";
import Link from "next/link";
import styles from './card.module.css'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../../firebase";

const firestore = getFirestore(app);

export default async function Card() {
    const snapshot = await getDocs(collection(firestore, "feijao"))
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        tipo: doc.data().tipo,
        seed: doc.data().seed,
        peneira12: doc.data().peneira12,
        umidade: doc.data().umidade,
        image: doc.data().image,
    }));

    return (
        <>
            {
                data.map((item, i) => (
                    <>
                        <Link key={item.id} style={{ textDecoration: 'none', color: 'black' }} href={`/feijao/${item.id}`} className={styles.card} >
                            <Image width="250" height="200" className={styles.imageCards} src={item.image[0]} alt='Feijão' />
                            <h3>{item.tipo} {item.seed}</h3>
                            <p>Umidade: {item.umidade}</p>
                            <p>Peneira 12: {item.peneira12}</p>
                        </Link>
                    </>

                ))
            }
        </>

    )
}
