<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import "carbon-components-svelte/css/g10.css";
  import { DataTable, TextInput, Button } from "carbon-components-svelte";

  let storeArr = [];
  let hoursOpen = [
    "6 am",
    "7 am",
    "8 am",
    "9am",
    "10 am ",
    "11 am",
    "12 am",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
    "7 pm",
    "8 pm",
  ];

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
        Math.random() * (this.maxHr - this.minHr + 1)
      );
      return numCustomers;
    }

    sales() {
      let salesArray = [];

      for (let i = 0; i < hoursOpen.length; i++) {
        let hourlySales = Math.floor(this.avg * this.ranNumCust());
        salesArray.push(hourlySales);
      }
      console.log(salesArray);
      return salesArray;
    }
  }

  function handleChange(e) {
    e.preventDefault();
    let location = e.target.elements.location.value;
    let minHr = e.target.elements.minHr.value;
    let maxHr = e.target.elements.maxHr.value;
    let avg = e.target.elements.avg.value;

    let storeLocation = new StoreLoc(location, minHr, maxHr, avg);
    storeArr.push(storeLocation);
}
// onMount(() => {
  new StoreLoc("Seattle", 23, 65, 6.3);
  new StoreLoc("Tokyo", 3, 24, 1.2);
  new StoreLoc("Dubai", 11, 38, 3.7);
  new StoreLoc("Paris", 20, 38, 2.3);
  new StoreLoc("Lima", 2, 16, 4.6);
// });

  let rows = storeArr.map((store, index) => {
    let total = store.salesArray.reduce((a, b) => a + b, 0);
    return {
      id: `${index}`,
      location: store.location,
      minCust: store.minHr,
      maxCust: store.maxHr,
      avgSale: store.avg,
      total: total,
    };
  });

  console.log(storeArr);
</script>

<section class="form" on:submit={handleChange}>
  <TextInput
    name="location"
    class="input"
    size="sm"
    labelText="Location"
    placeholder="location"
  />
  <TextInput
    name="minCust"
    class="input"
    size="sm"
    labelText="Min Customers"
    placeholder="min customers per hour"
  />
  <TextInput
    name="maxCust"
    class="input"
    size="sm"
    labelText="Max Customers"
    placeholder="max customers per hour"
  />
  <TextInput
    name="avgSale"
    class="input"
    size="sm"
    labelText="Average Sales"
    placeholder="average sales"
  />
  <Button size="sm" class="button" on:click={handleChange}>Submit</Button>
</section>

<DataTable
  headers={[
    { key: "location", value: "Location" },
    { key: "minCust", value: "Min Customers per Hour" },
    { key: "maxCust", value: "Max Customers per Hour" },
    { key: "avgSale", value: "Average Cookie Sales" },
    { key: "total", value: "Total" },
  ]}
  {rows}
/>

<style>
  .form {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  section :global(.input) {
    margin: 5px;
    border-radius: 5px;
  
  }

  section :global(.button){
    padding-right: 12px;
    margin-top: 10px;
    margin-bottom: 1px;
    margin-left: 10px;
    border-radius: 5px;

  }
</style>
