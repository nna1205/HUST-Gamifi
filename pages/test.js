import {useState} from 'react'
import axios from 'axios'

const test = () => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [address, setAddress]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name, email, address);
    
        // our object to pass
        const data = {
          name,email,address
        }
        axios.post('https://sheet.best/api/sheets/db35817f-6872-49a6-b17b-ba6820f3d05c',data).then(response=>{
          console.log(response);
          setName('');
          setEmail('');
          setAddress('');
        })
      }

    return (
        <section className="bg-blue-500 min-h-screen flex justity-center items-center">
            <form autoComplete="off" className="max-w-5xl mx-auto py-16 space-y-4" onSubmit = {handleSubmit}>
                <div className="flex items-center justify-center">
                    <label>Name</label>
                    <input 
                        type="text" placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="shadow-md block w-64 sm:text-md border-gray-300 rounded-md"
                    />
                    <br/>
                </div>
                <div className="flex items-center justify-center">
                    <label>Email</label>
                    <input 
                        type="text" placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="shadow-md block w-64 sm:text-md border-gray-300 rounded-md"
                    />
                    <br/>
                </div>
                <div className="flex items-center justify-center">
                    <label>Address</label>
                    <input 
                        type="text" placeholder="Address" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        className="shadow-md block w-64 sm:text-md border-gray-300 rounded-md"
                    />
                    <br/>
                </div>
                <button type="submit" className="bg-gray-500 px-10 py-2">Submit</button>
            </form>
        </section>
    )
}

export default test