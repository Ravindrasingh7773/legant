// import React,{useState} from "react";
// import styles from "./style.module.css";
// import { Col, Container, Row } from "react-bootstrap";
// import img from "../../assets/images/sign-up-in-img.png"; 
// import Button from "../button";
// import { Link } from "react-router-dom";
// import Logo from "../logo";

// const SignIn = () => {

  
//   const [formValues, setFormValues] = useState({
//     username: "",
//     password: "",
//   });


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted successfully", formValues);
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
//             <div className={styles.title}>Sign In</div>
//             <div className={styles.description}>
//               Already have an account?<Link to="#"> Sign up</Link>
//             </div>
//             <form className={styles.form} onSubmit={handleSubmit}>
//               <input type="email" placeholder="Your usernam or email address"   value={formValues.username}
//                   onChange={handleInputChange} />
//               <input type="password" placeholder="Password" 
//                     value={formValues.password}
//                     onChange={handleInputChange} />
//               <div className={styles.check_input}>
//                 <div className={styles.remember}>
//                   <input type="checkbox" />
//                   <div className={styles.checkbox}>Remember me</div>
//                 </div>
//                 <Link to="#">Forgot password?</Link>
//               </div>
//               <div className={styles.button}>
//                 <Button
//                   btn={true}
//                   title={"Sign In"}
//                   size={"b_medium"}
//                   customClass={styles.btn}
//                 />
//               </div>
//             </form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignIn;
 

import React, { useState, useContext } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/images/sign-up-in-img.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userDataProvider";
import Logo from "../logo";
import Button from "../button";

const SignIn = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { signInUser } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signInUser(formValues.email, formValues.password);
    if (success) {
      alert("Login successful");
    }
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
            <div className={styles.title}>Sign In</div>
            <div className={styles.description}>
              Don't have an account? <Link to="/signUp">Sign up</Link>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formValues.email}
                placeholder="Your email address"
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                value={formValues.password}
                placeholder="Password"
                onChange={handleInputChange}
              />
              <div className={styles.check_input}>
                <div className={styles.remember}>
                  <input type="checkbox" />
                  <div className={styles.checkbox}>Remember me</div>
                </div>
                <Link to="#">Forgot password?</Link>
              </div>
              <div className={styles.button}>
               
               <input type="submit" value="submit" />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;

