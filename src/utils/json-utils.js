export const searchJSON = [
  {
    placeholder: "Enter city",
    span: 12,
    dataKey: "city",
  },
  {
    placeholder: "Enter Name or Id",
    span: 12,
    dataKey: "id",
  },
];

export const formJSON = [
  {
    type: "text",
    name: "name",
    label: "Name",
    nested: false,
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "number",
    label: "Max Guests",
    name: "maxGuests",
    nested: true,
    parentKey: "capacity",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "number",
    name: "minGuests",
    label: "Min Guests",
    nested: true,
    parentKey: "capacity",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "text",
    name: "emailAddress",
    label: "Email",
    nested: true,
    parentKey: "contact",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "text",
    name: "mobileNumber",
    label: "Mobile Number",
    nested: true,
    parentKey: "contact",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "text",
    name: "phoneNumber",
    label: "Phone",
    nested: true,
    parentKey: "contact",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "text",
    name: "cityName",
    label: "City",
    nested: true,
    parentKey: "location",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "text",
    name: "postalCode",
    label: "Postal Code",
    nested: true,
    parentKey: "location",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "text",
    name: "streetNameNumber",
    label: "Street Name",
    nested: true,
    parentKey: "location",
    required: true,
    requiredMessage: "Required!",
  },
];

export const catererListColumns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Maximum Guests",
    dataIndex: ["capacity", "maxGuests"],
  },
  {
    title: "Minimum Guests",
    dataIndex: ["capacity", "minGuests"],
  },
  {
    title: "Email",
    dataIndex: ["contact", "emailAddress"],
  },
  {
    title: "Mobile Number",
    dataIndex: ["contact", "mobileNumber"],
  },
  {
    title: "Phone Number",
    dataIndex: ["contact", "phoneNumber"],
  },
  {
    title: "City",
    dataIndex: ["location", "cityName"],
  },
  {
    title: "Postal Code",
    dataIndex: ["location", "postalCode"],
  },
  {
    title: "Street Name",
    dataIndex: ["location", "streetNameNumber"],
  },
];

export const formInitialValues = {
  capacity: {
    maxGuests: 0,
    minGuests: 0,
  },
  contact: {
    emailAddress: "",
    mobileNumber: "",
    phoneNumber: "",
  },
  location: {
    cityName: "",
    postalCode: "",
    streetNameNumber: "",
  },
  name: "",
};
