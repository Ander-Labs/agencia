        'use client'

// import { useState } from 'react';

// export default function Contact() {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formState),
//     });
//     const { error } = await res.json();
//     if (error) {
//       console.log(error);
//       return;
//     }
//     setFormState({
//       name: '',
//       email: '',
//       company: '',
//       subject: '',
//       message: '',
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Full name *</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formState.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Your email *</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formState.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="company">Company *</label>
//           <input
//             type="text"
//             id="company"
//             name="company"
//             value={formState.company}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="subject">Subject *</label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formState.subject}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message *</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formState.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

