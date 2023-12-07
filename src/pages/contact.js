import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/layout2';
import Seo from '../components/seo';
import '../style/main.scss';



function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Index = () => {
  const [state, setState] = useState({ isValidated: false });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <Seo
        title="Contact Us"
        description="We would love to hear from you!"
      />

      <div className='flex gap-2 h-pad' style={{paddingTop: "50px", paddingBottom: "50px" }}>
        <div className='col-6'>
          <h1>Contact Us</h1>
          <p style={{padding: "0 0 2rem 0"}}>We would love to hear from you!</p>
          <form
    name="contact"
    method="post"
    action="/thanks/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={handleSubmit}
>
    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
    <input type="hidden" name="form-name" value="contact" />
    <div hidden>
        <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
        </label>
    </div>
    <div className='flex gap-4 '>
    <div className="field col-6">
        <label className="label" htmlFor={'firstName'}>
        First Name

        </label>
        <div className="control">
            <input
            style={{width: "100%"}}
                className="contact-input"
                type={'text'}
                name={'firstName'}
                onChange={handleChange}
                id={'firstName'}
                required={true}
            />
        </div>
    </div>
    <div className="field col-6">
        <label className="label" htmlFor={'lastName'}>
            Last Name
        </label>
        <div className="control">
            <input
              style={{width: "100%"}}
                className="contact-input"
                type={'text'}
                name={'lastName'}
                onChange={handleChange}
                id={'lastName'}
                required={true}
            />
        </div>
    </div>
    </div>
    <div className="field">
        <label className="label" htmlFor={'email'}>
            Email
        </label>
        <div className="control">
            <input style={{width: "100%"}}
                className="contact-input"
                type={'email'}
                name={'email'}
                onChange={handleChange}
                id={'email'}
                required={true}
            />
        </div>
    </div>
    <div className="field">
        <label className="label" htmlFor={'message'}>
            Message
        </label>
        <div className="control">
            <textarea
                    input style={{width: "100%"}}
                className="contact-input "
                name={'message'}
                onChange={handleChange}
                id={'message'}
                required={true}
            />
        </div>
    </div>
    <div>
        <button
            className="primary-button"
            style={{ margin: "1rem 0 0 0", textSize: '2em', width: "100%"}}
            type="submit"
        >
            Send
        </button>
    </div>
</form>

        </div>
        <div className='col-6'>

        </div>
      </div>
    </Layout>
  );
};

export default Index;