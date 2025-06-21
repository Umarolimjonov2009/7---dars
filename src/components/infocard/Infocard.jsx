import styles from './infocard.module.css'

function Infocard(props) {
    console.log(props);
    
  return (
    <div>
        <section className='container'>
              <div className={styles.info}>
                <div className={styles.infoCard}>
                  <img src="./b.png" alt="zxc" />
                  <h4>{props.yozuvi}</h4>
                  <p>{props.yozuvi2}</p>
                  <button>Read Now</button>
                </div>
                
              </div>
            </section>
    </div>
  )
}

export default Infocard