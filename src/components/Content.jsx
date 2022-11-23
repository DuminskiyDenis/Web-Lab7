import React from 'react'

export class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor1: 'white',
      textColor1: 'black',
      backgroundColor2: 'white',
      textColor2: 'black',
    }
  }

  changeColor1() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor1: textColor, backgroundColor1: 'red' })
  }

  changeColor2() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor2: textColor, backgroundColor2: 'black' })
  }

  render() {
    return (
      <>
        <div>Місце народження: 21 липня, 2002 року, м. Київ</div>
        <ul>
          Освіта:
          <li id="elem">
            <div
              onClick={() => this.changeColor1()}
              style={{
                backgroundColor: this.state.backgroundColor1,
                color: this.state.textColor1,
              }}
            >
              Загольноосвітня школа I-III ступенів №6, м. Васильків
              </div>
          </li>
          <li id="elem2">
            <div
              onClick={() => this.changeColor2()}
              style={{
                backgroundColor: this.state.backgroundColor2,
                color: this.state.textColor2,
              }}
            >
              НТУУ "КПІ", м. Київ
            </div>
          </li>
        </ul>
        <ul>
          Хобі:
          <li>Баскетбол</li>
          <li>Книги</li>
          <li>Комп'ютери</li>
        </ul>
        <ul>
        Улюблені книги:
          <ol type="1">
            <li>"Крёстный отец", 1969</li>
            <li>"Мастер и Маргарита", 1937</li>
            <li>"12 стульев", 1927</li>
          </ol>
        </ul>
        <div>
        Будапе́шт (угор. Budapest) — місто на Дунаї, столиця Угорщини. 1873 року міста Пешт, 
        яке лежало на східному боці річки Дунай, Буда (лат. Buda) і Обуда 
        (угор. Obuda, обидва — на західному боці річки) було об'єднано в одне місто під назвою Будапешт.
        </div>
      </>
    )
  }
}
