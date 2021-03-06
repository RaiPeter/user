import React, { useState } from 'react'
// import '.home.css'
function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pan, setPan] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [mobile, setMobile] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, pan,aadhar, mobile,occupation);
      }

    return (
        <form onSubmit={handleSubmit}>
            Name: <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  />
            PAN: <input type="text" name="email" value={pan} onChange={e => setPan(e.target.value)} />
            Aadhar: <input type="text" name="email" value={aadhar} onChange={e => setAadhar(e.target.value)}/>
            Mobie No: <input type="number" name="email" value={mobile} onChange={e => setMobile(e.target.value)}/>
            Occupation <input type="text" name="email" value={occupation} onChange={e => setOccupation(e.target.value)} />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Home
