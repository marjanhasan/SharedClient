import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUserProfile, signInWithGoogle, logOut, setUser } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (emailError) {
      e.target.email.focus();
      return;
    } else if (passwordError) {
      e.target.password.focus();
      return;
    }

    createUser(email, password)
      .then((res) => {
        setErrorMessage("");
        const loggedUser = res.user;
        setUser(loggedUser);
        form.reset();
        updateUserProfile(name, photo)
          .then(() => {
            console.log(name, photo);
            setErrorMessage("");
            alert("user profile updated");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        logOut();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });

    errorMessage || navigate("/login");
  };
  const handleEmail = (e) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const input = e.target.value;
    setEmail(input);
    if (!emailRegex.test(input)) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
    if (input.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else if (!/\d/.test(input)) {
      setPasswordError("Password must contain at least one digit");
    } else if (!/[a-z]/.test(input)) {
      setPasswordError("Password must contain at least one lowercase letter");
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else {
      setPasswordError("");
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        // setLoading(false)
        console.log(err.message);
        alert(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className=" max-w-sm mx-auto mt-12 ">
          <label className="input-txt">Name</label>
          <input
            className="input-field w-full "
            type="text"
            name="name"
            required
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="input-txt">Email</label>
          <input
            className="input-field w-full"
            type="email"
            name="email"
            required
            placeholder="Your Email"
            onChange={handleEmail}
          />
          {emailError && (
            <span className="text-red-500 py-2 text-lg font-medium">
              {emailError}
            </span>
          )}
          <br />
          <label className="input-txt">Password</label>
          <input
            className="input-field w-full"
            type="password"
            name="password"
            required
            placeholder="Your Password"
            onChange={handlePassword}
          />
          {passwordError && (
            <span className="text-red-500 py-2 text-lg font-medium">
              {passwordError}
            </span>
          )}
          <br />
          <label className="input-txt">Photo URL</label>
          <input
            className="input-field w-full"
            type="text"
            name="photos"
            required
            onChange={(e) => setPhoto(e.target.value)}
          />
          {errorMessage && (
            <span className="text-red-500 py-2 text-lg font-medium">
              {errorMessage}
            </span>
          )}
          <input
            className="w-full p-2 bg-purple-500 gap-2 rounded-md text-white font-semibold cursor-pointer mt-4"
            type="submit"
            value="Register"
          />
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FaGoogle size={16} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
