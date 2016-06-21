export default class Position {
  constructor (data) {
    this.title = data.title
    this.description = data.description
    this.cta = data.cta
    this.quantity = data.quantity
    this.team = data.team
    this.mustHave = data.mustHave
    this.shouldHave = data.shouldHave
  }
}
