import BarCharts from '@/components/MyCharts/BarCharts'
import { IConnectState } from '@/models/connect'
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'umi'
import { IHomeState } from '../../models/home'
import styles from './index.less'

type IProps = IHomeState

const GET_BAR_CHART_DATA = 'home/getBarChartData'

const CenterWrapper: React.FC<IProps> = props => {
  const { chartData } = props
  const dispatch = useDispatch()
  const data = [
    {
      name: '星期一',
      value: 20
    },
    {
      name: '星期二',
      value: 30
    },
    {
      name: '星期三',
      value: 70
    },
    {
      name: '星期四',
      value: 50
    }
  ]

  useEffect(() => {
    dispatch({
      type: GET_BAR_CHART_DATA
    })
  }, [])
  return (
    <div className={styles.center}>
      <BarCharts chartData={chartData || data} />
    </div>
  )
}

export default connect(({ home }: IConnectState) => ({
  ...home
}))(CenterWrapper)
