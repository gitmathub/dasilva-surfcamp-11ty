console.log("Script loaded.")

function postData() {
  console.log("Start request.")
  fetch("https://reqres.in/api/users", {
    method: "POST",
    // mode: 'no-cors', // HAS to be off, no mode set.
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: "morpheus",
      job: "leader"
    })
  }).then(response => {
    if (!response.ok) {
      console.log("response", response)
      throw Error({message: response})
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