import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, Card, Flex, List } from "antd";
import { GlobalContext } from "../../provide";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { state } = location;
  const { image, timeshareName, address, price, detail } = state;

  const userContext = useContext(GlobalContext);
  const { userInformation } = userContext;

  const [disable, setDisable] = useState(true);
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

  const handleSubmited = () => {
    alert("Payment Successful");
  };

  return (
    <Flex justify="center" style={{ marginTop: "3%" }}>
      <Card title="Payment" style={{ width: 600, marginRight: "3%" }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Card Name">
            <Input value={userInformation?.Name} readOnly={true} />
          </Form.Item>
          <Form.Item
            label="Card Number"
            name="cardNumber"
            rules={[{ required: true, message: "Field this please!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Expiry Date"
            name="expiryDate"
            rules={[{ required: true, message: "Field this please!" }]}
          >
            <Input placeholder="MM/YY" />
          </Form.Item>
          <Form.Item
            label="CVV/CVC"
            name="cvv"
            rules={[{ required: true, message: "Field this please!" }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ textAlign: "right" }}
            >
              Done
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card>
        <img
          src={
            image && image != "string"
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
        {/* <div style={{ padding: "10px 0", fontWeight: "bold" }}>
          Order total: $600.00
        </div> */}
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
