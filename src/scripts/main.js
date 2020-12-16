function today() {
  return new Date().toISOString().slice(0, 10);
}

console.log("JavaScript works ", today())
