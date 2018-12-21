var firstname = document.getElementById('firstname');
var room = document.getElementById('room');
var button = document.getElementById('button');
var result = document.getElementById('result');

var url = 'http://localhost:3000/api/bookings';
var url1 = 'http://localhost:3000/api/add';
var json = {
    name : firstname.value,
    room : room.value
};

button.addEventListener("click", function(){

    result.innerHTML = "";

    fetch(url1, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'name=' + firstname.value + '&' + 'room=' + room.value
      })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        console.log(data);
        
        result.innerHTML = "New record successfully added"
      })
      .catch(function (error) {
        console.log('Request failed', error);
        result.innerHTML = "error : " + error;
      });

      firstname.value = "";
      room.value = "";

      
});





// fetch(url)
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });

