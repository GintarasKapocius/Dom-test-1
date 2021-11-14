const baseUrl = 'http://localhost:3000'

class API {
  static fetchCars = (success, failure) => {
    setTimeout(() => {
      fetch(`${baseUrl}/cars`)
        .then((res) => res.json())
        .then(success)
        .catch(failure)
    }, 1000)
  }

  static deleteCar = (id, success, failure) => {
    fetch(`${baseUrl}/cars/${id}`, { method: 'DELETE' })
      .then((res) => (res.ok ? success() : failure(res.statusText)))
      .catch(failure)
  }
}

// API.fetchCars(console.log, console.error)
// API.deleteCar('2', () => console.log('Item deleted'), console.error)
