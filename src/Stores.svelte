<script>
  let storeArr = [];
  let hoursOpen = [];

  class StoreLoc {
    constructor(location, minHr, maxHr, avg) {
      this.location = location;
      this.minHr = minHr;
      this.maxHr = maxHr;
      this.avg = avg;
      this.salesArray = this.sales();
      storeArr.push(this);
    }

    ranNumCust() {
      let numCustomers = Math.floor(
        Math.random() * (this.maxHr - this.minHr + 1),
      );
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

    render() {
      // create table rows
      let rows = document.createElement('tr');
      table.appendChild(rows);
      let locRow = document.createElement('td');
      locRow.innerHTML = this.location;
      rows.appendChild(locRow);

      for (let i = 0; i < this.salesArray.length; i++) {
        let newData = document.createElement('td');
        newData.innerHTML = this.salesArray[i];
        rows.appendChild(newData);
      }
      let totalsRow = document.createElement('th');
      totalsRow.innerHTML = locTotals(this.sales());
      rows.appendChild(totalsRow);
    }
  }
</script>

<table>
  {#each storeArr as store}
    <tr>
      <td>{store.location}</td>
      {#each store.salesArray as sale}
        <td>{sale}</td>
      {/each}
      <th>{locTotals(store.salesArray)}</th>
    </tr>
  {/each}
</table>
