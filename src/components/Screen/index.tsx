import React from 'react'
import CenterWrapper from './components/CenterWrapper'
import LeftWrapper from './components/LeftWrapper'
import RightWrapper from './components/RightWrapper'
import styles from './index.less'
import '@/utils/flexible'

interface IProps {}

const Index:React.FC<IProps> = () => {
  return  <div className={styles.screen}>
      <LeftWrapper />
      <CenterWrapper />
      <RightWrapper />
    </div>
}

export default Index
