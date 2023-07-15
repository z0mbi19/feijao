'use client'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import styles from './page.module.css'

export default function Progressbar(data: any) {
    return (
        <div className={styles.main} >
            <div className={styles.progrece}>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbarWithChildren value={data.data.peneira12} styles={buildStyles({
                        textColor: "red",
                        pathColor: "green",
                        trailColor: "gold"
                    })} >
                        <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                            <p><strong>{data.data.peneira12}%</strong> <br /> Peneira 12 </p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbarWithChildren value={data.data.peneira11} styles={buildStyles({
                        textColor: "red",
                        pathColor: "green",
                        trailColor: "gold"
                    })} >
                        <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                            <p><strong>{data.data.peneira11}%</strong> <br /> Peneira 11 </p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbarWithChildren value={data.data.peneira10} styles={buildStyles({
                        textColor: "red",
                        pathColor: "green",
                        trailColor: "gold"
                    })} >
                        <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                            <p><strong>{data.data.peneira10}%</strong> <br /> Peneira 10 </p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbarWithChildren value={data.data.peneira9} styles={buildStyles({
                        textColor: "red",
                        pathColor: "green",
                        trailColor: "gold"
                    })} >
                        <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                            <p><strong>{data.data.peneira9}%</strong> <br /> Peneira 9</p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbarWithChildren value={data.data.fundo} styles={buildStyles({
                        textColor: "red",
                        pathColor: "red",
                        trailColor: "gold"
                    })} >
                        <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                            Fundo <br /> <strong>{data.data.fundo}%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbarWithChildren value={data.data.umidade} styles={buildStyles({
                        textColor: "red",
                        pathColor: "cy",
                        trailColor: "gold"
                    })} >
                        <div style={{ fontSize: 12, marginLeft: -5, textAlign: 'center' }}>

                            Umidade <br /> <strong>{data.data.umidade}%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </div>
    )
}
