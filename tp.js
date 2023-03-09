import React, { createContext, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { loginUser } from "api/ristoFansApi";
import { verifyOtpMail } from "api/ristoFansApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchUserProfile } from "api/ristoFansApi";

const AuthContext = createContext(null);

const notifyLogin = () =>
  toast.success("Logged in successfully ! ", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
const notifyLoginError = () =>
  toast.error("Oops ! Could not sign in . please try again !", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showMenuBar, setMenuBarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(
    localStorage.getItem("access_token") ? true : false
  );

  const initialUserState = {
    name: localStorage.getItem("userName"),
    email: localStorage.getItem("userEmail"),
    img: localStorage.getItem("userImage"),
  };

  const [user, setUser] = useState(initialUserState);
  const [profile, setProfile] = useState({
    profileName: localStorage.getItem("profileName"),
    profileImg: localStorage.getItem("profileImg"),
  });

  const toggleMenuBar = () => {
    // console.log("clicked")
    setMenuBarOpen(!showMenuBar);
  };

  const login = async () => {
    // setUser(user);

    await loginUser({
      strategy: "google",
      email: localStorage.getItem("userEmail"),
      token: localStorage.getItem("tokenId"),

      role: "fan",
    });
    localStorage.removeItem("tokenId");
    const res = await fetchUserProfile();

    if (res.status === 200) {
      setProfile({
        profileOrders: res.data.orders.count,
        profilePayments: res.data.payments.count,
        profileName: res.data.user_info.name,
        profileImg: res.data.user_info.profile_image,
      });
      setIsLoggedin(true);
      if (state) {
        if (state.redirectBack) {
          let campaign_uid = state.campaignUuid;
          navigate(`/payment/${campaign_uid}`, {
            state: { redirectBack: true },
          });
        } else if (state.redirectToProfile) {
          navigate("/profile");
        }
      } else {
        navigate("/profile");
      }
      notifyLogin();
    }
    if (res.status !== 200) {
      notifyLoginError();
    }
  };

  const loginWithEmail = async (data) => {
    await verifyOtpMail({
      identity: data.mail,
      medium: "email",
      otp: data.otp,
      lookup: "email",
    });

    const res = await fetchUserProfile();

    if (res.status === 200) {
      setProfile({
        profileOrders: res.data.orders.count,
        profilePayments: res.data.payments.count,
        profileName: res.data.user_info.name,
        profileImg: res.data.user_info.profile_image,
      });
      setIsLoggedin(true);
      if (state) {
        if (state.redirectBack) {
          let campaign_uid = state.campaignUuid;
          navigate(`/payment/${campaign_uid}`, {
            state: { redirectBack: true },
          });
        } else if (state.redirectToProfile) {
          navigate("/profile");
        }
      } else {
        navigate("/profile");
      }
      notifyLogin();
    }
    if (res.status !== 200) {
      notifyLoginError();
    }
  };

  const liginWithMobile = async (data) => {
    await verifyOtpMail({
      identity: data.mail,
      medium: "text",
      otp: data.otp,
      lookup: "mobile",
    });

    const res = await fetchUserProfile();

    if (res.status === 200) {
      setProfile({
        profileOrders: res.data.orders.count,
        profilePayments: res.data.payments.count,
        profileName: res.data.user_info.name,
        profileImg: res.data.user_info.profile_image,
      });
      setIsLoggedin(true);
      if (state) {
        if (state.redirectBack) {
          navigate("/payment", { state: { redirectBack: true } });
        } else if (state.redirectToProfile) {
          navigate("/profile");
        }
      } else {
        navigate("/profile");
      }
      notifyLogin();
    }
    if (res.status !== 200) {
      notifyLoginError();
    }
  };

  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userImage");

    localStorage.removeItem("tokenId");
    localStorage.removeItem("access_token");
    localStorage.removeItem("profileName");
    localStorage.removeItem("profileImg");
    setIsLoggedin(false);
    setProfile(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn,
        profile,
        loginWithEmail,
        liginWithMobile,
        showMenuBar,
        setMenuBarOpen,
        toggleMenuBar,
      }}
    >
      <ToastContainer />

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
