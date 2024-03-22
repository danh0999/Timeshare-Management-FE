import { useContext, useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../provide";
import axios from 'axios';

const Register = () => {
  const navigation = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const loginContext = useContext(GlobalContext);
  const { setIsLogin, setUserInformation, isLogin } = loginContext;

  const handleRegisterFunction = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        // Gửi dữ liệu đăng ký tới endpoint
        const response = await axios.post('/Auth/register', data);
        
        // Kiểm tra phản hồi từ máy chủ
        if (response.status === 200) {
          // Đăng ký thành công
          alert("Register Success");
          navigation("/");
        } else {
          // Đăng ký không thành công, xử lý tùy theo phản hồi từ máy chủ
          console.error("Registration failed:", response.data.message);
        }
      }
    } catch (err) {
      // Xử lý lỗi nếu có
      console.error("Error during registration:", err);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Kiểm tra username
    if (!data.username) {
      formIsValid = false;
      errors["username"] = "Please enter username";
    }

    // Kiểm tra password
    if (!data.password || data.password.length < 8) {
      formIsValid = false;
      errors["password"] = "Password must be at least 8 characters long";
    }

    // Kiểm tra email
    if (!data.email || !data.email.includes('@')) {
      formIsValid = false;
      errors["email"] = "Please enter a valid email address";
    }

    // Kiểm tra tên
    if (!data.name) {
      formIsValid = false;
      errors["name"] = "Please enter name";
    }

    // Kiểm tra số điện thoại
    if (!data.phoneNumber || !data.phoneNumber.startsWith('+84')) {
      formIsValid = false;
      errors["phoneNumber"] = "Please enter a valid phone number starting with +84";
    }

    setErrors(errors);
    return formIsValid;
  };

  useEffect(() => {
    if (isLogin) {
      navigation("/");
    }
  }, [isLogin]);

  return (
    <div className={"registersform"}>
      <div className="flexsForm">
        <h1>Sign Up</h1>
        <div className="dividerSocial"></div>
        <form>
          <div className="textField">
            <label>Name</label>
            <input
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
            <span className="error">{errors["name"]}</span>
          </div>
          <div className="textField">
            <label>User name</label>
            <input
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
            />
            <span className="error">{errors["username"]}</span>
          </div>
          <div className="textField">
            <label>Email</label>
            <input
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <span className="error">{errors["email"]}</span>
          </div>
          <div className="textField">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <span className="error">{errors["password"]}</span>
          </div>
          <div className="textField">
            <label>Phone Number</label>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, phoneNumber: e.target.value });
              }}
            />
            <span className="error">{errors["phoneNumber"]}</span>
          </div>
          <button onClick={(e) => handleRegisterFunction(e)}>SIGN UP</button>
        </form>
      </div>
      <span className="divider"></span>
      <div className="loginsForm">
        <h3>Already have an account!</h3>
        <Link to={"/login"}>
          <button className="registerButton">SIGN IN HERE</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
