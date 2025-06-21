import styles from './usercard.module.css'

function Usercard(props) {
    console.log(props);
    
  return (
    <div>
        <section className='container'>
                <div className={styles.ota}>
                    <div className={styles.card}>
                        <img src="./a.png" alt="ads" />
                        <h2>{props.ismi}</h2>
                        <p>{props.ishi}</p>
                        <p>{props.joyi}</p>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Usercard