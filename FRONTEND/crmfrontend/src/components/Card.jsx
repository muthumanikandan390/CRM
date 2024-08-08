
import styles from './Card.module.css'; // Import the CSS module
import ChildCard from './ChildCard';
import CustomLineChart from './LineChart';
import Example from './PieChart';

import {useQuery} from '@tanstack/react-query'

import axios from 'axios';



function Card() {





  const {data , error} = useQuery({queryKey :['randomFacts'],
                                   queryFn: async() => {
                                    const res = await axios.get('http://127.0.0.1:8000/crmapp/');
                                    return res.data;
                                  } });
  console.log(error)
  console.log(data)
  if (data) {
    console.log('First portfolio balance:', data[0]?.portfolio_balance);
  }





  return (
    <div id="root">
      <div className={styles.container}>


        <div className={styles.row}>
          <div className={`${styles.dashboardInfo} ${styles.colLg3} ${styles.colMd6}`}>
            <div className={styles.wrap}>
              <h4 className={`${styles.heading} ${styles.title}`}>
                Portfolio Balance
                <svg className={styles.icon} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
              </h4>
              <span className={styles.count}>€10,500</span>
            </div>
          </div>
          <div className={`${styles.dashboardInfo} ${styles.colLg3} ${styles.colMd6}`}>
            <div className={styles.wrap}>
              <h4 className={`${styles.heading} ${styles.title}`}>
                Rental income
                <svg className={styles.icon} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
              </h4>
              <span className={styles.count}>€500</span>

            </div>
          </div>
        </div>
      </div>
      <ChildCard><CustomLineChart /></ChildCard>
      <ChildCard><Example /></ChildCard>

    </div>

  );
}

export default Card;
