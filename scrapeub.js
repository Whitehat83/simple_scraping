// let arr = document.querySelectorAll(`li[data-test^="store-item"]  span.c7`);
let arr = document.querySelectorAll(`li.h6.hj.hk.ak.n6.hm.hn.ho.hp span`);
// let arr2 = document.querySelectorAll(`li[data-test^="store-item"] .hv.g0.hw`);
let arr2 = document.querySelectorAll(`li.nf.al.fs.hu span`);


let csvContent = "data:text/csv;charset=utf-8,";

arr.forEach((e, i) => (csvContent += e.textContent + `,` + arr2[i].textContent + "\r\n"));
var encodedUri = encodeURI(csvContent);
window.open(encodedUri);