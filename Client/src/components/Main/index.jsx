// import styles from "./styles.module.css";
// import { useState, useEffect } from "react";


// const Main = () => {
//   const [userData, setUserData] = useState([]) ;
//   const [loading, setLoading] = useState(true);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/getData");
//         const data = await response.json();
//         setUserData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchUserData()
//   }, []);
//   console.log("useremail is",(userData))
//   const response=userData.data
//   return (
//     <div className={styles.main_container}>
//       <nav className={styles.navbar}>
//         <h1>Users Data</h1>
//         <button className={styles.white_btn} onClick={handleLogout}>
//           Logout
//         </button>
//       </nav>
//       {loading ? (
//         <p>Loading data...</p>
//       ) : (
//         <table style={{border:"2px solid black"}}>
//           <thead>
//             <tr>
//               <th>FirstName</th>
//               <th>LastName</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {response.map((user) => {
//               return(
//               <tr key={user._id}>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                 <button>edit</button>
//                 <button>Submit</button>
//               </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Main;

import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import EditModal from "../Editmodal";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/getData",{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);


  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handleSaveUser = async (updatedUser) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${updatedUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();
      setUserData((prevState) =>
        prevState.map((user) => {
          if (user._id === data._id) {
            return data;
          }
          return user;
        })
      );
      setEditModalOpen(false);
      setSelectedUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("useremail is", userData);
  const response = userData.data;
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Users Data</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {response.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleEditUser(user)}>edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {editModalOpen && (
        <EditModal user={selectedUser} onClose={() => setEditModalOpen(false)} onSave={handleSaveUser} />
      )}
    </div>
  );
};

export default Main;





