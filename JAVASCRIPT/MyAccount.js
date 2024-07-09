
// const profilePic = document.getElementById("profile");
//       const inputFile = document.getElementById("inputType");
    
//       document.getElementById("pencil").onclick = () => {
//         inputFile.click();
//       };
//       inputFile.onchange = () => {
//         if (inputFile.files && inputFile.files[0]) {
//           profilePic.src = URL.createObjectURL(inputFile.files[0]);
//         }
//       };
const profilePic = document.getElementById("pic");
const inputFile = document.getElementById("inputType");
function editPicture(){
        inputFile.click();
}
inputFile.onchange = () =>{
    if(inputFile.files){
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }
};

function editName(){
    let currentName = document.getElementById("name").value;
    let newName= currentName;
    while(1){
        newName=prompt("Enter your Date of Birth",newName);
        if(newName !== currentName){
            break;
        }else{
            alert("Current Name must not be same as new Name.\n Otherwise press cancel");
        }
    }
        document.getElementById("name").value=newName;
}

function editEmail(){
    let currentName = document.getElementById("email").value;
    let newName= currentName;
    while(1){
        newName=prompt("Enter your new Email",newName);
        if(newName !== currentName){
            break;
        }else{
            alert("Current Email must not be same as new Email.\n Otherwise press cancel");
        }
    }
        document.getElementById("email").value=newName;
}


function editPhone(){
    let currentName = document.getElementById("phone").value;
    let newName= currentName;
    while(1){
        newName=prompt("Enter your new Phone Number",newName);
        if(newName !== currentName){
            break;
        }else{
            alert("Current Phone number must not be same as new Number.\n Otherwise press cancel");
        }
    }
        document.getElementById("phone").value=newName;
}


function editDob(){
    let currentName = document.getElementById("dob").value;
    let newName= currentName;
    while(1){
        newName=prompt("Enter your Date of Birth",newName);
        if(newName !== currentName){
            break;
        }else{
            alert("Current dob must not be same as new dob.\n Otherwise press cancel");
        }
    }
        document.getElementById("dob").value=newName;
}

function SaveValue(){
    
}

// function CancelValue(){
//     let currentName = document.getElementById("pic").value;
//     let newName= prompt("Enter pic name",currentName);
//     if(curentName== newName){
//         alert("Current name and new name must not be same");
//     }else{
//         document.getElementById("pic").value=newName;
//     }
// }