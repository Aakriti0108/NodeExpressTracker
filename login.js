function login(e)
{
    e.preventDefault();

    const loginDetails = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    
    console.log(loginDetails)
    axios.post("https://expensetracker0108.herokuapp.com/login",loginDetails)
    .then(result=>{
        alert("login successfully")
        window.location = "expense.html"
        localStorage.setItem('token', result.data.token)
        console.log(result)
    })
    .catch(err =>{
        alert(err)
        console.log(err)
    })
    
    e.target.email.value="";
    e.target.password.value="";
}