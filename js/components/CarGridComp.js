class CarGridComp {
  constructor() {
    this.state = { loading: false, cars: [] }
    this.init()
  }

  fetchCars = () => API.fetchCars(this.saveCars, alert)

  saveCars = (cars) => {
    this.state.cars = cars
    this.state.loading = false
    this.render()
  }

  showError = alert

  init = () => {
    this.state.loading = true
    this.fetchCars()
    this.htmlElement = document.createElement('div')
    this.render()
  }

  render = () => {
    const { loading, cars } = this.state
    if (loading) {
      this.htmlElement.innerHTML = 'Loading ...'
    } else {
      this.htmlElement.innerHTML = 'Data obtained'
    }
  }
}
