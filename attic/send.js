// fetch('http://superlea.uber.space:45901/api/booking-request', {
fetch('http://localhost:3000/api/booking-request', {
  method: 'POST',
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


