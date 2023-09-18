import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import {
//     getDatabase,
//     ref,
//     set,
//     get,
//     child,
//     onValue,
//     update
// } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBfu0UTH2zNaijOZlDEYYSbgu7DXDQdhqE",
  authDomain: "amtstaffing-26a61.firebaseapp.com",
  databaseURL: "https://amtstaffing-26a61-default-rtdb.firebaseio.com",
  projectId: "amtstaffing-26a61",
  storageBucket: "amtstaffing-26a61.appspot.com",
  messagingSenderId: "783485510449",
  appId: "1:783485510449:web:bf331564e9292451580610",
  measurementId: "G-4G4MG3ZED3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

let auth_cred = document.getElementById("auth_cred");

let btn1 = document.createElement("a");
let btn2 = document.createElement("a");
let btn3 = document.createElement("a");
let btn4 = document.createElement("a");

btn1.innerHTML = "Login";
btn2.innerHTML = "All Jobs";
btn3.innerHTML = "Logout";
btn4.innerHTML = "Add New Job";

// btn1.setAttribute("href", "#");
// btn2.setAttribute("href", "#");
btn1.setAttribute("href", "Admin/signIn.html");
btn1.setAttribute("class", "login_user");
btn2.setAttribute("href", "Admin/allcards.html");
btn2.setAttribute("class", "login_user");
btn3.setAttribute("href", "#");
btn3.setAttribute("id", "logout");
btn3.setAttribute("class", "login_user");
btn4.setAttribute("href", "Admin/addcard.html");
btn4.setAttribute("class", "login_user");

function getUser_Details() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      auth_cred.appendChild(btn4);
      auth_cred.appendChild(btn2);
      auth_cred.appendChild(btn3);

      let logout = document.getElementById("logout");

      logout.addEventListener("click", signout);
    } else {
      auth_cred.appendChild(btn1);
    }
  });
}

function signout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("user Signout Successfully");
      window.location.replace("Admin/signIn.html");
    })
    .catch((error) => {
      // An error happened.
    });
}

// window.location.replace("./signIn.html");

// let auth_cred = document.getElementById("auth_cred");

window.reload = getUser_Details();

// let editjob = document.getElementById("editjob");

// editjob.addEventListener("click", function () {
//   console.log("index");
// });

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   get,
//   child,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged
// } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyDOUi3263ctetpNY_5v300Y457kTzXU-Yo",
//   authDomain: "amtstaffing-28882.firebaseapp.com",
//   projectId: "amtstaffing-28882",
//   storageBucket: "amtstaffing-28882.appspot.com",
//   messagingSenderId: "332453668836",
//   appId: "1:332453668836:web:b2ac79d16c3e9df9fc09f1",
//   measurementId: "G-Q512FTK8ZK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// // const auth = getAuth(app);

// // Add Data
// let title = document.getElementById("title");
// let companyName = document.getElementById("companyName");
// let blogText = document.getElementById("blogText");
// let branch = document.getElementById("branch");
// let jobType = document.getElementById("jobType");
// let jobStatus = document.getElementById("jobStatus");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let loginUser = document.getElementById("loginUser");
// // Buttons
// let submit_btn = document.getElementById("submit_btn");
// let btnn = document.getElementById("btnn");
// let signIn_btn = document.getElementById("signIn_btn");
// let submit_logout_btn = document.getElementById("submit_logout_btn");

// function Auth() {
//   if (email.value === "") {
//     alert("Please Enter Your Email");
//   } else if (password.value === "") {
//     alert("Please Enter Your Password");
//   } else {
//     // alert("done");
//     console.log("done");
//     userLogIn();
//   }
// }

// function userLogIn() {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//       alert("user Login Success");
//       window.location.replace("./addcard.html");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//       alert(errorMessage);
//     });
// }

// function isLoginUser() {
//   const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const {uid,email} = user
//     console.log(email);

//   } else {
//     console.log("not found")
//   }
// });

//   // if(user) {
//   //   alert('User Already Login')
//   //   window.location.href("./addcard.html")
//   // }
// }

// function userLogOut() {
//   const auth = getAuth();
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       alert("user SignOut Successfully")
//       window.location.replace("./signIn.html")
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// }

// function addData() {
//   if (
//     title.value == "" ||
//     companyName.value == "" ||
//     blogText.value == "" ||
//     branch.value == "select Branch" ||
//     jobType.value == "select Type" ||
//     jobStatus.value == "select Status"
//   ) {
//     alert("Please Enter Your Complete data");
//   } else {
//     set(ref(db, "cardData/" + title.value), {
//       title: title.value,
//       companyName: companyName.value,
//       blogText: blogText.value,
//       branch: branch.value,
//       jobType: jobType.value,
//       jobStatus: jobStatus.value,
//     })
//       .then(() => {
//         alert("card added Successfully"), window.location.reload();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }

// function getData() {
//   const Dbref = ref(db);
//   // const nowDate = new Date().getTime();

//   // const second = 1000;
//   // const minutes = second * 60;
//   // const hour = minutes * 60;
//   // const day = hour * 24;

//   let heading = document.getElementById("section__");
//   get(child(Dbref, "cardData"))
//     .then((data) => {
//       var arr = [];
//       data.forEach((element) => {
//         arr.push(element.val());

//         heading.innerHTML = "";
//         for (var i = 0; i < arr.length; i++) {
//           console.log(arr[i]);

//           heading.innerHTML += `<div class="container sec3" >
//           <div class="row section3">
//             <div class="col-lg-3">
//               <img
//                 class="img_section3"
//                 src="./images/findajoblogo.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="col-lg-5 section3_text_div">
//               <a class="a_section3" href="../forms/form_1.html"
//                 >${arr[i].title}</a
//               >
//               <a style="color: #55bce7" href="../index.html"
//                 >${arr[i].companyName}</a
//               >
//               <p>${arr[i].blogText}</p>
//             </div>
//             <div class="col-lg-1">
//               <span class="span_section3">|</span>
//             </div>
//             <div class="col-lg-3">
//               <div class="img_sec3">
//                 <div class="div_sec33">
//                   <i class="fa-solid fa-location-dot"></i>
//                   <p class="p_div_33">${arr[i].branch}</p>
//                 </div>
//                 <div class="div_sec3">
//                   <p class="full-time p_div_33"><i class="fa-regular fa-clock"></i>${arr[i].jobType}</p>
//                 </div>
//                 <div class="div_sec3">
//                   <i class="fa-solid fa-calendar-days"></i>
//                   <p class="p_div_33">POSTED  1 SECOND AGO</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>`;
//         }
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// // signIn_btn.addEventListener("click", Auth);

// // submit_logout_btn.addEventListener("click", userLogOut);

// // submit_btn.addEventListener("click", addData);

// // loginUser.addEventListener("load",isLoginUser)

// // window.reload = getData();
// // window.reload = isLoginUser();

// for data

// function getDataOnce() {
//     const Dbref = ref(db);
//     // const nowDate = new Date().getTime();

//     // const second = 1000;
//     // const minutes = second * 60;
//     // const hour = minutes * 60;
//     // const day = hour * 24;

//     let heading = document.getElementById("section__");
//     get(child(Dbref, "cardData"))
//       .then((data) => {
//         var arr = [];
//         data.forEach((element) => {
//           arr.push(element.val());

//           heading.innerHTML = "";
//           for (var i = 0; i < arr.length; i++) {
//             heading.innerHTML += `<div class="container sec3" >
//         <div class="row section3">
//           <div class="col-lg-3">
//             <img
//               class="img_section3"
//               src="./images/findajoblogo.jpeg"
//               alt=""
//             />
//           </div>
//           <div class="col-lg-5 section3_text_div">
//             <a class="a_section3" href="../forms/form_1.html"
//               >${arr[i].title}</a
//             >
//             <a style="color: #55bce7; href="../index.html"
//               >${arr[i].companyName.toUpperCase()}</a
//             >
//             <p>${arr[i].blogText}</p>
//           </div>
//           <div class="col-lg-1">
//             <span class="span_section3">|</span>
//           </div>
//           <div class="col-lg-3">
//             <div class="img_sec3">
//               <div class="div_sec33">
//                 <i class="fa-solid fa-location-dot"></i>
//                 <p class="p_div_33">${arr[i].branch}</p>
//               </div>
//               <div class="div_sec3">
//                 <p class="full-time p_div_33"><i class="fa-regular fa-clock"></i>${arr[i].jobType}</p>
//               </div>
//               <div class="div_sec3">
//                 <i class="fa-solid fa-calendar-days"></i>
//                 <p class="p_div_33">POSTED  1 SECOND AGO</p>
//               </div>
//               <div class="div_sec3">
//                 <button type="button" class="btn btn-primary px-5 w-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="${JobCard(i)}">
//                   Edit Card
//                 </button>

//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>`;
//           }
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

// <button type="button" id="edit_btn" class="btn btn-primary px-5 w-auto">Edit Card</button>

//     function editBTN(i){
//       var edit_btn;
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // edit_btn =  `<button type="button" id="edit_btn" class="btn btn-primary px-5 w-auto">Edit Card</button>`
//         edit_btn = `<button type="button" class="btn btn-primary px-5 w-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//               Edit Card
// </button>`

//       } else {
//         edit_btn = ""
//       }
//     });
//     }

// var edit_btn;

// onAuthStateChanged(auth, (user) => {
//   console.log(edit_btn);
//       // edit_btn.innerHTML = ""
//       // if (user) {
//       //   edit_btn.style.display = "none"

//       // } else {
//       //   edit_btn.style.display = "none"
//       // }
//     });
