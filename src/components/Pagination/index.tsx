import { IPost } from '@/types/post'
import styles from './pagination.module.scss'
import { useImperativeHandle, useState } from 'react'

interface Props {
  total: number // 总数
  page_size: number // 每页显示的数量
  current: number // 当前页
  sizeChange?: (size: number) => void
  prevClick?: () => void
  nextClick?: () => void
}
function Pagination(props: Props) {

  const handleSizeChange = (size: number) => {
    props.sizeChange && props.sizeChange(size)
  }

  return (
    <div className={`${styles.pagination}`}>
      <div className={styles.paginationItem}>
        <span className={styles.paginationItemText} onClick={props.prevClick}>上一页</span>
      </div>
      {
        Array.from({ length: props.total }).map((_, index) => {
          return (
            <div className={styles.paginationItem} key={index} onClick={() => handleSizeChange(index + 1)}>
              <span className={`${styles.paginationItemText} text-black dark:text-white`}>{index + 1}</span>
            </div>
          )
        })
      }
      <div className={styles.paginationItem}>
        <span className={styles.paginationItemText} onClick={props.nextClick}>下一页</span>
      </div>
    </div>
  )
}

export default Pagination
