//  Local Storage, Session Storage, Cookies in JS.

function handleSubmit () {
    let userGivenValue = document.getElementById("name").value;
    console.log(userGivenValue);

    window.localStorage.setItem("name" , userGivenValue);
    window.sessionStorage.setItem("sessionName", userGivenValue)
}

function handleShow () { 
    const value = localStorage.getItem("name");
    console.log(value);

    localStorage.clear()
}

function handleSubmit (){
    //function definition will start here
    const username = document.getElementById("name").value;
    // console.log(username);
    localStorage.setItem("name",username);
    localStorage.setItem("salary",2000);
    localStorage.setItem("company","ABC");
    sessionStorage.setItem("name", username);
}