const inputboxes = document.querySelectorAll(".input-box");
const loginBtn = document.querySelector("#submit-btn");
let dataObj = {username:"",password:""} ;

inputboxes.forEach(box=>{
    box.oninput=()=>{
        dataObj = {...dataObj,[box.name]:box.value};
        console.log(dataObj)
    }
})

loginBtn.onclick=(e)=>{
    e.preventDefault();
    if(dataObj.username!=""&&dataObj.password!=""){
        fetch("http://localhost:8080/postdata",{
            method : "POST",
            body : JSON.stringify(dataObj) , 
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(res=>{return res.json()})
        .then(res=>{
            if(res=="success"){
                alert("Thanks for login");
                inputboxes.forEach(box=>{
                    box.value = "" ; 
                }) 
            }else{
                alert("Internal Server error please try again after some time.");
            }
        }).catch(err=>{alert("Internal Server error please try again after some time.");})
    }else{
        alert("All feilds are required!!");
    }
}
