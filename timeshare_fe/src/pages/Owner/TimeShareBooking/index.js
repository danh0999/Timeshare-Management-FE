import Search from "antd/es/input/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import { useParams } from "react-router-dom";
import PaginationCustom from "../../../Components/Painganation";
import { useNavigate } from "react-router-dom/dist";

function TimeShareBookingPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const { id } = useParams();
  const [filteredData, setFilteredData] = useState(data || []);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (value, _e, info) => {
    if (!value) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) =>
          item.userInfo?.userName.toLowerCase().indexOf(value.toLowerCase()) !==
          -1
      );
      setFilteredData(filtered);
    }
    setPagination({ ...pagination, current: 1 });
  };

  const handleFetchData = async () => {
    if (data.length === 1) {
      setData([]);
      return;
    }
    try {
      const getBookingDetail = await axios.get(
        `/BookingRequest/GetBookingByTimeshare/${id}`
      );
      if (
        getBookingDetail.status === 200 &&
        getBookingDetail.data.isSucceed &&
        getBookingDetail.data.message ===
          "Booking request retrieved successfully."
      ) {
        let bookings = getBookingDetail.data?.result;
        setData(bookings);
      }
    } catch (err) {
      console.log("Can't get booking request");
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (reload) handleFetchData();
    const clearTime = setTimeout(() => {
      setReload(false);
    }, 50);
    return () => {
      clearTimeout(clearTime);
    };
  }, [reload]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleUpdateBookings = async (status, bookingId) => {
    if (status === 1) {
      let confirm;
      confirm = window.confirm(
        "Khi bạn đồng ý tất cả các yêu cầu khác sẽ bị hủy bỏ bạn có chắc chắn chứ ?"
      );
      if (confirm) {
        const url =
          status == 1
            ? `/BookingRequest/ConfirmBooking/${bookingId}`
            : `/BookingRequest/DeclineBooking/${bookingId}`;
        try {
          const [updateBooking, getTimeShareDetail] = await Promise.all([
            axios.post(url),
            axios.get(`/timeshare/GetTimeshareById/${id}`),
          ]);
          if (updateBooking.status === 200 && updateBooking.data.isSucceed) {
            const ortherBooking = data.filter(
              (item) => item.bookingRequestId !== bookingId
            );
            const promise = ortherBooking.map(async (item) => {
              const result = await axios.post(
                `/BookingRequest/DeclineBooking/${item?.bookingRequestId}`
              );
              return result;
            });
            let timeShareData = getTimeShareDetail?.data.result;
            const [updateOtherBooking, updateTimeShareStatus] =
              await Promise.all([
                promise,
                axios.put(`/timeshare/UpdateTimeshare/${id}`, {
                  ...timeShareData,
                  timeshareStatusId: 4,
                }),
              ]);
            if (updateOtherBooking && updateTimeShareStatus.status === 200) {
              setReload(true);
              alert(updateBooking?.data.message);
              navigate("/timeshare-management");
            }
          } else {
            console.log("Can't update booking request");
          }
        } catch (err) {
          console.log("Can't update booking request", err);
        }
      }
    } else {
      const url =
        status == 1
          ? `/BookingRequest/ConfirmBooking/${bookingId}`
          : `/BookingRequest/DeclineBooking/${bookingId}`;
      try {
        const updateBooking = await axios.post(url);
        if (updateBooking.status === 200 && updateBooking.data.isSucceed) {
          setReload(true);
          alert(updateBooking?.data.message);
        } else {
          console.log("Can't update booking request");
        }
      } catch (err) {
        console.log("Can't update booking request", err);
      }
    }
  };

  return (
    <>
      <section className="main" style={{ marginTop: "2%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "3%",
          }}
        >
          <Search
            placeholder="Search with user name..."
            onSearch={handleFilterChange}
            enterButton
            style={{ padding: "0 3%", maxWidth: "60%" }}
          />
        </div>
        <div className="secContent grid">
          {filteredData.length ? (
            filteredData
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((item, index) => {
                const { bookingRequestId, image, userInfo, bookingDate } = item;
                const newDate = new Date(bookingDate);
                const year = newDate.getFullYear();
                const month = String(newDate.getMonth() + 1).padStart(2, "0");
                const day = String(newDate.getDate()).padStart(2, "0");
                const hours = String(newDate.getHours()).padStart(2, "0");
                const minutes = String(newDate.getMinutes()).padStart(2, "0");
                const date = `${day}-${month}-${year} ${hours}:${minutes}`;
                return (
                  <div
                    data-aos="fade-up"
                    className="singleDestination"
                    key={index}
                    style={{ minHeight: "21rem" }}
                  >
                    <div className="imageDiv">
                      <img
                        src={
                          image ||
                          "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                        }
                        alt={userInfo?.userName}
                      />
                    </div>

                    <div className="cardInfo">
                      <div className="cardBody-title">
                        <div>
                          <h1 className="destTitle">
                            {userInfo?.userName || "User Name"}
                          </h1>
                          <span
                            className="continent flex"
                            style={{ marginTop: "10px" }}
                          >
                            <span className="name">
                              Date: {date || "Booking Date"}
                            </span>
                          </span>{" "}
                        </div>
                      </div>

                      <div className="desc" style={{ height: "20px" }}>
                        <p>Phone: {userInfo?.userPhone || "Number"}</p>
                      </div>

                      <div
                        className="fees flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <button
                          className="btn flex"
                          onClick={() => {
                            handleUpdateBookings(1, bookingRequestId);
                          }}
                          style={{
                            width: "48%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#319795",
                          }}
                        >
                          <CiCircleCheck
                            style={{ fontSize: "1.2rem", marginRight: "3px" }}
                          />{" "}
                          Accept
                        </button>
                        <button
                          className="btn flex"
                          onClick={() => {
                            handleUpdateBookings(2, bookingRequestId);
                          }}
                          style={{
                            width: "48%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#d34836",
                          }}
                        >
                          <CiCircleRemove
                            style={{ fontSize: "1.2rem", marginRight: "3px" }}
                          />
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <h1>List Booking empty</h1>
          )}
        </div>
      </section>
    </>
  );
}

export default TimeShareBookingPage;
