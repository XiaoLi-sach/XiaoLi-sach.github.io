import { useRouter } from 'next/router'
import styles from '@/styles/Layout.module.scss'
import Image from 'next/image'
import config from '@/config'
import DarkMode from '@/components/DarkMode'
import { useState } from 'react'

interface Props {
  onClick: () => void
}

function navbar(props: Props) {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  const handleOpenMobileList = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true)

    console.log(isMobile)
  }

  return (
    <div className={`${styles.navbar}`}>
      <div style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={() => router.push('/')}>
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
      <div className={styles.mobile}>
        <span className={`${styles.listIcon}`} onClick={handleOpenMobileList}>
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
        </span>

        {
          isMobile && (
            <div className='mobileCard'>
              <div className={styles.mobileCardHeader}>
                <div className={styles.mobileCardTitle}>
                  <span className={styles.mobileCardTitleText}>Menu</span>
                </div>
              </div>

              <div className={styles.mobileList}>
                {
                  config.navbarItem.map((item, index) => {
                    return (
                      <div key={index} className={styles.mobileTag} onClick={() => router.push(item.link)}>
                        {item.text}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default navbar
