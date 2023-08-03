import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = ['Python', 'Linux', 'Laravel', 'Cisco', 'Java', 'Cloud security', 'win Dev'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Heure deroulé',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label: 'heure restant',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: 'rgba(53, 162, 235, 1)',
          },
        ],
      };

    return(
      <TitleCard title={"Histogramme des heures par cours"}>
            <Bar options={options} data={data} />
      </TitleCard>

    )
}


export default BarChart