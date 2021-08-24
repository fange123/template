import React from 'react'
import styles from './index.less'

interface IProps {}

const LeftWrapper: React.FC<IProps> = props => {
  return (
    <div className={styles.left}>
      <p>left</p>
    </div>
  )
}

export default LeftWrapper
