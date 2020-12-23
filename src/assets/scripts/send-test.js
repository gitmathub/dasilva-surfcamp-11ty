// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const fetch = require('node-fetch')

const dataJson = {
  apiKey: '9e22b3ebc80a37028674c146a797aee3',
  firstName: 'Karl-Maria Christian',
  lastName: 'Mato Carlos Chevaga',
  address: 'Rua do Rossio',
  phone: '1234 23 23',
  email: 'please@no-mail.com',
  arrival: '2020-12-10',
  departure: '2020-12-26',
  firstName2: 'Fridolin',
  lastName2: 'Carlos',
  firstName3: 'Fretchen',
  lastName3: 'Chevaga',
  firstName4: 'Friedhelm',
  lastName4: 'Mato',
  comment: 'Wir sind alle Vegeratia. Auch die Katze.'
}


// fetch('http://superlea.uber.space:45901/api/booking-request', {
fetch('http://localhost:3000/api/booking-request', {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataJson),
})
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});


