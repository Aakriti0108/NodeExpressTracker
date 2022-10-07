function  addExpense(e)
{
    e.preventDefault();

    const expenseDetails ={
        expense : e.target.expense.value,
        description:e.target.description.value,
        category:e.target.category.value
    }
    console.log(expenseDetails)
    axios.post("http://localhost:3000/addExpense",expenseDetails)
    .then((response)=>{
         console.log(response)
         showListofRegisteredUser(expenseDetails)
    })
    .catch((err)=>{
        console.log(err)
    })
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


window.addEventListener('DOMContentLoaded', (e) => {
         
    e.preventDefault();
        axios.get("http://localhost:3000/getdetails")
        .then((response)=>{
            console.log(response)
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
    axios.delete(`http://localhost:3000/deleteInfo/${id}`)
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