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
      className={styles.card}
      style={{
        width: props.width || '800px',
        height: props.height
      }}
    >
      <div className={styles.header}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.tag}>{props.tag}</div>
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

        <button className="btn btn-primary btn-sm" onClick={props.handleClick}>
          阅读更多
        </button>
      </div>
    </div>
  )
}

export default index