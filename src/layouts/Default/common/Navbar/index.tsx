import { useRouter } from 'next/router'
import styles from '@/styles/Layout.module.scss'
import Image from 'next/image'
import config from '@/config'
import DarkMode from '@/components/DarkMode'

interface Props {
  onClick: () => void
}

function navbar(props: Props) {
  const router = useRouter()

  return (
    <div className={`${styles.navbar}`}>
      <div style={{ fontSize: '2.5rem' }} onClick={() => router.push('/')}>
        Home
      </div>
      <div className={styles.navbarCustom}>
        {config.navbarItem.map((item, index) => {
          return (
            <div key={index} className={styles.tag} onClick={() => router.push(item.link)}>
              {item.text}
            </div>
          )
        })}
        {config.darkMode && (
          <DarkMode />
          // <div className={styles.tag} onClick={() => props.onClick}>
          //   <Image src="/moon.svg" alt="" width={24} height={24} />
          // </div>
        )}
      </div>
      <div className={styles.navbarCustomMobile}>
        <div className={styles.tag}>
          <i>
            <svg
              style={{ width: '2.4rem', height: '2.4rem' }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </i>
        </div>
      </div>
    </div>
  )
}

export default navbar
