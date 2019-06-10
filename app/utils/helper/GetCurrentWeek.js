import moment from 'moment';

class GetCurrentWeek {
  constructor() {
    this.startOfWeek = moment().startOf('isoWeek');
    this.endOfWeek = moment().endOf('isoWeek');
    this.currentDay = moment().format('D');
    this.days = [];
    this.day = this.startOfWeek;
    this.get();
  }

  get() {
    while (this.day <= this.endOfWeek) {
      this.days.push([this.day.format('dddd'), this.day.format('D')]);
      this.day = this.day.clone().add(1, 'd');
    }

    return this.days;
  }
}

export default GetCurrentWeek;
