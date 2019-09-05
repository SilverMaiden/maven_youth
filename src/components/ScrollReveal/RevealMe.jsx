import React from 'react'
import sr from './ScrollReveal'

export class RevealMe extends React.Component {
  props: Props;

  componentDidMount = () => {
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.box1, config)
  }

  render () {
    return (
      <section className='testimonial' id='testimonials'>
        <div className='row' ref='box1'>
          ...
        </div>
      </section>
    )
  }
}
export default RevealMe
