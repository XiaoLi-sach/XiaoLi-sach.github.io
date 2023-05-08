import styles from './drawer.module.scss'
import { Props } from './Props'

const drawer = (props: Props) => {

  const handleClose = () => {

  }

  return (
    <div className={styles.container}>
      <div className='drawer__header'>
        <div className='drawer__header__title'>
          {props.title}
        </div>
        <div className='drawer__header__close' onClick={handleClose}>
          x
        </div>
      </div>
      <div className='drawer__content'>
        {props.children}
      </div>
    </div>
  )
}

export default drawer
