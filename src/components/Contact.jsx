const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4 pt-[120px]'>
        <form method='POST' action="https://getform.io/f/393ce267-5bc1-4d74-833b-c56536f01ddd" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300 font-tektur'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - bogliacinojuan0@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 outline-none focus:outline-green-600' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] outline-none focus:outline-green-600' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 outline-none focus:outline-green-600' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Email</button>
        </form>
    </div>
  )
}

export default Contact