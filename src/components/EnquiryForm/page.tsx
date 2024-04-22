import { useState } from 'react';
interface FormData {
  username: string;
  email: string;
  message: string;
}

const EnquiryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Send form data to backend
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log('Form submitted successfully');
      // Reset form fields
      setFormData({ username: '', email: '', message: '' });
    } else {
      console.error('Form submission failed');
    }
  };

  return (
    <section className='m-auto py-10 md:w-[1200px]'>
      <div className='flex items-center justify-between shadow-2xl'>
        <div>
          <img
            className='h-[600px] w-[500px] object-cover'
            src='images/enquiry.jpg'
            alt='image'
          />
        </div>
        <div className=' w-[600px]'>
          <form onSubmit={handleSubmit}>
            <h1 className='mb-4 w-[400px] text-center font-medium text-teal-600'>
              Send Us A Message
            </h1>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Username
              </label>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <input
                  value={formData.username}
                  onChange={handleChange}
                  type='text'
                  name='username'
                  id='username'
                  autoComplete='username'
                  className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='janesmith'
                />
              </div>

              <label
                htmlFor='email'
                className='mt-4 block text-sm font-medium leading-6 text-gray-900'
              >
                Email Address
              </label>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type='text'
                  name='email'
                  id='email'
                  autoComplete='email'
                  className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='janesmith@gmail.com'
                />
              </div>

              <label
                htmlFor='Phonenumber'
                className='mt-4 block text-sm font-medium leading-6 text-gray-900'
              >
                Phone Number
              </label>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <input
                  // value={formData.Phonenumber}
                  onChange={handleChange}
                  type=''
                  name='Phonenumber'
                  id='Phonenumber'
                  autoComplete='username'
                  className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='0009988990'
                />
              </div>

              <label
                htmlFor='username'
                className='mt-4 block text-sm font-medium leading-6 text-gray-900'
              >
                Message
              </label>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  name='message'
                  id='message'
                  autoComplete='message'
                  rows={3}
                  className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='Write a message'
                />
              </div>
            </div>
            <button
              type='submit'
              className='mt-4 rounded-xl border bg-teal-600 px-4 py-2 font-semibold text-white'
            >
              Submit
            </button>
          </form>

          {/* <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
            <button type='submit'>Submit</button>
          </form> */}
        </div>
      </div>
    </section>
  );
};
export default EnquiryForm;
