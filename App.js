let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (i of tablinks) {
    i.classList.remove("active-link");
  }
  for (i of tabcontents) {
    i.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
// !======================================

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyXP4_M4kx8yzrMuY7R37uux6ZaNbdcfsSjON1Ik_gx1G0DkMS11CbJe-BtgIQBePGkwg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    // .then((response) => console.log("Success!", response))
    // .then((Response) => {
    //   msg.innerHTML = "Message Sent Sucessfully";
    //   setTimeout(function () {
    //     msg.innerHTML = "";
    //   },2000);
    //   form.reset()
    // })
    .catch((error) => console.error("Error!", error.message));
});
// !================================
let formSubmit = (e) => {
  e.preventDefault();
  // alert("Your Data is Submitted");

  setTimeout(a, 100);
  function a() {
    let user = e.target[0];
    msg.innerText = `Thank You ${user.value} \n Your Message Sent Sucessfully`;

    let email = e.target[1];
    let phon = e.target[2];
    let text = e.target[3];
    user.value = "";
    email.value = "";
    phon.value = "";
    text.value = "";
  }
  setTimeout(function () {
    msg.innerHTML = "";
  }, 5000);
};

// !==============================
// document.getElementById("loadMoreBtn").addEventListener("click", function () {
//   // Select all elements with the class 'hidden'
//   let hiddenItems = document.querySelectorAll(".hidden");

//   // Remove the 'hidden' class from each element
//   hiddenItems.forEach(function (item) {
//     item.classList.remove("hidden");
//   });

//   // Hide the Load More button after all items are shown
//   this.style.display = "none";
// });

let loadMoreBtn = () => {
  let hiddenItems = document.querySelectorAll(".hidden");
  let allItems = document.querySelectorAll(".work");
  let a = document.getElementById("loadMoreBtn");

  if (hiddenItems.length > 0) {
    // Show all items
    hiddenItems.forEach(function (item) {
      item.classList.remove("hidden");
    });
    a.innerText = "Show Less";
  } else {
    // Hide items 4 to 10
    allItems.forEach(function (item, index) {
      if (index >= 3) {
        item.classList.add("hidden");
      }
    });
    a.innerText = "See More";
  }
};

// !==============================

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

let a = document.getElementById("cvd-msg");

function cvDownload() {
  a.innerText = "CV Download Sucessfully";
  setTimeout(function cvDownload() {
    a.innerText = "";
  }, 2000);
}

/* 


there is UserLogin.jsx file is there 
inside that user login form is there
  inside that fetch this api 
  https://jsonplaceholder.org/users 
  then inside that api users details is 
  there email password etc , then when user
   enter his email and password if its correct then
    its navigate to UserDetail.jsx there user can
     see his all details what is present in that api  in array object . only have to use useRef to target input field and usestate,useparams and usenavigate and if else condition
     */
