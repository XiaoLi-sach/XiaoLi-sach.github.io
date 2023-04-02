import styles from './panel.module.scss'

function tagPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.title}>标签</div>
      <div className="tag-panel-content">
        <div className="tag-panel-item">javascript</div>
      </div>
    </div>
  )
}

export default tagPanel
