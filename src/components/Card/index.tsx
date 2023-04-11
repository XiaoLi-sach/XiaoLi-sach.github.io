import styles from './card.module.scss'

interface Props {
  title: string
  tag: string
  content: string
  createTime?: string
  updateTime?: string
  width?: string
  height?: string
  handleClick?: () => void
}

function index(props: Props) {
  return (
    <div
      className={`${styles.card} bg-white prose dark:prose-invert dark:border-gray-700 dark:bg-slate-800`}
      style={{
        width: props.width || '800px',
        height: props.height
      }}
    >
      <div className={styles.header}>
        <div className={styles.title}>{props.title}</div>
        <div className={`${styles.tag} mt-1`}>{props.tag}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>{props.content}</div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <div className="post-create-time">
            <i className="icon icon-calendar"></i>
            {props.createTime}
          </div>
          <div className="post-update-time">
            <i className="icon icon-clock"></i>
            2021-08-01
          </div>
        </div>

        <button
          className={
            `${styles.btn}
            border-solid
            border-2
            border-black
            active:bg-blue-200
            dark:border-white
            `
          }
          onClick={props.handleClick}>
          阅读更多
        </button>
      </div>
    </div>
  )
}

export default index
