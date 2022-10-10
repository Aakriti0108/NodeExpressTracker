function  addExpense(e)
{
    e.preventDefault();

    const expenseDetails ={
        expense : e.target.expense.value,
        description:e.target.description.value,
        category:e.target.category.value
    }
    console.log(expenseDetails)
    const token = localStorage.getItem('token')
    axios.post("http://localhost:3000/addExpense",expenseDetails ,{headers:{"Authorization":token}})
    .then((response)=>{
         console.log(response)
         showListofRegisteredUser(expenseDetails)
    })
    .catch((err)=>{
        console.log(err)
    })

    e.target.expense.value="";
    e.target.description.value="";
    e.target.category.value="";
}

function showListofRegisteredUser(user){
    const parentNode = document.getElementById('userlist');
    const createNewUserHtml = `<li id='${user.id}'>${user.expense} - ${user.description} - ${user.category}
                                    <button onclick=deleteUser('${user.id}')>Delete</button>
                                </li>`
    console.log(createNewUserHtml)
    parentNode.innerHTML = parentNode.innerHTML + createNewUserHtml;
    console.log(parentNode.innerHTML)
}


window.addEventListener('DOMContentLoaded', () => {
         
   const token = localStorage.getItem('token')
        axios.get("http://localhost:3000/getdetails", {headers:{"Authorization":token}})
        .then((response)=>{
            console.log(response)
            if(response.data.user.premiumuser == true)
            {
                document.getElementById('body').classList.add('premium')
             document.getElementById('logout').classList.add('premium')
             document.getElementById('Addbtn').classList.add('premium')
             document.getElementById('rzp-button1').classList.add('premium')
             document.body.innerHTML+="<a href='leaderboard.html'>leaderboard</a><br>"
             document.body.innerHTML+="<a href='reports.html'>REPORT</a>" 
             document.getElementById('rzp-button1').remove()
             const logout = document.getElementById('logout')
            logout.addEventListener('click',()=>{
             if(confirm('ARE U SURE'))
             {
             window.location = 'login.html'
           }
 })

            }
            for(let i=0;i<response.data.response.length;i++){
                let expense =response.data.response[i].expense
                let description =response.data.response[i].description
                let category =response.data.response[i].category
                let id =response.data.response[i].id
            
                const parentNode = document.getElementById('userlist');
    const createNewUserHtml = `<li id='${id}'>${expense} - ${description} - ${category} 
                                <button onclick=deleteUser('${id}')>Delete</button>
                                </li>`
    parentNode.innerHTML = parentNode.innerHTML + createNewUserHtml;
            }
           
        })
           .catch((err)=>{
            console.log(err);
           })
        })


function deleteUser(id) {
    const token = localStorage.getItem('token')
    axios.delete(`http://localhost:3000/deleteInfo/${id}`, {headers:{"Authorization":token}})
    .then((respone)=>{
        removeItemFromScreen(id)
    })
    .catch((err)=>{
        console.log(err)
    })
    //localStorage.removeItem(user)
   
}

function removeItemFromScreen(id){
    const parentNode = document.getElementById('userlist');
    const elem = document.getElementById(id)
    parentNode.removeChild(elem);
}

const logout = document.getElementById('logout')
 logout.addEventListener('click',()=>{
    if(confirm('ARE U SURE'))
    {
        window.location = 'login.html'
    }
 })

 document.getElementById('rzp-button1').onclick = async function (e) {
    const token = localStorage.getItem('token')
    const response  = await axios.get('http://localhost:3000/purchase', { headers: {"Authorization" : token} });
    console.log(response);
    var options =
    {
     "key": response.data.key_id, // Enter the Key ID generated from the Dashboard
     "name": "Test Company",
     order_id: response.data.order.id, // For one time payment
     "prefill": {
       "name": "Test User",
       "email": "test.user@example.com",
       "contact": "7003442036"
     },
     "theme": {
      "color": "#3399cc"
     },
     // This handler function will handle the success payment
     "handler": function (response) {
         console.log(response);
         axios.post('http://localhost:3000/updatepurchase',{
             order_id: options.order_id,
             payment_id: response.razorpay_payment_id,
         }, { headers: {"Authorization" : token} }).then(() => {
             alert('You are a Premium User Now')
             console.log("premiummemeber")
             document.getElementById('body').classList.add('premium')
             document.getElementById('logout').classList.add('premium')
             document.getElementById('Addbtn').classList.add('premium')
             document.getElementById('rzp-button1').classList.add('premium')
             document.body.innerHTML+="<a href='leaderboard.html'>leaderboard</a>"
             document.body.innerHTML+="<a href='reports.html'>REPORT</a>"
             document.getElementById('rzp-button1').remove()
             const logout = document.getElementById('logout')
 logout.addEventListener('click',()=>{
    if(confirm('ARE U SURE'))
    {
        window.location = 'login.html'
    }
 })

         })
         .catch((err) => {
            console.log(err)
            //  alert('Something went wrong. Try Again!!!')
         })
     },
  };
  const rzp1 = new Razorpay(options);
  rzp1.open();
  e.preventDefault();

  rzp1.on('payment.failed', function (response){
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
 });
}

