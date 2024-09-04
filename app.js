

document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
});


  // 2초 뒤에 버튼 인스턴스를 dispose
  const buttonElement = document.getElementById('searchbutton'); 
// buttonElement는 ID가 'searchbutton'인 DOM 요소를 참조하는 객체
const button = bootstrap.Button.getOrCreateInstance(buttonElement); 
// button은 Bootstrap의 Button 인스턴스를 참조하며, 'buttonElement'를 Bootstrap 버튼 컴포넌트로 다룰 수 있게 해줌

  setTimeout(() => {
    button.toggle();
    console.log("null test")
  }, 5000);



// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// myHeading.onclick = function () {
//     alert("Ouch! Stop poking me!");
//   };

// let myButton = document.querySelector("button");

// myButton.onclick = function () {
//     setUserName();
//   };

// if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem("name");
//     myHeading.textContent = "Mozilla is cool, " + storedName;
//   }


//   function setUserName() {
//     let myName = prompt("Please enter your name.");
//     if (!myName || myName === null) {
//       setUserName();
//     } else {
//       localStorage.setItem("name", myName);
//       myHeading.innerHTML = "Mozilla is cool, " + myName;
//     }
//   }
  