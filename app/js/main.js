// nuber
function change(objName, min, max, step) {
  let obj = document.getElementById(objName);
  let tmp = +obj.value + step;
  if (tmp<min) tmp=min;
  if (tmp>max) tmp=max;
  obj.value = tmp;
}


//pikaday

// const picker = new Pikaday({
//   field: document.getElementById('datepicker'),

//     toString(date, format) {
//         // you should do formatting based on the passed format,
//         // but we will just return 'D/M/YYYY' for simplicity
//         const day = date.getDate();
//         const month = date.getMonth() + 1;
//         const year = date.getFullYear();
//         return `${day}  ${month}`;
//   },


//   firstDay: 1,


// });




// more info https://www.npmjs.com/package/js-datepicker#installation
//  End calendar


//# sourceMappingURL=main.js.map
