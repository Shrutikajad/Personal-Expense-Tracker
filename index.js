//transctoion store kela local storage madhe
let transaction = JSON.parse(localStorage.getItem("transactions"))||[]

//save kela
function saveTransaction(){
  localStorage.setItem("transactions",JSON.stringify(transaction))
}

//render kela table
function renderTable(){
  const tbody =document.querySelector("#transTable tbody")
  tbody.innerHTML="";
  transaction.forEach(t => {
    const row=`<tr>
    <td>${t.amount}</td>
    <td>${t.category}</td>
    <td>${t.date}</td>
    <td>${t.note}</td>
    </tr>`

    tbody.innerHTML+=row
  });
}

//handle kela submit or add buttton
document.getElementById("trans").addEventListener('submit',function(e){
  e.preventDefault();

  const amount = document.getElementById("amount").value
  const category=document.getElementById("category").value
  const date = document.getElementById("date").value;
  const note = document.getElementById("note").value;

  transaction.push({amount,category,date,note})

  saveTransaction()
  renderTable()
})

