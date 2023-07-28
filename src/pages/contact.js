

import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/layout2'
import { Helmet } from 'react-helmet'
import manatee from '../../static/img/manatee-rider.png'


import "../style/main.scss"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
  <div style={{background: "#202124"}}>
      <Layout >
 <Helmet>
        <title>Jason Prillo | Let's Work Together</title>
        <meta name="description" content="Contact Geeby if you dare.​" />
        <meta name="theme-color" content="black" />
      </Helmet>



        <div className='pad-top h-pad b-pad'  >
        
<h1 className='center'>Let's Work Together</h1>
          
            <div className='flex gap-1 pad-top' style={{alignItems: "center"}} >
              <div className='col-6'>
              <div>
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    <p>Name</p>
                  </label>
                  <div className="control">
                    <input
                      className="contact-input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                   <p> Email</p>
                  </label>
                  <div className="control">
                    <input
                      className="contact-input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    <p>Message</p>
                  </label>
                  <div className="control">
                    <textarea
                      className="contact-input"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className='col-6' >

                  <button className="button primary" style={{display: "flex", alignItems: "center"}}type="submit">
                    <p>Send</p>
                  </button>
                </div>
              </form>
              </div>

              </div>
              <div className='col-6'>
                
              
           <img width="100%" src={manatee} alt="Jason Prillo riding a manatee" />
            </div>
        </div>
          
        </div>
      </Layout>
      </div>    
    )
  }
}