const  subha = [
    {
        fristname : "b"
    },
    {
        fristname : "c"
    },
    {
        fristname : "a"
    }
]
// sort by name
// subha.sort((a, b) => {
//     const nameA = a.fristname.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.fristname.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });
//   console.log(subha);











// subha[0].age=25
// let subhamoy = ["ss","sss","klljkl","kkksss","a"]
subha.sort((a,b)=>
    a.fristname.localeCompare(b.fristname)
)
// // let lastvalue = subha[subha.length - 1]
console.log(subha);
// const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
// items.sort((a, b) => a.localeCompare(b));
// console.log(items);
