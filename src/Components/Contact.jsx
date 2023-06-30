import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        
        <main>
            <h1>Contact us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder="Abc.." />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder="abc@gmail.com" />
                </div>
                <div>
                    <label>Query</label>
                    <input type="text" required placeholder="tell us about you query" />
                </div>
                <button>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact