console.log('This is clilent side script')
function weather(location){
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    fetch(`http://localhost:3000/weather?address=${location}`) 
    .then(response => {
       
        response.json().then((data) => {
            if(data.error){
                console.log('Something went wrong')
            }else {
              p1.innerHTML = data.place
              p2.innerHTML = data.data
            }
           
        })
    }).catch(error => {
       
    })
}


    const weatherForm = document.querySelector('form');
    const search = document.querySelector('input');
    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = search.value.trim();
        if(typeof location === 'string'){
             weather(location);
        }else {
            console.log('please search valid location')
        }
    })
