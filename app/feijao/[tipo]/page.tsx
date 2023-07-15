import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import app from "../../../firebase";
import CarouselUse from "@/app/components/Carousel/Carousel";
import styles from './page.module.css'
import Progressbar from "@/app/components/progressbar/Progressbar";

const firestore = getFirestore(app);

export default async function page({ params }: { params: { tipo: any } }) {
  const snapshot = await getDocs(collection(firestore, "feijao"))
  const find = snapshot.docs.findIndex(x => x.id === params.tipo)
  const data = snapshot.docs[find].data()

  return (
    <div style={{ textAlign: 'center' }} >
      <h3>{data.tipo} {data.seed}</h3>
      <div className={styles.main} >
        <Progressbar data={data} />

      </div>
      <CarouselUse images={data.image} />
      <p>Descrição: {data.description}</p>
      <p>Quantidade: {data.quantidade}</p>
      <p>Corretor: {data.corretor}</p>
      <p>Telefone: {data.telefone}</p>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <a href={`https://api.whatsapp.com/send?phone=+55${data.telefone}&text=Olá estou interessado na amostra ${data.number}`} className="float" target="_blank">
        <button style={{ backgroundColor: '#39b54a', borderRadius: '100px', color: 'white' }} ><i className="fa fa-whatsapp" style={{ fontSize: '48px', color: "white" }}></i></button>
      </a>
    </div>
  )
}
