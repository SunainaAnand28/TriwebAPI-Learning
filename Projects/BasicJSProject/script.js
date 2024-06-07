let myuser = null;

const redblock = document.getElementById("redblock");
const greenblock = document.getElementById("greenblock");
const blueblock = document.getElementById("blueblock");
const yellowblock = document.getElementById("yellowblock");

const user = document.getElementById("user");

const adduser = document.getElementById("adduser");

const deleteuser = document.getElementById("deleteuser");

const movetored = document.getElementById("movetored");

const movetogreen = document.getElementById("movetogreen");

const movetoblue = document.getElementById("movetoblue");

const movetoyellow = document.getElementById("movetoyellow");

function addusertoproject() {
    alert("hii");

    if (myuser == null) {
        // Use the outer 'let myuser' variable, do not redeclare with 'const'
        myuser = document.createElement("div");
        myuser.className = "my_user";
        myuser.setAttribute("id", "myuser1");
        myuser.innerHTML = user.value;
        user.disabled = true;
        adduser.disabled = true;
        deleteuser.disabled = false;

        redblock.append(myuser);
    }
}

function deleteuserfromproject() {
    if (myuser != null) {
        myuser.remove();
        user.disabled = false;
        adduser.disabled = false;
        deleteuser.disabled = true;
        user.value = "";
        myuser = null; // Reset to null after removal
        deleteuser.disabled = true;
    }
}

function moveToRed(){
    if(myuser != null){
        redblock.append(myuser);
    }
   
}

function moveToGreen(){
    if(myuser != null){
        greenblock.append(myuser);
    }
}

function moveToBlue(){
    if(myuser != null){
        blueblock.append(myuser);
    }
}

function moveToYellow(){
    if(myuser != null){
        yellowblock.append(myuser);
    }
}

adduser.addEventListener("click", addusertoproject);
deleteuser.addEventListener("click", deleteuserfromproject);
movetored.addEventListener("click", moveToRed);
movetogreen.addEventListener("click", moveToGreen);
movetoblue.addEventListener("click", moveToBlue);
movetoyellow.addEventListener("click", moveToYellow);

