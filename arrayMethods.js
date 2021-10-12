const arr = [
  { name: "TV", price: 100 },
  { name: "sofa", price: 200 },
  { name: "table", price: 400 },
  { name: "mobile", price: 900 },
  { name: "charger", price: 20 },
  { name: "palte", price: 10 },
  { name: "extension", price: 5 },
  { name: "bed", price: 300 },
];

const filterdItem = arr.filter((item) => {
  return item.price <= 100;
});

const nemaOnly = arr.map((item) => {
    return item.name;
})

const findmethod = arr.find((item) => {
    return item.name === 'bed'
})

let sum = 0;
arr.forEach((item) => {
    console.log('asd;;;', item.name)
    sum = sum + item.price;
})
console.log('sum:::', sum);


for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].price;
}
console.log('sum:::', sum);
console.log(typeof (arr));



//console.log("FilteredItem:::::", filterdItem);
//console.log("mapped item:::::", nemaOnly);
//console.log("find method item:::::", findmethod);