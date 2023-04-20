import styles from './panel.module.scss'

interface Props {
  tags: string[]
}

function TagPanel(props: Props) {
  return (
    <div className={styles.panel}>
      <div className={styles.title}>标签</div>
      <div className="tag-panel-content">
        <div className="tag-panel-item">
          {props.tags.map((tag) => {
            return (
              <div className="tag-item">
                <div className="tag-item-name">{tag}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TagPanel
