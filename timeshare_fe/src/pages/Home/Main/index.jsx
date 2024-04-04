import React, { useState } from "react";
import "./main.css";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { formatDate, formatDateDDYYMM } from "../../../Components/helpers";

const Main = ({ filteredData, currentPage, pageSize, userInformation }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const searchFilterFunction = (data) => {
    return data.filter((item) => {
      const lowercasedItem = item.timeshareName.toLowerCase();
      const searchDateObj = new Date(searchDate).setHours(0, 0, 0, 0);
      const itemDateObj = new Date(item.publicDate).setHours(0, 0, 0, 0);

      return (
        lowercasedItem.includes(search.toLowerCase()) &&
        (!searchDate || itemDateObj === searchDateObj) &&
        (!searchPrice || item.price <= searchPrice)
      );
    });
  };

  const filteredItems = searchFilterFunction(filteredData);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          TOP HOMESTAY
        </h3>
      </div>

      <div className="secContent grid">
        {filteredItems
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map(
            ({
              timeshareId,
              image,
              timeshareName,
              address,
              grade,
              price,
              detail,
              userBooked,
              dateFrom,
              dateTo,
            }) => {
              return (
                <div
                  key={timeshareId}
                  data-aos="fade-up"
                  className="singleDestination"
                >
                  <div className="new-ribbon secondary">${price} / day</div>
                  <div className="imageDiv">
                    <img
                      src={
                        image && image != "string"
                          ? image
                          : "https://www.cet.edu.vn/wp-content/uploads/2019/03/tinh-hinh-timeshare-tai-viet-nam.jpg"
                      }
                      alt={timeshareName}
                    />
                  </div>

                  <div className="cardInfo">
                    <div className="cardBody-title">
                      <div>
                        <h1 className="destTitle">{timeshareName}</h1>
                        <span className="continent flex">
                          <IoLocationOutline className="icon" />
                          <span className="name">{address}</span>
                        </span>
                        <span
                          className="continent flex"
                          style={{ marginTop: "3px" }}
                        >
                          <CiCalendarDate
                            className="icon"
                            style={{ fontSize: "20px", marginRight: "3px" }}
                          />
                          <span className="name">
                            {formatDateDDYYMM(dateFrom) +
                              " - " +
                              formatDateDDYYMM(dateTo)}
                          </span>
                        </span>
                      </div>
                      <div className="grade">
                        <span style={{ fontSize: "0.85rem" }}>
                          <IoHeart
                            style={{ fontSize: "1.8rem", color: "red" }}
                          />
                          {grade}
                        </span>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{detail}</p>
                    </div>

                    {userBooked ? (
                      <button
                        className="btn flex"
                        style={{
                          backgroundColor: "#f44336",
                          cursor: "not-allowed",
                        }}
                      >
                        This place have already booked
                      </button>
                    ) : (
                      <button
                        className="btn flex"
                        onClick={() => {
                          navigate(`/timeshare-detail/${timeshareId}`);
                        }}
                      >
                        Details
                      </button>
                    )}
                  </div>
                </div>
              );
            }
          )}
      </div>
    </section>
  );
};

export default Main;
