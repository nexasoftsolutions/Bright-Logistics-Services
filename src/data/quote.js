export const cargoTypes = [
  { value: "general", label: "General Merchandise" },
  { value: "perishable", label: "Perishable Goods" },
  { value: "hazardous", label: "Hazardous Materials" },
  { value: "oversized", label: "Oversized / Heavy Machinery" },
  { value: "other", label: "Other" }
];

export const containerSizes = [
  { value: "20ft", label: "20ft Standard" },
  { value: "40ft", label: "40ft Standard" },
  { value: "40hc", label: "40ft High Cube" },
  { value: "lcl", label: "LCL (Less than Container Load)" },
  { value: "other", label: "Other" }
];

export const vehicleTypes = [
  { value: "flatbed", label: "Flatbed Truck" },
  { value: "reefer", label: "Refrigerated Truck" },
  { value: "box", label: "Box Truck" },
  { value: "van", label: "Cargo Van" },
  { value: "not_sure", label: "Not Sure" }
];

export const trustIndicators = [
  {
    iconName: "ShieldCheck",
    title: "Secure Transport",
    description: "Fully insured cargo movement"
  },
  {
    iconName: "Clock",
    title: "On-Time Delivery",
    description: "Strict adherence to schedules"
  },
  {
    iconName: "Globe",
    title: "Global Network",
    description: "Extensive routing options"
  },
  {
    iconName: "Headset",
    title: "24/7 Support",
    description: "Dedicated logistics team"
  }
];
