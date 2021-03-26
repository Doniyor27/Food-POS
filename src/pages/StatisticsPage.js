import TotalStatistics from '../components/total-statistics';
import OrderReport from '../components/OrderReport';
import MostOrdered from '../components/MostOrdered';
import Diagram from '../components/Diagram';

import './StatisticsPage.scss'

const StatisticsPage = function() {
  return (
    <div className="agrigator">
      <div className="left-side">
        <div className="left-side-header">
          <h2 className="title">Dashboard</h2>
          <p className="subtitle">Tuesday 2 Feb, 2021</p>
        </div>

        <div className="main">
          <TotalStatistics/>
          <OrderReport/>
        </div>
      </div>
      <div className="right-aside">
        <MostOrdered/>
        <Diagram/>
      </div>
    </div>
  )
}

export default StatisticsPage;