var fo=document.querySelector('form');
var count=0;
function validate(){
   
     let usern=document.getElementById('username')
     let pswd=document.getElementById('password');
    if((pswd.value==12345)&&(usern.value=="admin")){
        redirect() 
       
     }
     else{
         document.getElementById('text').style.color="red"; 
         document.getElementById('text').innerText="username or password is invalid";
      }
}
function redirect(){
    window.location.replace("./main.html");
}

fo.addEventListener("submit",validate)


function ajax(){
// creating an xhr object
 var xhttp=new XMLHttpRequest();
// eventlistener
xhttp.onreadystatechange=function(){
    // condition
    if(xhttp.readyState==4 && xhttp.status==200){
      
       console.log(xhttp.responseText);
       table(xhttp.responseText);
      
            }
    }

xhttp.open("GET"," https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

function table(response){
    var list = JSON.parse(response);
    document.getElementById('todotable').style.display= "block";
    document.getElementById("todobutton").style.display= "none"; 
    var table =document.getElementById('todotable');

   

    for(var i=0;i<list.length;i++){
        let rowcount=table.rows.length;
        var row = table.insertRow(rowcount);
        var cell1= row.insertCell(0);
        cell1.innerHTML=list[i].id;

        var cell2 = row.insertCell(1);
        cell2.innerHTML=list[i].title;

        var cell3=row.insertCell(2);
        var element=document.createElement("input");
        element.type="checkbox";
        if(list[i].completed==true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");

        }
        element.addEventListener('change',(event)=>{
            if(event.currentTarget.checked){
                count++;
                checkCounter();
            }
            else{
                count--;
            }
        })
        cell3.appendChild(element);
    }
}

function checkCounter(){
    let p=new Promise((resolve,reject)=>{
        if(count>=5) {
            resolve("5 Tasks Completed Successfully")
        }
      
    })
    p.then( (message)=>{
           alert(message);
    })

}
