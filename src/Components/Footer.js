import React from "react"

class Footer extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <p>Learn to code, learn to creative.</p>
          </div>
          <ul className='footer-list'>
            <li>PELAYANAN</li>
            <li>BANTUAN</li>
            <li>HUBUNGI KAMI</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer