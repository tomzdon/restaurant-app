import Head from 'next/head'
import Contact from '../Components/Contact'
import styles from '../styles/ContactAbout.module.css'
import HeadTag from '../Components/HeadTag'

const contact = ({ currentTheme }) => {

    return (
        <>
            <HeadTag page='About'/>
            <div className={styles.contactFullDiv}>
                <Contact currentTheme={currentTheme} />
            </div>
        </>
    )
}

export default contact
