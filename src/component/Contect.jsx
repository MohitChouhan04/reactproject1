import React from 'react'

const Contect = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contect Us</h1>
            <form>
                <div>
                    <label> Name</label>
                    <input type="text" required placeholder='abc'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='abc@xyz.com' />
                </div>
                <div>
                    <label> Message</label>
                    <input type="text" required placeholder='tell us obout your query...'/>
                </div>

                <button type='submit'>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contect