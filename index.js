
function clickMe(){
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>{ 
    if(!response.ok){
        throw new Error("Error");
    }
    
    return response.json()})
  .then(data =>{
      //  console.log(data))
      const userTable=document.getElementById('table');
      data.forEach(user=>{
        const row=
        `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        </tr>`
       
       userTable.innerHTML+=row;
      });
      console.log('user data',data);
      

  })
  .catch(error => console.error('Error:', error))
};
// clickMe();