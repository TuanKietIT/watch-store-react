import React,{useState} from 'react';

const Register = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const collectData = () => {
       console.log(name,email,password)
    };

    return (
        <div>
            <h1>Register</h1>
            <input className='inputBox' type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter Name'/>
            <input className='inputBox' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
            <input className='inputBox' type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
            <button onClick={collectData} type='button'>Register</button>
        </div>
    )
};

export default Register;