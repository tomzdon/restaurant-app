import Head from 'next/head'
import styles from '../styles/ContactAbout.module.css'
import HeadTag from '../Components/HeadTag'
import About from '../Components/About'

const about = () => {

    return (
        <>
            <HeadTag page='Contact'/>
            <div className={styles.contactFullDiv}>
                <About/>
            </div>
        </>
    )
}

export default about
