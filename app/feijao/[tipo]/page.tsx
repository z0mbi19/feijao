"use client"
import Image from "next/image";
import styles from './page.module.css'
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

export default function page({ params }: { params: { tipo: string } }) {
  const percentage = 95;
  return (
    <div>
      <div className={styles.main} >
        <Image width="250" height="200" className={styles.imageCards} src={'/feijao.jpg'} alt='Feijão' />
        <div className={styles.progrece}>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
              textColor: "red",
              pathColor: "green",
              trailColor: "gold"
            })} >
              <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                <p><strong>95%</strong> <br /> Peneira 12 </p>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
              textColor: "red",
              pathColor: "green",
              trailColor: "gold"
            })} >
              <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                <p><strong>95%</strong> <br /> Peneira 11 </p>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
              textColor: "red",
              pathColor: "green",
              trailColor: "gold"
            })} >
              <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                <p><strong>95%</strong> <br /> Peneira 10 </p>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
              textColor: "red",
              pathColor: "green",
              trailColor: "gold"
            })} >
              <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                <p><strong>95%</strong> <br /> Peneira 9</p>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbarWithChildren value={1} styles={buildStyles({
              textColor: "red",
              pathColor: "red",
              trailColor: "gold"
            })} >
              <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                Fundo <br /> <strong>1%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbarWithChildren value={15} styles={buildStyles({
              textColor: "red",
              pathColor: "cy",
              trailColor: "gold"
            })} >
              <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                Umidade <br /> <strong>15.5%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  )
}
