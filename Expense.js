
function signup(e)
{
    e.preventDefault();

    const signupDetails = {
        email: e.target.email.value,
        password: e.target.password.value

    }
    console.log(signupDetails)
    
}