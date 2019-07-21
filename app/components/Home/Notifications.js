/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import getCurrentWeek from '../../utils/helper/GetCurrentWeek';
import NotificationBox from '../NotificationBox';
import EmptyNotifications from './EmptyNotifications';

// Fake Data
import NotificationsData from '../../faker/Notifications';

import styles from '../../containers/Home/styles.css';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line new-cap
    const days = new getCurrentWeek();
    this.state = {
      weekDays: days.days,
      selectedDay: days.currentDay,
    };
  }

  // componentDidMount() {

  //   this.setState({
  //     weekDays: days.days,
  //     currentDay: days.currentDay,
  //     selectedDay: '',
  //   });
  // }

  changeDayHandler(day) {
    this.setState({
      selectedDay: day,
    });
  }

  render() {
    const { weekDays, selectedDay } = this.state;
    let { data } = this.props;
    if (data === undefined) {
      data = [];
    }
    return (
      <div className={styles.news}>
        <div className={styles.date}>
          <ul className={styles.days}>
            {weekDays.map(d => (
              <li>{d[0]}</li>
            ))}
          </ul>
          <ul className={styles.numbers}>
            {weekDays.map(d => (
              <li
                className={d[1] === selectedDay ? styles.active : ''}
                onClick={this.changeDayHandler.bind(this, d[1])}
                onKeyPress={this.changeDayHandler.bind(this, d[1])}
              >
                {d[1]}
              </li>
            ))}
            {/* <li className={styles.active}>
              <a>3</a>
            </li> */}
          </ul>
        </div>
        <div className={styles.dateInfBox}>
          {data.length !== 0 ? (
            data.map(n => <NotificationBox key={n.id} data={n} />)
          ) : (
            <EmptyNotifications />
          )}
        </div>
      </div>
    );
  }
}

Notifications.defaultProps = {
  data: [],
};

export default Notifications;
