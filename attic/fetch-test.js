console.log("Script loaded.")

function postData() {
  console.log("Start request.")
  // fetch("https://reqres.in/api/users", {
  fetch("http://localhost:3000/api/users", {
    method: "POST",
    // mode: 'no-cors', // attention! this sets teh content type to text
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "morpheus",
      job: "leader"
    })
  }).then(response => {
    if (!response.ok) {
      console.log("response", response)
      throw Error(response.status)
    }
    return response.json()
  }).then(data => {
    console.log("data", data)
    document.querySelector('#response').innerHTML = JSON.stringify(data)
  }).catch(error =>{
    console.log("ERROR", error)
  })
}

postData()