// @ts-nocheck

let storeArr = [];
let hoursOpen = [];

export class StoreLoc {
  /**
   * @param {string} location
   * @param {number} minHr
   * @param {number} maxHr
   * @param {number} avg
   */
  constructor(location, minHr, maxHr, avg) {
    this.location = location;
    this.minHr = minHr;
    this.maxHr = maxHr;
    this.avg = avg;
    this.salesArray = this.sales();
    storeArr.push(this);
  }

  ranNumCust() {
    let numCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1));
    return numCustomers;
  }

  sales() {
    let salesArray = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlySales = Math.floor(this.avg * this.ranNumCust());
      salesArray.push(hourlySales);
    }
    return salesArray;
  }
}

new StoreLoc('Seattle', 23, 65, 6.3);
new StoreLoc('Tokyo', 3, 24, 1.2);
new StoreLoc('Dubai', 11, 38, 3.7);
new StoreLoc('Paris', 20, 38, 2.3);
new StoreLoc('Lima', 2, 16, 4.6);