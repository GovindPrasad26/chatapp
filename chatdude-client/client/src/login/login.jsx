// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Link,useNavigate } from "react-router-dom";
// import Home from "../homepage/home";
// const Login = () => {
//   let navigate =useNavigate()
//     let[state,setstate]=useState({
//         email:'',
//         password:'',
//     })
//   console.log(state)
// function CheckCredition(){

//     axios.post('http://localhost:5665/users/Login',state).then((res)=>{
//         if(res.data.ok){
//             alert('user valid')
//             navigate('/home')
//             localStorage.setItem("token-key",res.data.result)
       
//        }else{
//         alert("user invalid")
//        }
//     }).catch((error)=>{
//  console.log('error')
//     })
// }
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#f4f4f4",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           width: "300px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "#333" }}>Login</h2>
//         <form>
//           <div style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="email"
//               style={{
//                 display: "block",
//                 textAlign: "left",
//                 fontSize: "14px",
//                 color: "#555",
               
//               }}
//             >
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//               onChange={(e)=>{
//                setstate({...state,
//                 email:e.target.value
//                })
//                }}
//             />
//           </div>
//           <div style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="password"
//               style={{
//                 display: "block",
//                 textAlign: "left",
//                 fontSize: "14px",
//                 color: "#555",
//               }}
//             >
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//               onChange={(e)=>{
//                 setstate({...state,
//                  password:e.target.value
//                 })
//                 }}
//             />
//           </div>
//           <button
//             type="button"
//             style={{
//               backgroundColor: "#007BFF",
//               color: "white",
//               padding: "10px 15px",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               width: "100%",
//               fontSize: "14px",
//             }}  onClick={CheckCredition}
//           >
//             Login
//           </button><br/><br />
//           <Link to=''>
//           <a href="" >forgot account</a>
//           </Link>
//          <Link to="/signup">
//           <a href="" style={{marginLeft:'50px',textDecoration:'none'}}>create new account</a>
//          </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//     let nav =useNavigate()
//     const [state, setState] = useState({
//         email: '',
//         password: '',
//     });

//     function CheckCredentials(event) {
//         event.preventDefault();
//         axios.post('http://localhost:5665/users/Login', state)
//             .then((res) => {  
//                 if (res.data.ok) {
//                     alert('User valid');
//                     localStorage.setItem("token-key", res.data.result);
//                     nav('/')
//                 } else {
//                     alert("User invalid");
//                 }
//             })
//             .catch(() => {
//                 console.log('Error');
//             });
//     }

//     return (
//         <div style={{
//             display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",
//             backgroundColor: "#f4f4f4", fontFamily: "Arial, sans-serif"
//         }}>
//             <div style={{
//                 backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", width: "300px", textAlign: "center"
//             }}>
//                 <h2 style={{ color: "#333" }}>Login</h2>
//                 <form onSubmit={CheckCredentials}>
//                     <div style={{ marginBottom: "15px" }}>
//                         <label htmlFor="email" style={{ display: "block", textAlign: "left", fontSize: "14px", color: "#555" }}>Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
//                             onChange={(e) => setState({ ...state, email: e.target.value })}
//                         />
//                     </div>
//                     <div style={{ marginBottom: "15px" }}>
//                         <label htmlFor="password" style={{ display: "block", textAlign: "left", fontSize: "14px", color: "#555" }}>Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
//                             onChange={(e) => setState({ ...state, password: e.target.value })}
//                         />
//                     </div>
//                     <button type="submit" style={{
//                         backgroundColor: "#007BFF", color: "white", padding: "10px 15px", border: "none",
//                         borderRadius: "4px", cursor: "pointer", width: "100%", fontSize: "14px"
//                     }}>
//                         Login
//                     </button>
//                 </form>
//                 <div style={{ marginTop: "10px" }}>
//                     <Link to="" style={{ fontSize: "12px", color: "#007BFF", textDecoration: "none" }}>Forgot Password?</Link>
//                 </div>
//                 <div style={{ marginTop: "10px" }}>
//                     <span style={{ fontSize: "12px", color: "#555" }}>Don't have an account?</span> 
//                     <Link to="/signup" style={{ fontSize: "12px", color: "#007BFF", textDecoration: "none", marginLeft: "5px" }}>Sign Up</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;



import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const[Validation,setValidation]=useState({

    })
    function CheckCredentials(event) {

       
        event.preventDefault();
        axios.post('http://localhost:5665/users/Login', state)
            .then((res) => {
                if (res.data.ok) {
                    alert('User valid');
                    localStorage.setItem("token-key", res.data.result);
                    navigate('/home');
                } else {
                    alert("User invalid");
                }
            })
            .catch(() => {
                console.log('Error');
            });
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "linear-gradient(135deg, #e3f2fd, #90caf9)",
            fontFamily: "Segoe UI, sans-serif"
        }}>
            <div style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                width: "100%",
                maxWidth: "400px",
                textAlign: "center"
            }}>
                <h2 style={{ color: "#1976d2", marginBottom: "20px" }}>Welcome Back</h2>
                <form onSubmit={CheckCredentials}>
                    <div style={{ marginBottom: "20px", textAlign: "left" }}>
                        <label htmlFor="email" style={{ fontWeight: "600", color: "#444", fontSize: "14px" }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "6px",
                                border: "1px solid #ccc",
                                outline: "none",
                                fontSize: "14px"
                            }}
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "20px", textAlign: "left" }}>
                        <label htmlFor="password" style={{ fontWeight: "600", color: "#444", fontSize: "14px" }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "6px",
                                border: "1px solid #ccc",
                                outline: "none",
                                fontSize: "14px"
                            }}
                            onChange={(e) => setState({ ...state, password: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            padding: "12px",
                            width: "100%",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "15px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#1565c0"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#1976d2"}
                    >
                        Login
                    </button>
                </form>
                <div style={{ marginTop: "15px" }}>
                    <Link to="" style={{ fontSize: "13px", color: "#1976d2", textDecoration: "none" }}>
                        Forgot Password?
                    </Link>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <span style={{ fontSize: "13px", color: "#555" }}>
                        Don't have an account?
                    </span>
                    <Link to="/signup" style={{ fontSize: "13px", color: "#1976d2", textDecoration: "none", marginLeft: "5px" }}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
