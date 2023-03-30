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
let products = [];
fetchData(api);
function fetchData(api) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .catch((error) => {
            const errorElement = (document
                .getElementById('apiResponseDiv')
                .appendChild(document.createElement('h1')).innerHTML = error.message);
        });
        const data = yield response;
        products = data.products;
        // Table Show by Inner HTML
        showDatabyInnerHTML(products);
        // Table Show by Append Element in DOM
        showDataByElement(products);
    });
}
function showDatabyInnerHTML(data) {
    let tab = `<table>
          <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Decription</th>
          <th>Brand</th>
          <th>Category</th>
         </tr>`;
    data.forEach((r) => {
        tab += `<tr>
    <td>${r.id} </td>
    <td>${r.title}</td>
    <td>${r.description}</td>
    <td>${r.brand}</td>
    <td>${r.category}</td>
    </tr>`;
    });
    tab += `</table>`;
    // Setting innerHTML as tab variable
    document.getElementById('apiResponseDiv').innerHTML = tab;
}
function showDataByElement(data) {
    var _a;
    const Header = ['ID', 'TITLE', 'DESCRIPTION', 'BRAND', 'CATEGORY'];
    const table = document.createElement('table');
    const HeaderRow = table.appendChild(document.createElement('tr'));
    Header.forEach((h) => {
        HeaderRow.appendChild(document.createElement('th')).innerHTML = h;
    });
    data.forEach((r) => {
        const DataRow = table.appendChild(document.createElement('tr'));
        DataRow.appendChild(document.createElement('td')).innerHTML =
            r.id.toString();
        DataRow.appendChild(document.createElement('td')).innerHTML =
            r.title.toString();
        DataRow.appendChild(document.createElement('td')).innerHTML =
            r.description.toString();
        DataRow.appendChild(document.createElement('td')).innerHTML =
            r.brand.toString();
        DataRow.appendChild(document.createElement('td')).innerHTML =
            r.category.toString();
    });
    (_a = document.getElementById('apiResponseDiv')) === null || _a === void 0 ? void 0 : _a.appendChild(table);
}
//# sourceMappingURL=index.js.map