import { useState } from "react";

const Contact = () => {
  const [errors, setErrors] = useState({})
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    // Validaciones
    const newErrors = {};

    if (name.trim() == '') {
      newErrors.name = 'Name is required';
    }

    if (email.trim() == '') {
      newErrors.email = 'Email is required';
    }

    if (message.trim() == '') {
      newErrors.message = 'Message is requerid'
    }

    // Si hay errores, no enviar el formulario
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
    } else {
      return
    }
  };

  return (
    <div name='contact' className='w-full flex justify-center items-center p-4 pt-[150px]'>
        <form onSubmit={handleSubmit} method='POST' action="https://getform.io/f/393ce267-5bc1-4d74-833b-c56536f01ddd" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300 font-tektur'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - bogliacinojuan0@gmail.com</p>
            </div>

            <input className='bg-[#ccd6f6] p-2 outline-none focus:outline-green-600' type="text" value={name} placeholder='Name' name='name' onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className='text-red-600 mt-2'>{errors.name}</p>}

            <input className='mt-4 p-2 bg-[#ccd6f6] outline-none focus:outline-green-600' type="email" value={email} placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className='text-red-600 mt-2'>{errors.email}</p>}

            <textarea className='mt-4 bg-[#ccd6f6] p-2 outline-none focus:outline-green-600' value={message} name="message" rows="10" placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
            {errors.message && <p className='text-red-600 mt-2'>{errors.message}</p>}

            <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Email</button>
        </form>
    </div>
  )
}

export default Contact