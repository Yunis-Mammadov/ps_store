// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUserContext } from '../../../../context/UserContext';
// import { getUsers } from '../../../../api/request';

// const Users = () => {
//   const[users,setUsers] = useState([]);
//   const navigate = useNavigate();
//   const[user,setUser] = useUserContext();
//   useEffect(()=>{
//     if(user===null){
//         navigate('/login');
//     }
//   },[])
//   useEffect(()=>{
//     getUsers(localStorage.getItem('token')).then((res)=>{
//         setUsers(res);
//     })
//   },[])
//   return (
//    <>
//     <h1>Users</h1>
//     <ul>
//         {users && users.map((user)=>{
//             return <li key={user._id}>{user.username}</li>
//         })}
//     </ul>
//    </>
//   )
// }

// export default Users