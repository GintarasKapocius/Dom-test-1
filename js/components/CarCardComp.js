class CarCardComp {
  static USD_EUR = 1.15
  constructor(props) {
    this.props = props
    this.init()
  }

  init = () => {
    const { brand, model, year, fuelType, price, imgSrc, onDelete } = this.props

    const { amount, currency } = price

    const finalPrice = currency === '$' ? amount * CarCardComp.USD_EUR : amount
    const formatedPrice = Math.round(100 * finalPrice) / 100 + ' €'
    this.htmlElement = document.createElement('article')
    this.htmlElement.className = 'card shadow-sm'
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}" class="card-img-top"/ height="200px" style="object-fit: cover">
    <div class="card-body">
      <h5 class="card-title my-2">${brand} ${model}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item px-0 d-flex justify-content-between">
          <span class="text-muted">year:</span>
          <span class="text-end">${year}</span>
        </li>
        <li class="list-group-item px-0 d-flex justify-content-between">
          <span class="text-muted">fuel type:</span>
          <span>${fuelType}</span>
        </li>
        <li class="list-group-item px-0 d-flex justify-content-between">
          <span class="text-muted">price:</span>
          <span>${formatedPrice}</span>
        </li>
      </ul>
      <div class="text-center">
      <button class="btn btn-dark btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>
      </div>`
    const btn = this.htmlElement.querySelector('.btn')
    btn.addEventListener('click', onDelete)
  }
}
