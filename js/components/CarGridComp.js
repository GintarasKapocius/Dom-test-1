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
    this.htmlElement.className = 'row g-3'
    this.render()
  }
  cardWrapper = (element) => {
    const col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-lg-4 col-xl-3'
    col.appendChild(element)
    return col
  }

  render = () => {
    const { loading, cars } = this.state
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="./assets/Loading.gif"/></div>`
    } else if (cars.length > 0) {
      this.htmlElement.innerHTML = ''
      const carElements = cars
        .map((x) => new CarCardComp(x))
        .map((x) => x.htmlElement)
        .map(this.cardWrapper)
      this.htmlElement.append(...carElements)
    } else {
      this.htmlElement.innerHTML = `<h2 class="text-center>No Cars elements</h2>`
    }
  }
}
