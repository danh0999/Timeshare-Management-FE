// import "./timeshare-detail.css";
// import { FaBed, FaBath, FaUtensils } from "react-icons/fa";
// import { GiFamilyHouse } from "react-icons/gi";
// import { FaInfoCircle, FaRegMoneyBillAlt } from "react-icons/fa";
// import { useContext, useEffect, useState } from "react";
// import { GlobalContext } from "../../provide";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function TimeShareDetailPage() {
//   const userContext = useContext(GlobalContext);
//   const { isLogin, userInformation } = userContext;
//   const location = useLocation();
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState({});
//   const [user, setUser] = useState({});
//   const [termsAccepted, setTermsAccepted] = useState(false);

//   const handleAcceptTerms = () => {
//     setTermsAccepted(!termsAccepted);
//   };

//   const {
//     timeshareId,
//     image,
//     timeshareName,
//     address,
//     price,
//     detail,
//     place,
//     timeshareStatusId,
//   } = data;

//   const handleFetchData = async () => {
//     if (id) {
//       try {
//         const [getTimeShare, getPlace, getTimeShareStatus] = await Promise.all([
//           axios.get(`/timeshare/GetTimeshareById/${id}`),
//           axios.get("/Place/GetAllPlace"),
//           axios.get("/TimeshareStatus/GetAllTimeshareStatus"),
//         ]);
//         if (
//           getTimeShare.status === 200 &&
//           getTimeShare.data.isSucceed &&
//           getTimeShare.data.message === "Timeshare retrieved successfully." &&
//           getPlace.status === 200 &&
//           getPlace.data.isSucceed &&
//           getPlace.data.message === "Place retrived successfully." &&
//           getTimeShareStatus.status === 200 &&
//           getTimeShareStatus.data.isSucceed &&
//           getTimeShareStatus.data.message ===
//             "Timeshare status retrived successfully."
//         ) {
//           let timeshare = getTimeShare.data?.result;
//           let places = getPlace.data?.result;
//           let timeshareStatuses = getTimeShareStatus.data?.result;
//           const mergedObjects = {
//             ...timeshare,
//             place: places.find((place) => place.placeId === timeshare.placeId),
//             timeshareStatuse: timeshareStatuses.find(
//               (status) =>
//                 status.timeshareStatusId === timeshare.timeshareStatusId
//             ),
//           };
//           setData(mergedObjects);
//           const getUserDetail = await axios.get(
//             `/User/GetUserById/${mergedObjects?.id}`
//           );
//           if (getUserDetail.status === 200) {
//             setUser(getUserDetail.data.result);
//           }
//         } else {
//           console.log("Can't get time share");
//         }
//       } catch (err) {
//         console.log("Can't get time share");
//       }
//     } else {
//       setData(location.state);
//     }
//   };

//   const handleBookTimeShare = async () => {
//     if (!isLogin) {
//       alert("You must be a user to request a book time share");
//       navigate("/register");
//     } else if (timeshareStatusId === 4) {
//       navigate("/payment", { state: data });
//     } else {
//       let payload = {
//         bookingDate: new Date().toISOString(),
//         timeshareId: timeshareId,
//         id: userInformation[
//           "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
//         ],
//       };
//       try {
//         const requestTimeShare = await axios.post(
//           `/BookingRequest/CreateBookingRequest`,
//           payload
//         );
//         if (
//           requestTimeShare.status === 200 &&
//           requestTimeShare.data.isSucceed &&
//           requestTimeShare.data.message === "Booking created successfully"
//         ) {
//           alert(requestTimeShare.data.message);
//           navigate("/");
//         } else {
//           alert("Can't booking this timeshare");
//         }
//       } catch (e) {
//         alert("Can't booking this timeshare");
//       }
//     }
//   };

//   useEffect(() => {
//     handleFetchData();
//   }, []);
//   return (
//     <>
//       <div className="main-information">
//         <div className="main-left">
//           <div className="rental-card">
//             <div className="rental-card-header">
//               <div className="resort-image image image-tilt_left hide-for-small-only ">
//                 <div
//                   className="resort-frame-image background-cover"
//                   style={{
//                     backgroundImage: `url(${
//                       image && image !== "string"
//                         ? image
//                         : "https://images.huffingtonpost.com/2016-09-30-1475220243-847513-Timeshare.jpg"
//                     })`,
//                   }}
//                 ></div>
//               </div>
//               <div className="timeshare-title">
//                 <h3>{place?.placeName}</h3>
//                 <h2 className="timeshare-details-title">{timeshareName}</h2>
//                 <h4>{address}</h4>
//               </div>
//             </div>

//             <div className="rental-info">
//               <div>
//                 <div className="info-section d-flex">
//                   <FaBed className="icon" />
//                   <div
//                     style={{
//                       padding: "0 0.7142857143rem 1.4285714286rem",
//                       fontSize: "1rem",
//                       lineHeight: 1.5,
//                       fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
//                     }}
//                   >
//                     <p>3 Bedrooms</p>
//                     <p>Sleeps 8</p>
//                     <p>Beds: 3 King, 1 Sofa bed</p>
//                   </div>
//                 </div>
//                 <div className="info-section d-flex">
//                   <FaBath className="icon" />
//                   <div
//                     style={{
//                       padding: "0 0.7142857143rem 1.4285714286rem",
//                       fontSize: "1rem",
//                       lineHeight: 1.5,
//                       fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
//                     }}
//                   >
//                     <p>2 Bathrooms</p>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="info-section d-flex">
//                   <GiFamilyHouse className="icon" />
//                   <div
//                     style={{
//                       padding: "0 0.7142857143rem 1.4285714286rem",
//                       fontSize: "1rem",
//                       lineHeight: 1.5,
//                       fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
//                     }}
//                   >
//                     <p>3 Bedroom Villa</p>
//                     <p>Building/Unit: Unassigned</p>
//                     <p>View: Oceanfront</p>
//                   </div>
//                 </div>
//                 <div className="info-section d-flex">
//                   <FaUtensils className="icon" />
//                   <div
//                     style={{
//                       padding: "0 0.7142857143rem 1.4285714286rem",
//                       fontSize: "1rem",
//                       lineHeight: 1.5,
//                       fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
//                     }}
//                   >
//                     <p>Full kitchen</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ///tabs */}
//           <dl className="tabs">
//             <dd id="resortInfoTabHeader" className="">
//               <a
//                 href="/posting/R1171762/resort-info"
//                 data-select-tab="resortInfo"
//               >
//                 About the detail TimeShare
//               </a>
//             </dd>
//           </dl>
//           {/* /// */}
//           <div className="member-info-container">
//             <div className="rental-card-detail">
//               <div className="rental-card-header">
//                 <div
//                   className="resort-image image image-tilt_left hide-for-small-only "
//                   style={{
//                     backgroundColor: "rgba(0,0,0,0.3)",
//                     minWidth: "11rem",
//                     minHeight: "11rem",
//                     height: "11.214286 rem",
//                     width: "11.071429 rem",
//                     top: 0,
//                     left: 0,
//                   }}
//                 >
//                   <div
//                     className="resort-frame-image background-cover"
//                     style={{
//                       backgroundImage: `url(${
//                         image && image !== "string"
//                           ? image
//                           : "https://images.huffingtonpost.com/2016-09-30-1475220243-847513-Timeshare.jpg"
//                       })`,
//                       height: "11rem",
//                     }}
//                   ></div>
//                 </div>
//                 <div
//                   className="timeshare-title"
//                   style={{ textAlign: "left", marginLeft: "20px" }}
//                 >
//                   <h3 className="timeshare-details-title">{timeshareName}</h3>
//                   <h5>{address}</h5>
//                   <h4>{detail}</h4>
//                 </div>
//               </div>
//             </div>
//             {!isLogin ? (
//               <>
//                 <div className="member-info-alert">
//                   <FaInfoCircle size={24} className="info-icon" />
//                   <span>
//                     Contact information and additional posting details available
//                     to TimeShare Members only
//                   </span>
//                 </div>
//                 <button
//                   className="btn-member"
//                   onClick={() => navigate("/register")}
//                 >
//                   BECOME A MEMBER
//                 </button>
//                 <div className="member-info-login">
//                   Already registered? <a href="/login">Sign in »</a>
//                 </div>
//               </>
//             ) : null}
//           </div>
//         </div>
//         <div className="main-right">
//           <div className="booking-card">
//             <div className="price-info">
//               <FaRegMoneyBillAlt className="money-icon" />
//               <span className="price">${price}</span>
//             </div>
//             <button
//               className="btn-request"
//               onClick={handleBookTimeShare}
//               disabled={!termsAccepted}
//             >
//               {!isLogin
//                 ? "NEED BECOME A MEMBER"
//                 : timeshareStatusId === 4
//                 ? " ACCEPT PAYMENT"
//                 : "BOOKING"}
//             </button>
//             {!termsAccepted && (
//               <p style={{ color: "red", marginTop: "10px" }}>
//                 Please accept the terms before booking.
//               </p>
//             )}

//             <hr />
//             <div className="poster-info">
//               <div className="poster-avatar">KC</div>
//               <div className="poster-details">
//                 <span className="poster-name">
//                   Posted by{" "}
//                   <p style={{ marginLeft: "3px", color: "#e74c3c" }}>
//                     {user?.userName}
//                   </p>
//                 </span>
//                 <span className="member-since">Member since 2023</span>
//               </div>
//             </div>
//             <h3 className="ren">Rental Terms</h3>
//             <div className="terms-and-conditions">
//               <label htmlFor="termsCheckbox" className="terms-checkbox">
//                 <span id="rentalAgreement">
//                   I have read the{" "}
//                   <Link to="/agreement" className="agreement-link">
//                     Rental Agreement
//                   </Link>
//                   , and agree to all <span className="nowrap">terms.</span>
//                 </span>
//                 <input
//                   type="checkbox"
//                   id="termsCheckbox"
//                   checked={termsAccepted}
//                   onChange={handleAcceptTerms}
//                 />
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TimeShareDetailPage;

import "./timeshare-detail.css";
import { FaBed, FaBath, FaUtensils } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { FaInfoCircle, FaRegMoneyBillAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../provide";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatDateDDYYMM } from "../../Components/helpers";

function TimeShareDetailPage() {
  const userContext = useContext(GlobalContext);
  const { isLogin, userInformation } = userContext;
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [bookingUserInformation, setBookingUserInformation] = useState(false);
  const [userBooking, setUserBooking] = useState({});
  const [checkBooked, setCheckBooked] = useState(false);

  const handleAcceptTerms = () => {
    setTermsAccepted(!termsAccepted);
  };

  const {
    timeshareId,
    image,
    timeshareName,
    address,
    price,
    detail,
    place,
    timeshareStatusId,
    dateFrom,
    dateTo,
  } = data;

  const handleFetchData = async () => {
    if (id) {
      try {
        const [getTimeShare, getPlace, getTimeShareStatus, getBookingDetail] =
          await Promise.all([
            axios.get(`/timeshare/GetTimeshareById/${id}`),
            axios.get("/Place/GetAllPlace"),
            axios.get("/TimeshareStatus/GetAllTimeshareStatus"),
            axios.get(
              `/BookingRequest/GetBookingByUserId/${userInformation["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
            ),
          ]);
        if (
          getTimeShare.status === 200 &&
          getTimeShare.data.isSucceed &&
          getTimeShare.data.message === "Timeshare retrieved successfully." &&
          getPlace.status === 200 &&
          getPlace.data.isSucceed &&
          getPlace.data.message === "Place retrived successfully." &&
          getTimeShareStatus.status === 200 &&
          getTimeShareStatus.data.isSucceed &&
          getTimeShareStatus.data.message ===
            "Timeshare status retrived successfully."
        ) {
          let timeshare = getTimeShare.data?.result;
          let places = getPlace.data?.result;
          let timeshareStatuses = getTimeShareStatus.data?.result;
          const mergedObjects = {
            ...timeshare,
            place: places.find((place) => place.placeId === timeshare.placeId),
            timeshareStatuse: timeshareStatuses.find(
              (status) =>
                status.timeshareStatusId === timeshare.timeshareStatusId
            ),
          };
          setData(mergedObjects);
          const getUserDetail = await axios.get(
            `/User/GetUserById/${mergedObjects?.id}`
          );
          if (getUserDetail.status === 200) {
            setUser(getUserDetail.data.result);
          }
          if (
            getBookingDetail.status === 200 &&
            getBookingDetail.data.isSucceed &&
            getBookingDetail.data.message ===
              "Timeshares retrieved successfully."
          ) {
            let bookings = getBookingDetail.data?.result;
            const getBookingInformation = bookings.find(
              (item) =>
                item.timeshareId === parseInt(id) &&
                item.timeshareStatusId === 1
            );
            if (getBookingInformation) setBookingUserInformation(true);
            const getUserBooking = bookings.find(
              (item) =>
                item.timeshareId === parseInt(id) &&
                item.timeshareStatusId === 2
            );
            if (getUserBooking) setUserBooking(getUserBooking);
            const checkTimeShareBooked = bookings.find(
              (item) =>
                item.timeshareId === parseInt(id) &&
                item.timeshareStatusId === 6
            );
            if (checkTimeShareBooked) setCheckBooked(true);
          }
        } else {
          console.log("Can't get time share");
        }
      } catch (err) {
        console.log("Can't get time share");
      }
    } else {
      setData(location.state);
    }
  };
  const handleDeclinePayment = async () => {
    if (isLogin) {
      try {
        const getBookingDetail = await axios.get(
          `/BookingRequest/GetBookingByUserId/${userInformation["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
        );
        if (
          getBookingDetail.status === 200 &&
          getBookingDetail.data.isSucceed &&
          getBookingDetail.data.message === "Timeshares retrieved successfully."
        ) {
          let bookings = getBookingDetail.data?.result;
          const getBookingInformation = bookings.find(
            (item) => item.timeshareId === parseInt(id)
          );
          const bookingId = getBookingInformation.bookingRequestId;
          if (bookingId) {
            const cancelPayment = await axios.post(
              `/BookingRequest/CancelBooking/${bookingId}`
            );
            if (
              cancelPayment.status === 200 &&
              cancelPayment.data.isSucceed &&
              cancelPayment.data.message === "Booking cancel successfully"
            ) {
              alert(cancelPayment.data.message);
              navigate("/");
            }
          }
        }
      } catch (err) {
        console.log("Can't get booking request");
      }
    }
  };

  const handleBookTimeShare = async () => {
    if (!isLogin) {
      alert("You must be a user to request a book time share");
      navigate("/register");
    } else if (bookingUserInformation || checkBooked) {
      return;
    } else if (timeshareStatusId === 4) {
      navigate("/payment", { state: { ...data, ...userBooking } });
    } else {
      let payload = {
        bookingDate: new Date().toISOString(),
        timeshareId: timeshareId,
        id: userInformation[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ],
      };
      try {
        const requestTimeShare = await axios.post(
          `/BookingRequest/CreateBookingRequest`,
          payload
        );
        if (
          requestTimeShare.status === 200 &&
          requestTimeShare.data.isSucceed &&
          requestTimeShare.data.message === "Booking created successfully"
        ) {
          alert(requestTimeShare.data.message);
          navigate("/");
        } else {
          alert("Can't booking this timeshare");
        }
      } catch (e) {
        alert("Can't booking this timeshare");
      }
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (!termsAccepted && isLogin) {
      alert("Please accept the terms before booking.");
    }
  }, [termsAccepted, isLogin]);

  const dateToFormat = new Date(dateTo);
  const dateFromFormat = new Date(dateFrom);

  const diffInTime = dateToFormat.getTime() - dateFromFormat.getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24);

  const pricePerDay = (price * diffInDays || 0).toFixed(0);

  return (
    <>
      <div className="main-information">
        <div className="main-left">
          <div className="rental-card">
            <div className="rental-card-header">
              <div className="resort-image image image-tilt_left hide-for-small-only ">
                <div
                  className="resort-frame-image background-cover"
                  style={{
                    backgroundImage: `url(${
                      image && image !== "string"
                        ? image
                        : "https://images.huffingtonpost.com/2016-09-30-1475220243-847513-Timeshare.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="timeshare-title">
                <h3>{place?.placeName}</h3>
                <h2 className="timeshare-details-title">{timeshareName}</h2>
                <h4>{address}</h4>
                <h4 style={{ color: "red" }}>
                  {formatDateDDYYMM(dateFrom) +
                    " - " +
                    formatDateDDYYMM(dateTo)}
                </h4>
              </div>
            </div>

            <div className="rental-info">
              <div>
                <div className="info-section d-flex">
                  <FaBed className="icon" />
                  <div
                    style={{
                      padding: "0 0.7142857143rem 1.4285714286rem",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
                    }}
                  >
                    <p>3 Bedrooms</p>
                    <p>Sleeps 8</p>
                    <p>Beds: 3 King, 1 Sofa bed</p>
                  </div>
                </div>
                <div className="info-section d-flex">
                  <FaBath className="icon" />
                  <div
                    style={{
                      padding: "0 0.7142857143rem 1.4285714286rem",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
                    }}
                  >
                    <p>2 Bathrooms</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="info-section d-flex">
                  <GiFamilyHouse className="icon" />
                  <div
                    style={{
                      padding: "0 0.7142857143rem 1.4285714286rem",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
                    }}
                  >
                    <p>3 Bedroom Villa</p>
                    <p>Building/Unit: Unassigned</p>
                    <p>View: Oceanfront</p>
                  </div>
                </div>
                <div className="info-section d-flex">
                  <FaUtensils className="icon" />
                  <div
                    style={{
                      padding: "0 0.7142857143rem 1.4285714286rem",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
                    }}
                  >
                    <p>Full kitchen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ///tabs */}
          <dl className="tabs">
            <dd id="resortInfoTabHeader" className="">
              <a
                href="/posting/R1171762/resort-info"
                data-select-tab="resortInfo"
              >
                About the detail TimeShare
              </a>
            </dd>
          </dl>
          {/* /// */}
          <div className="member-info-container">
            <div className="rental-card-detail">
              <div className="rental-card-header">
                <div
                  className="resort-image image image-tilt_left hide-for-small-only "
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    minWidth: "11rem",
                    minHeight: "11rem",
                    height: "11.214286 rem",
                    width: "11.071429 rem",
                    top: 0,
                    left: 0,
                  }}
                >
                  <div
                    className="resort-frame-image background-cover"
                    style={{
                      backgroundImage: `url(${
                        image && image !== "string"
                          ? image
                          : "https://images.huffingtonpost.com/2016-09-30-1475220243-847513-Timeshare.jpg"
                      })`,
                      height: "11rem",
                    }}
                  ></div>
                </div>
                <div
                  className="timeshare-title"
                  style={{ textAlign: "left", marginLeft: "20px" }}
                >
                  <h3 className="timeshare-details-title">{timeshareName}</h3>
                  <h5>{address}</h5>
                  <h4>{detail}</h4>
                </div>
              </div>
            </div>
            {!isLogin ? (
              <>
                <div className="member-info-alert">
                  <FaInfoCircle size={24} className="info-icon" />
                  <span>
                    Contact information and additional posting details available
                    to TimeShare Members only
                  </span>
                </div>
                <button
                  className="btn-member"
                  onClick={() => navigate("/register")}
                >
                  BECOME A MEMBER
                </button>
                <div className="member-info-login">
                  Already registered? <a href="/login">Sign in »</a>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className="main-right">
          <div className="booking-card">
            <div className="price-info">
              <FaRegMoneyBillAlt className="money-icon" />
              <span className="price">${pricePerDay}</span>
            </div>

            {((isLogin && !bookingUserInformation) || checkBooked) && (
              <div className="terms-and-conditions">
                <label htmlFor="termsCheckbox" className="terms-checkbox">
                  <span id="rentalAgreement">
                    I have read the{" "}
                    <Link to="/agreement" className="agreement-link">
                      Rental Agreement
                    </Link>
                    , and agree to all <span className="nowrap">terms.</span>
                  </span>
                  <input
                    type="checkbox"
                    id="termsCheckbox"
                    checked={termsAccepted}
                    onChange={handleAcceptTerms}
                  />
                </label>
              </div>
            )}

            <button
              className="btn-request accept"
              onClick={handleBookTimeShare}
              disabled={isLogin && !termsAccepted}
            >
              {!isLogin
               ? "NEED BECOME A MEMBER"
               : checkBooked
               ? "YOU NEED TO PAYMENT THIS TIME SHARE"
               : bookingUserInformation
               ? "WAIT FOR APPROVING"
               : timeshareStatusId === 4
               ? "ACCEPT PAYMENT"
               : "BOOKING"}
            </button>

            {bookingUserInformation && (
              <button
                className="btn-request decline"
                onClick={handleDeclinePayment}
              >
                DECLINE PAYMENT
              </button>
            )}

            <hr />
            <div className="poster-info">
              <div className="poster-avatar">KC</div>
              <div className="poster-details">
                <span className="poster-name">
                  Posted by{" "}
                  <p style={{ marginLeft: "3px", color: "#e74c3c" }}>
                    {user?.userName}
                  </p>
                </span>
                <span className="member-since">Member since 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeShareDetailPage;
