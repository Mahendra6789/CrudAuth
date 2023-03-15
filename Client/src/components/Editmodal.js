// import { useState } from "react";

// const EditModal = ({ user, onClose, onUpdate }) => {
//   const [firstName, setFirstName] = useState(user.firstName);
//   const [lastName, setLastName] = useState(user.lastName);
//   const [email, setEmail] = useState(user.email);

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const updatedUser = {
//       firstName,
//       lastName,
//       email,
//     };
//     try {
//       const response = await fetch(`http://localhost:5000/api/users/${user._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedUser),
//       });
//       const data = await response.json();
//       onUpdate(data);
//       onClose();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div onClick={onClose} className="overlay"></div>
//       <div className="modal">
//         <h2>Edit User</h2>
//         <form onSubmit={handleUpdate}>
//           <div>
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type="text"
//               id="firstName"
//               value={firstName}
//               onChange={handleFirstNameChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type="text"
//               id="lastName"
//               value={lastName}
//               onChange={handleLastNameChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </div>
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditModal;

import { useState } from "react";

const EditModal = ({ user, onClose, onUpdate }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      firstName,
      lastName,
      email,
    };
    try {
      const response = await fetch(`/api/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();
      onUpdate(data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div onClick={onClose} className="overlay"></div>
      <div className="modal">
        <h2>Edit User</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;

