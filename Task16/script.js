// let tbody = document.querySelector('.tbody');

// const employees = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 30,
//       department: "Engineering",
//       role: { title: "Frontend Developer", level: "Mid" },
//       contact: { email: "john.doe@example.com", phone: "123-456-7890" },
//       skills: ["JavaScript", "React", "CSS"]
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 28,
//       department: "Design",
//       role: { title: "UI/UX Designer", level: "Senior" },
//       contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
//       skills: ["Figma", "Sketch", "Adobe XD"]
//     },
// ];


// function addDatas() {
    
//     employees.forEach(elm => {
//         let tr = document.createElement('tr');
//         for (const key in elm) {
//             if(typeof elm[key] == 'object' && !Array.isArray(elm[key])){
//                 for (const key2 in elm[key]) {
//                     let td = document.createElement('td');
//                     td.innerText = elm[key][key2]
//                     tr.append(td);
//                 }
//             }else {
//                 let td = document.createElement('td');
//                 td.innerText = elm[key];
//                 tr.append(td);
//             }
//         }
//         tbody.append(tr)
//     })
// };

// addDatas()