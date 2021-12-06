import React from "react"
import Lesson from "./Lesson"

class Main extends React.Component {

  constructor(props) {
    super(props)
  }

  items() {
    return [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
      },
      {
        name: 'Sass',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
      }
    ]
  }
  
  render() {
    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello, World.</h1>
            <h2>Selamat datang didunia pemrograman!</h2>
          </div>
          <div className='lesson-container'>
            <h3 className='section-title'>Pelajaran</h3>
            {
              this.items().map((item, index) => {
                return (
                  <Lesson name={item.name} image={item.image} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Main