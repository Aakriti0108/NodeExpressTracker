
function signup(e)
{
    e.preventDefault();

    const signupDetails = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    
    console.log(signupDetails)
    axios.post("https://expensetracker0108.herokuapp.com/signup",signupDetails)
    .then(result=>{
        alert("signup successfully")
        window.location = "index.html"
        console.log(result)
    })
    .catch(err =>{
       alert(err)
    })
    
    e.target.email.value="";
    e.target.password.value="";
}
