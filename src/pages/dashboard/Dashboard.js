import BarChart from '../../components/ui/barChart';
import PieChart from '../../components/ui/pieChart';
import Card from '../../components/ui/card/card';
import PageHeader from '../../components/sections/PageHeader';
import './dashboard.css';

const Dashboard = () => (
  <div className="dashboard">
    <div className="pie-holder">
      <Card>
        <PieChart />
      </Card>
      <Card>
        <PieChart />
      </Card>
      <Card>
        <PieChart />
      </Card>
    </div>
    <div className="bar-holder">
      <Card id = 'bar-card'>
        <BarChart />
      </Card>
    </div>
  </div>
)

export default Dashboard;
