function login(){

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    if(name==="" || email===""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);

    window.location.href="dashboard.html";
}
function addProblem(){

    let name =
    document.getElementById("problemName").value;

    let topic =
    document.getElementById("topic").value;

    if(name===""){
        alert("Enter problem name");
        return;
    }

    let table =
    document.getElementById("problemTable");

    let row =
    `<tr>
        <td>${name}</td>
        <td>${topic}</td>
    </tr>`;

    table.innerHTML += row;

    document.getElementById("problemName").value="";
}
function uploadResume(){

    let file =
    document.getElementById("resumeFile").files[0];

    if(!file){
        alert("Select a resume first");
        return;
    }

    document.getElementById("resumeStatus").innerHTML =
    "Uploaded: " + file.name;

}
fetch("http://localhost/backend/login.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "email=" + email + "&password=" + password
})
.then(res => res.text())
.then(data => {
    console.log(data);
});