import Navbar from '@/layouts/Default/common/Navbar'
import styles from '@/styles/Layout.module.scss'

export default function layout({ children }: any) {
  const handleMoonClick = () => {
    console.log('hello world')
  }

  return (
    <div className={`bg-white dark:bg-black dark:bg-slate-800 prose max-w-full prose-slate dark:prose-invert ${styles.container}`}>
      <div className={styles.containerBody}>
        <Navbar onClick={handleMoonClick} />
        <main>{children}</main>

        <div className={styles.roundImage}></div>
      </div>
    </div>
  )
}
