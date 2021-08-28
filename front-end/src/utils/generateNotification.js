import { notification } from "antd";

const generateNotification = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
    placement: "topRight",
    duration: 1.25,
    style: {
      backgroundColor: "#24252B",
      color: "white",
      fill: "white",
      borderRadius: "2.4rem",
    },
  });
};

export default generateNotification;
