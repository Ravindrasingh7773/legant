// import React, { useState, useContext } from "react";
// import styles from "./style.module.css";
// import { Col, Container, Row } from "react-bootstrap";
// import img from "../../assets/images/sign-up-in-img.png";
// import { Link } from "react-router-dom";
// import { UserContext } from "../../context/userDataProvider";
// import Logo from "../logo";
// import EyeIcon from "../../icons/eyeIcon";

// const SignUp = () => {
//   const [formValue, setFormValue] = useState({
//     name: "",
//     Username: "",
//     email: "",
//     password: "",
//     terms: false,
//   });
//   const { saveUserDetails } = useContext(UserContext);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormValue({
//       ...formValue,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     if (formValue) {
//       // Call saveUserDetails to save the user data
//       saveUserDetails(formValue);
//       console.log("Form submitted with:", formValue); // Log for debugging
//     } else {
//       console.log("Form values are missing");
//       alert("You must agree to the terms.");
//     }
//     alert("Form submitted successfully");
//     console.log("Form submitted successfully", formValue);
//   };

//   return (
//     <Container>
//       <Row className="align-items-center">
//         <Col lg={6}>
//           <div className={styles.image}>
//             <img src={img} alt="img" />
//             <div className={styles.logo}>
//               <Logo />
//             </div>
//           </div>
//         </Col>
//         <Col lg={6}>
//           <div className={styles.sign}>
//             <div className={styles.title}>Sign up</div>
//             <div className={styles.description}>
//               Already have an account? <Link to="/signIn">Sign in</Link>
//             </div>
//             <form className={styles.form} onSubmit={handleOnSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 value={formValue.name}
//                 placeholder="Your name"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="Username"
//                 value={formValue.Username}
//                 placeholder="Username"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formValue.email}
//                 placeholder="Email address"
//                 onChange={handleInputChange}
//               />
//               <div className={styles.password}>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formValue.password}
//                   placeholder="Password"
//                   onChange={handleInputChange}
//                 /> 
//               </div>
//               <div className={styles.check_input}>
//                 <input
//                   type="checkbox"
//                   name="terms"
//                   checked={formValue.terms}
//                   onChange={handleInputChange}
//                 />
//                 <div className={styles.checkbox}>
//                   I agree with <span>Privacy Policy</span> and
//                   <span>Terms of Use</span>
//                 </div>
//               </div>
//               <div className={styles.button}>
//                 <button type="submit">Submit</button>
//               </div>
//             </form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignUp; 
import React, { useState, useContext } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/images/sign-up-in-img.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userDataProvider";
import Logo from "../logo";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    Username: "",
    email: "",
    password: "",
    terms: false,
  });

  const { signUpUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValue({
      ...formValue,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); 

    const { name, Username, email, password, terms } = formValue;
    if (!name || !Username || !email || !password) {
      alert("Please fill out all fields.");
      return;  
    }
    if (!terms) {
      alert("You must agree to the terms.");
      return;  
    } 
    signUpUser(formValue);
    navigate("/");
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6}>
          <div className={styles.image}>
            <img src={img} alt="img" />
            <div className={styles.logo}>
              <Logo />
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.sign}>
            <div className={styles.title}>Sign up</div>
            <div className={styles.description}>
              Already have an account? <Link to="/signIn">Sign in</Link>
            </div>
            <form className={styles.form} onSubmit={handleOnSubmit}>
              <input
                type="text"
                name="name"
                value={formValue.name}
                placeholder="Your name"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="Username"
                value={formValue.Username}
                placeholder="Username"
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                value={formValue.email}
                placeholder="Email address"
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                value={formValue.password}
                placeholder="Password"
                onChange={handleInputChange}
              />
              <div className={styles.check_input}>
                <input
                  type="checkbox"
                  name="terms"
                  checked={formValue.terms}
                  onChange={handleInputChange}
                />
                <div className={styles.checkbox}>
                  I agree with <span>Privacy Policy</span> and
                  <span>Terms of Use</span>
                </div>
              </div>
              <div className={styles.button}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

 