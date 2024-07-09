
function editPicture(){
    let currentName = document.getElementById("pic").value;
    let newName= currentName;
        
        // if(newName !== currentName){
        //     break;
        // }else{
        //     alert("Current Picture must not be same as new picture.\n Otherwise press cancel");
        // }
        // document.getElementById("pic").value=newName;
}

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
    let currentName = document.getElementById("name").value;
    let newName= currentName;
    while(1){
        newName=prompt("Enter your Date of Birth",newName);
        if(newName !== currentName){
            break;
        }else{
            alert("Current Email must not be same as new Email.\n Otherwise press cancel");
        }
    }
        document.getElementById("name").value=newName;
}


function editPhone(){
    let currentName = document.getElementById("phone").value;
    let newName= currentName;
    while(1){
        newName=prompt("Enter your Date of Birth",newName);
        if(newName !== currentName){
            break;
        }else{
            alert("Current Phone number must not be same as new Number.\n Otherwise press cancel");
        }
    }
        document.getElementById("dob").value=newName;
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