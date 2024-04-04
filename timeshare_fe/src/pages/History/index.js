import React, { useContext, useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";
import { GlobalContext } from "../../provide";
import { formatDate } from "../../Components/helpers";
import { EyeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const HistoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const userContext = useContext(GlobalContext);
  const { userInformation } = userContext;
  const handleFetchData = async () => {
    try {
      let url = location.pathname.includes("payment-history")
        ? `/Payment/GetPaymentByUserId/${userInformation["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
        : `/BookingRequest/GetBookingByUserId/${userInformation["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`;
      const getBookingDetail = await axios.get(url);
      if (getBookingDetail.status === 200 && getBookingDetail.data.isSucceed) {
        let bookings = getBookingDetail.data?.result;
        setData(bookings.reverse());
      }
    } catch (err) {
      console.log("Can't get booking request");
    }
  };

  const columns = location.pathname.includes("payment-history")
    ? [
        {
          title: "Id",
          dataIndex: "paymentId",
          key: "paymentId",
          render: (text) => <p style={{ fontWeight: 600 }}>{text}</p>,
          filters: data.map((item) => {
            return {
              text: item.paymentId,
              value: item.paymentId,
            };
          }),
          onFilter: (value, record) => record.paymentId === value,
          sorter: (a, b) => a.paymentId - b.paymentId,
        },
        {
          title: "Payment Date",
          dataIndex: "paymentDate",
          key: "paymentDate",
          render: (text) => <p>{formatDate(text)}</p>,
        },
        {
          title: "Amount",
          dataIndex: "amount",
          key: "amount",
        },
        {
          title: "Booking Id",
          dataIndex: "bookingRequestId",
          key: "bookingRequestId",
          render: (text) => (
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={() =>
                navigate(`/history`, {
                  state: { bookingRequestId: text },
                })
              }
            >
              {text} <EyeOutlined style={{ marginLeft: "8px" }} />
            </a>
          ),
        },
        {
          title: "Status",
          key: "timeshareStatusId",
          dataIndex: "timeshareStatusId",
          render: (status) => (
            <>
              {status === 1 ? (
                <Tag color={"yellow"}>Pending</Tag>
              ) : status === 2 ? (
                <Tag color={"green"}>Accept</Tag>
              ) : status === 3 ? (
                <Tag color={"volcano"}>Decline</Tag>
              ) : status === 5 ? (
                <Tag color={"volcano"}>Payment Cancel</Tag>
              ) : status === 6 ? (
                <Tag color={"green"}>Payment Success</Tag>
              ) : null}
            </>
          ),
        },
      ]
    : [
        {
          title: "Id",
          dataIndex: "bookingRequestId",
          key: "bookingRequestId",
          render: (text) => <p style={{ fontWeight: 600 }}>{text}</p>,
          filters: data.map((item) => {
            return {
              text: item.bookingRequestId,
              value: item.bookingRequestId,
            };
          }),
          defaultFilteredValue: location.state?.bookingRequestId,
          onFilter: (value, record) => {
            console.log(location);
            let result = record.bookingRequestId === value;
            return result;
          },
          sorter: (a, b) => a.bookingRequestId - b.bookingRequestId,
        },
        {
          title: "Booking Date",
          dataIndex: "bookingDate",
          key: "bookingDate",
          render: (text) => <p>{formatDate(text)}</p>,
        },
        {
          title: "TimeShare Id",
          dataIndex: "timeshareId",
          key: "timeshareId",
          render: (text) => (
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => navigate(`/timeshare-detail/${text}`)}
            >
              {text} <EyeOutlined style={{ marginLeft: "8px" }} />
            </a>
          ),
        },
        {
          title: "Booking Status",
          key: "timeshareStatusId",
          dataIndex: "timeshareStatusId",
          render: (status) => (
            <>
              {status === 1 ? (
                <Tag color={"yellow"}>Pending</Tag>
              ) : status === 2 ? (
                <Tag color={"green"}>Accept</Tag>
              ) : status === 3 ? (
                <Tag color={"volcano"}>Decline</Tag>
              ) : status === 5 ? (
                <Tag color={"volcano"}>Payment Cancel</Tag>
              ) : status === 6 ? (
                <Tag color={"green"}>Payment Success</Tag>
              ) : null}
            </>
          ),
        },
      ];

  useEffect(() => {
    handleFetchData();
  }, [location.pathname]);
  return (
    <div style={{ margin: "3% 3% 0" }}>
      <h1 style={{ marginBottom: "1%" }}>Booking History</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default HistoryPage;
