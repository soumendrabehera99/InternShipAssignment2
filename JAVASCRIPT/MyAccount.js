
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
var currentName = document.getElementById("name").value;
var currentEmail=document.getElementById("email").value;
var currentPhone = document.getElementById("phone").value;
var currentDob = document.getElementById("dob").value;
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
        newName=prompt("Enter your name",newName);
        if(newName !== currentName){
            break;
        }else{
            alert("Current Name must not be same as new Name.\n Otherwise press cancel");
        }
    }
    if(newName!==''){
        document.getElementById("name").value=newName;
    }else{
        document.getElementById("name").value=currentName;
    }
        
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
    if(newName!==''){
        document.getElementById("email").value=newName;
    }else{
        document.getElementById("email").value=currentName;
    }
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
    if(newName!==''){
        document.getElementById("phone").value=newName;
    }else{
        document.getElementById("phone").value=currentName;
    }
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
    if(newName!==''){
        document.getElementById("dob").value=newName;
    }else{
        document.getElementById("dob").value=currentName;
    }
}

function SaveValue(){
    window.alert("Values are saved");
}

function CancelValue(){
    document.getElementById("name").value=currentName;
    document.getElementById("email").value=currentEmail;
    document.getElementById("phone").value=currentPhone;
    document.getElementById("dob").value=currentDob;
}