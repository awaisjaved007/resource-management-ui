export const searchJSON = [
  {
    placeholder: "Enter city",
    span: 12,
    dataKey: "city",
  },
  {
    placeholder: "Enter Name",
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
    name: "email",
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
    name: "city",
    label: "City",
    nested: true,
    parentKey: "address",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "text",
    name: "postalCode",
    label: "Postal Code",
    nested: true,
    parentKey: "address",
    required: true,
    requiredMessage: "Required!",
  },
  {
    type: "text",
    name: "street",
    label: "Street Name",
    nested: true,
    parentKey: "address",
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
    dataIndex: ["contact", "email"],
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
    dataIndex: ["address", "city"],
  },
  {
    title: "Postal Code",
    dataIndex: ["address", "postalCode"],
  },
  {
    title: "Street Name",
    dataIndex: ["address", "street"],
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
  address: {
    city: "",
    postalCode: "",
    street: "",
  },
  name: "",
};
