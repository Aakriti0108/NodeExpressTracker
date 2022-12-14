const token = localStorage.getItem('token')

window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://expensetracker0108.herokuapp.com/getReport", {headers:{"Authorization":token}})
    .then(result=>{
       
        const dailyExpense = document.getElementById('dailyExpense')
        let container = "";
        for(let i =0;i<result.data.length;i++)
        {
            let category = result.data[i].category;
            let description = result.data[i].description;
            let expense = result.data[i].expense;
           
            container +=`<div> cateogory--${category}---description${description}---category${expense}--- </div>`

            
        }
        dailyExpense.innerHTML = container;
    })

        axios.get("https://expensetracker0108.herokuapp.com/getWeeklyReport", {headers:{"Authorization":token}})
        .then(result=>{
            console.log(result)
            const WeeklyExpense = document.getElementById('weeklyExpense')
            let container = "";
            for(let i =0;i<result.data.length;i++)
            {
                let category = result.data[i].category;
                let description = result.data[i].description;
                let expense = result.data[i].expense;
               
                container +=`<div> cateogory--${category}---description${description}---category${expense}--- </div>`
    
                
            }
            WeeklyExpense.innerHTML = container;
    })
    .catch(err =>{
        console.log(err)
    })
    
})