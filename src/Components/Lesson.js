import React from "react"

class Lesson extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ifModalOpen: false
    }
  }

  modalOpen(arg1) {
    return () => {
      this.setState({ifModalOpen: arg1})
    }
  }

  render() {
    let modal
    if (this.state.ifModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button className='modal-close-btn' onClick={this.modalOpen(false)}>
              Tutup
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className='lesson-card'>
        <div className='lesson-item' onClick={this.modalOpen(true)}>
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        { modal }
      </div>
    )
  }
}

export default Lesson