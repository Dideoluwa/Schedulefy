import { useState, useEffect } from "react";
import Calender from "./components/Calender";
import "./App.css";
import { sendMail } from "./components/api/Mail";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, Navigate } from "react-router";
import Form from "./components/Form";
import Schedule from "./components/Schedule";
import SuccessPage from "./components/SuccessPage";
import AuthForm from "./components/AuthForm";
import TopNav from "./components/TopNav";

function App() {
  let [isActive, setIsActive] = useState(false);
  let [date, setDate] = useState(new Date());
  let [timer, setTimer] = useState("00:00");
  let [dates, setDates] = useState("");
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let [name, setName] = useState("");
  let [purpose, setPurpose] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let { pathname } = useLocation();
  let time = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];
  useEffect(() => {
    const timers = setInterval(() => {
      let month = date.toLocaleString("en-US", { month: "long" });
      let dateNum = date.getDate();
      let year = date.getFullYear();
      setDates(`${dateNum} ${month}, ${year}`);
    }, 10);
    return () => {
      clearInterval(timers);
    };
  }, [date]);
  let loggedIn = useSelector((state) => state.auth.isLoggedIn);
  let userEmail = useSelector((state) => state.auth.email);
  let navigate = useNavigate();
  let navigateBackHAndler = () => {
    if (pathname === "/final") {
      navigate("/form");
    } else {
      navigate("/");
    }
  };

  let resendMessageHandler = () => {
    setLoading(true);
    // setIsActive(false)
    sendMail({ name, purpose, userEmail, email, dates, timer }).then((data) => {
      if (data.err) {
        console.log(data.err);
      } else {
        console.log(data);
        setLoading(false);
      }
    });
    // setIsActive(true)
  };

  let navigateForwardHAndler = () => {
    if (pathname === "/form") {
      setIsActive(false);
      setLoading(true);
      sendMail({ name, purpose, userEmail, email, dates, timer }).then(
        (data) => {
          if (data.err) {
            console.log(data.err);
          } else {
            console.log(data);
            setLoading(false);
            navigate("/final");
          }
        }
      );
      setIsActive(true);
    } else {
      navigate("/form");
    }
  };
  return (
    <div className="main__wrapper1">
      <TopNav />
      <div className="calendar-container1">
        <Routes>
          <Route
            path="/"
            element={
              (loggedIn && (
                <Calender
                  loading={loading}
                  onClickFor={navigateForwardHAndler}
                  onClick={navigateBackHAndler}
                  disabled={isActive}
                  show={show}
                  dates={dates}
                  timer={timer}
                />
              )) ||
              (!loggedIn && <Navigate to="/auth" />)
            }
          >
            <Route
              path="/"
              element={
                <Schedule
                  show={show}
                  setShow={setShow}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  timer={timer}
                  setTimer={setTimer}
                  time={time}
                  date={date}
                  onChange={setDate}
                />
              }
            />
            <Route
              path="form"
              element={
                (loggedIn && (
                  <Form
                    purpose={purpose}
                    setPurpose={setPurpose}
                    name={name}
                    setName={setName}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    email={email}
                    setEmail={setEmail}
                    onClick={navigateForwardHAndler}
                    setIsActive={setIsActive}
                  />
                )) ||
                (!loggedIn && <Navigate to="/auth" />)
              }
            />
          </Route>
          {!loggedIn && <Route path="auth" element={<AuthForm />} />}
          {loggedIn && (
            <Route
              path="/final"
              element={
                <SuccessPage
                  loading={loading}
                  onClick={resendMessageHandler}
                  setName={setName}
                  setPhoneNumber={setPhoneNumber}
                  setEmail={setEmail}
                  email={email}
                  dates={dates}
                  timer={timer}
                />
              }
            />
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
