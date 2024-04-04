// import React, { useContext, useState } from "react";
// import { Form, Input, Button, Card, Flex, List } from "antd";
// import { GlobalContext } from "../../provide";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const PaymentPage = () => {
//   const location = useLocation();
//   const { state } = location;
//   const { image, timeshareName, address, price, detail } = state;

//   const userContext = useContext(GlobalContext);
//   const { userInformation } = userContext;

//   const [disable, setDisable] = useState(true);
//   const [form] = Form.useForm();

//   const onFinish = () => {
//     setDisable(false);
//   };

//   const columns = [
//     {
//       title: timeshareName,
//       description: `$${price}`,
//     },
//     {
//       title: address,
//       description: detail,
//     },
//   ];

//   const handleSubmited = async () => {
//     try {
//       const response = await axios.post("/Payment/CreatePayment", {
//         PaymentName: form.getFieldValue("PaymentName"),
//         PaymentDate: new Date(),
//         Amount: parseInt(price), // Chuyển giá thành số nguyên
//         CardNumber: form.getFieldValue("CardNumber"),
//         Expiration: form.getFieldValue("Expiration"),
//         CVC: form.getFieldValue("CVC"),
//         BookingRequestId: 15, // Thay đổi thành BookingRequestId hợp lệ
//       });

//       if (response.status === 200) {
//         setDisable(true);
//         alert("Payment successful");
//       } else {
//         alert("Failed to create payment. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Payment failed. Please try again later.");
//     }
//   };

//   return (
//     <Flex justify="center" style={{ marginTop: "3%" }}>
//       <Card title="Payment" style={{ width: 600, marginRight: "3%" }}>
//         <Form form={form} layout="vertical" onFinish={onFinish}>
//           <Form.Item
//             label="Payment Name"
//             name="PaymentName"
//             rules={[
//               { required: true, message: "Please enter payment name" },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Card Number"
//             name="CardNumber"
//             rules={[
//               { required: true, message: "Please enter card number" },
//               { pattern: /^\d{16}$/, message: "Card number must be 16 digits" },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Expiration"
//             name="Expiration"
//             rules={[
//               { required: true, message: "Please enter expiration date" },
//               {
//                 pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
//                 message: "Invalid expiration date format. Use MM/YY or MM/YYYY",
//               },
//             ]}
//           >
//             <Input placeholder="MM/YY" />
//           </Form.Item>
//           <Form.Item
//             label="CVC"
//             name="CVC"
//             rules={[
//               { required: true, message: "Please enter CVC" },
//               { pattern: /^\d{3,4}$/, message: "CVC must be a 3 or 4-digit number" },
//             ]}
//           >
//             <Input type="password" />
//           </Form.Item>
//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               style={{ textAlign: "right" }}
//               onClick={handleSubmited}
//             >
//               Done
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//       <Card>
//         <img
//           src={
//             image && image !== "string"
//               ? image
//               : "https://www.cet.edu.vn/wp-content/uploads/2019/03/tinh-hinh-timeshare-tai-viet-nam.jpg"
//           }
//           width={"360px"}
//         />
//         <List
//           itemLayout="horizontal"
//           dataSource={columns}
//           renderItem={(item) => (
//             <List.Item>
//               <List.Item.Meta
//                 title={item.title}
//                 description={item.description}
//               />
//             </List.Item>
//           )}
//         />
//         <Button
//           type="primary"
//           block
//           disabled={disable}
//           onClick={handleSubmited}
//         >
//           Confirm and pay
//         </Button>
//         {disable && (
//           <div
//             style={{
//               padding: "10px 0",
//               fontWeight: "bold",
//               color: "#972417",
//               textAlign: "center",
//             }}
//           >
//             Enter card information
//           </div>
//         )}
//       </Card>
//     </Flex>
//   );
// };

// export default PaymentPage;
import React, { useContext, useState } from "react";
import { Form, Input, Button, Card, Flex, List } from "antd";
import { GlobalContext } from "../../provide";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { image, timeshareName, address, price, detail } = state;

  const userContext = useContext(GlobalContext);
  const { userInformation } = userContext;
  const [card, setCard] = useState({
    cardNumber: "",
    expiration: "",
    cvc: "",
  });

  const [disable, setDisable] = useState(true);
  const [form] = Form.useForm();
  // const [bookingRequestId, setBookingRequestId] = useState(null);

  // useEffect(() => {
  //   console.log(state);
  //   if (state && state.bookingRequestId) {
  //     getRequestById(state.bookingRequestId);
  //   }
  // }, [state]);

  // const getRequestById = async (Id) => {
  //   try {
  //     const response = await axios.get(`/BookingRequest/GetRequestById/${Id}`);
  //     if (response.status === 200 && response.data.isSucceed) {
  //       const { bookingRequestId } = response.data.result; // Lấy giá trị bookingRequestId từ response
  //       setBookingRequestId(bookingRequestId); // Set giá trị vào state
  //     }
  //   } catch (error) {
  //     console.error("Error fetching booking request:", error);
  //   }
  // };

  const onFinish = () => {
    setDisable(false);
  };

  const columns = [
    {
      title: timeshareName,
      description: `$${price}`,
    },
    {
      title: address,
      description: detail,
    },
  ];

  const comfirmPayment = () => {
    setDisable(true);
  };
  const handleSubmited = async () => {
    try {
      const handleUpdateBooking = await axios.post(`/Payment/CreatePayment`, {
        paymentDate: new Date().toISOString(),
        cardNumber: card.cardNumber,
        expiration: card.expiration,
        cvc: card.cvc,
        bookingRequestId: state.bookingRequestId,
        timeshareStatusId: 6,
      });
      if (handleUpdateBooking.status === 200) {
        await axios.put(
          `/BookingRequest/UpdateStatusBooking/${state.bookingRequestId}`,
          {
            bookingRequestId: state.bookingRequestId,
            bookingDate: state.bookingDate,
            timeshareId: state.timeshareId,
            id: state.id,
            timeshareStatusId: 6,
          }
        );
        alert("Payment successful");
        navigate("/history");
      } else {
        alert("Failed to create payment. Please try again later.");
      }
    } catch (err) {
      console.log(err);
    }
    // try {
    //   const response = await axios.post("/Payment/CreatePayment", {
    //     PaymentName: form.getFieldValue("PaymentName"),
    //     PaymentDate: new Date(),
    //     Amount: parseInt(price), // Chuyển giá thành số nguyên
    //     CardNumber: form.getFieldValue("CardNumber"),
    //     Expiration: form.getFieldValue("Expiration"),
    //     CVC: form.getFieldValue("CVC"),
    //     BookingRequestId: bookingRequestId, // Sử dụng bookingRequestId từ state
    //   });
    //   if (response.status === 200) {
    //     alert("Payment successful");
    //   } else {
    //     alert("Failed to create payment. Please try again later.");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Payment failed. Please try again later.");
    // }
  };

  return (
    <Flex justify="center" style={{ marginTop: "3%" }}>
      <Card title="Payment" style={{ width: 600, marginRight: "3%" }}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Payment Name"
            name="PaymentName"
            rules={[{ required: true, message: "Please enter payment name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Card Number"
            name="CardNumber"
            rules={[
              { required: true, message: "Please enter card number" },
              {
                len: 16,
                message: "Card Number must have 16 digits number",
              },
              {
                pattern: /^[0-9]+$/,
                message: "Just digits only",
              },
            ]}
          >
            <Input
              value={card.cardNumber}
              onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="Expiration"
            name="Expiration"
            rules={[
              { required: true, message: "Please enter expiration date" },
              {
                pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                message: "Invalid expiration date format. Use MM/YY or MM/YYYY",
              },
            ]}
          >
            <Input
              placeholder="MM/YY"
              value={card.expiration}
              onChange={(e) => setCard({ ...card, expiration: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="CVC"
            name="CVC"
            rules={[
              { required: true, message: "Please enter CVC" },
              {
                pattern: /^\d{3,4}$/,
                message: "CVC must be a 3 or 4-digit number",
              },
            ]}
          >
            <Input
              type="password"
              value={card.cvc}
              onChange={(e) => setCard({ ...card, cvc: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ textAlign: "right" }}
              onClick={comfirmPayment}
            >
              Done
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card>
        <img
          src={
            image && image !== "string"
              ? image
              : "https://www.cet.edu.vn/wp-content/uploads/2019/03/tinh-hinh-timeshare-tai-viet-nam.jpg"
          }
          width={"360px"}
        />
        <List
          itemLayout="horizontal"
          dataSource={columns}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
        <Button
          type="primary"
          block
          disabled={disable}
          onClick={handleSubmited}
        >
          Confirm and pay
        </Button>
        {disable && (
          <div
            style={{
              padding: "10px 0",
              fontWeight: "bold",
              color: "#972417",
              textAlign: "center",
            }}
          >
            Enter card information
          </div>
        )}
      </Card>
    </Flex>
  );
};

export default PaymentPage;
