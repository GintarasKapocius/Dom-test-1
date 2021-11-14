class CarGridComp {
  constructor() {
    this.state = { loading: false, cars: [] }
    this.init()
  }

  initFetch = () =>
    setTimeout(() => {
      API.fetchCars(
        (cars) => {
          this.state.loading = false
          this.saveCars(cars)
        },
        (err) => {
          alert(err)
          this.state.loading = false
          this.render()
        },
      )
    }, 1000)

  saveCars = (cars) => {
    this.state.cars = cars

    this.render()
  }

  deleteCar = (id) => {
    API.deleteCar(id, () => API.fetchCars(this.saveCars, alert), alert)
  }

  init = () => {
    this.state.loading = true
    this.initFetch()
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
        .map(
          ({ id, ...cardProps }) =>
            new CarCardComp({
              ...cardProps,
              onDelete: () => this.deleteCar(id),
            }),
        )
        .map((x) => x.htmlElement)
        .map(this.cardWrapper)
      this.htmlElement.append(...carElements)
    } else {
      this.htmlElement.innerHTML = `<h2 class="text-center>No Cars elements</h2>`
    }
  }
}
