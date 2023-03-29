"use strict";
// const data = fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const button = document.getElementById('btn');
const api = 'https://dummyjson.com/products';
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    fetchData(api);
});
function fetchData(api) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('1');
        const response = yield fetch(api);
        const data, { "product":  } = yield response.json();
        show(data);
    });
}
function show(data) {
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
    data.prdocuts.forEach((r) => {
        tab += `<tr>
    <td>${r.id} </td>
    <td>${r.title}</td>
    <td>${r.description}</td>
    <td>${r.brand}</td>
    <td>${r.category}</td>
    /tr>`;
    });
    // Setting innerHTML as tab variable
    document.getElementById('apiResponse').innerHTML = tab;
}
//# sourceMappingURL=index.js.map