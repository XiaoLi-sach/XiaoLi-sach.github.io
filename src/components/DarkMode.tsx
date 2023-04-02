import styles from '@/styles/Layout.module.scss'
import Image from 'next/image'

function DarkMode() {
  const handleDarkMode = () => {
    const html = document.querySelector('html')

    console.log(html?.classList.contains('dark'))
    if (html?.classList.contains('dark')) {
      html?.classList.remove('dark')
      html?.classList.add('light')
    } else {
      html?.classList.add('dark')
      html?.classList.remove('light')
    }
  }
  return (
    <div className={styles.tag} onClick={handleDarkMode}>
      <Image src="/moon.svg" alt="" width={24} height={24} />
    </div>
  )
}

export default DarkMode
