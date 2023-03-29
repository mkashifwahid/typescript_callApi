// const data = fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then();

const button = document.getElementById('btn');
const api: string = 'https://dummyjson.com/products';
type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
};

button?.addEventListener('click', function () {
  fetchData(api);
});

async function fetchData(api: string) {
  console.log('1');
  const response = await fetch(api);
  const data = await response.json();
  show(data);
}

function show(data: Product[]) {
  let tab = `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;

  // Loop to access all rows
  //   for (let r of data.list) {
  //     tab += `<tr>
  //     <td>${r.name} </td>
  //     <td>${r.office}</td>
  //     <td>${r.position}</td>
  //     <td>${r.salary}</td>
  // </tr>`;
  //   }

  data.forEach((r) => {
    tab += `<tr>
    <td>${r.id} </td>
    <td>${r.title}</td>
    <td>${r.description}</td>
    <td>${r.brand}</td>
    <td>${r.category}</td>
    /tr>`;
  });
  // Setting innerHTML as tab variable
  document.getElementById('apiResponse')!.innerHTML = tab;
}
