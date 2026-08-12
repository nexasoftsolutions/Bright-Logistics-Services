export const vehicles = [
  {
    id: "40ft-trailers",
    name: "40ft Trailers",
    iconName: "Truck",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB359Q8H4HOxXOP9JAPWaPlp9dDwT-PAxtytdToTDl1490nfuqCDqKT9sKcJG419CjiVyDf7DLhTGnvzvMe9HqhY9lQiKzV2tc6WfX1pZDS_lWRof8mb5G8L1Qapv-Au6k6uJVnt_N9j7LyGobhnWCGlKZYMjZYqo9YLj8v18-nTfSKF6LnseVNAwpTSW7RoYhCxY6nKzsTfLXeJt3Xz4ccv_E_LjYt_hcsZbQczy1t1ALc9cOygTgnww",
    description: "Our flagship heavy-haulers designed for maximum volume maritime containers and large-scale industrial cargo.",
    capacity: "Up to 30 Tons",
    idealFor: "Import/Export, Heavy Machinery"
  },
  {
    id: "20ft-vehicles",
    name: "20ft Vehicles",
    iconName: "Truck",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQmyPrqQd-29Y4IOogNiya-wR-Y-vpJu_p8eD-S3uToq42UbtVQ8aBlAcJkEqkhBJA9vA5O9A_AGKOb8_90ZMEpM7OX5bMGQQS1nhP-Gi1mXJ-k4iOn_j4RkCeGoSFh-kn95kQhNZJj3X7grxe0SBm2NDUPq-E-1V6u5ya60CDy80mXkaDRSNdQ2D1EgZwASl8-ujFtJ4y-Tu6is5-uTTEUEj-7HxdU5AQP9Sylx0cx9NHVBOTa4-xmA",
    description: "Versatile and agile rigs perfect for standard shipping containers, balancing payload capacity with maneuverability.",
    capacity: "Up to 24 Tons",
    idealFor: "Standard FCL, Regional Transit"
  },
  {
    id: "mazda-fleet",
    name: "Mazda Fleet",
    iconName: "Bus",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlOBwkojemyYvvohGWo3NgHOMow8ok4bO5d9TsJz3Yq_IBtN2G_Es-nqLO_EffB9lgL_mdxBNQnR9F7R3KFfQIHPl0xEJ784dT6T2zBeMtiUYWWTORXyE6u5s06Vx0EqeQLMeED2xn1VSauGkD9wWwoQ5D71LUY0fiJF9_MMcW7x1dd7a8vMNeM6twInePBVJywyM2YjPntr__AwgRn2Z626iPfyvIQKFW_8AJoiwalQAZvocmFzgOiA",
    description: "Efficient light-to-medium duty trucks optimal for intra-city distribution and expedited regional deliveries.",
    capacity: "3 to 5 Tons",
    idealFor: "FMCG, LTL Freight, Retail"
  },
  {
    id: "shehzore-fleet",
    name: "Shehzore Fleet",
    iconName: "Truck",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0GGPPArp3SCtSIXZazoaYeLogBNECQGjckNVBv9QIDr_LPlrcHzF1VCwIXNCz5dXnWjFeTY_cDQRIQ76V7QDD8ecB7Ug21pWGR3TAksGTSkb4-6ppiI-0bpeITCyVXwhS9NMogxh5C_XF0h6YKFW0iOTjjjkLzIou4LTGwQZXQqQTfho4KuROF7brvGfeHSHsqCEXOth713pNJAqSf7p-XWE2c4mUjqj93dFR8DLhaXAC4Twmlw6Gg",
    description: "Highly maneuverable urban delivery vehicles, perfect for navigating tight city streets and providing swift last-mile solutions.",
    capacity: "1 to 1.5 Tons",
    idealFor: "Last-mile, Courier, Small Cargo"
  },
  {
    id: "local-transport",
    name: "Local Transport",
    iconName: "Truck",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHhJx4NSTXR8B1jvawh4uL8uEzJYDdKWTPKrUeXBaBPJ8IXx53VQABvQj9T7ub_NmFgWxsj2WO2L3HSz5fDWHVuAB0qRMaTOJKga1wWgJi8fD3PTG7g1OJS3H6a98WZs6Y-hurXgaVrf2p34FtKph9f2f7W-xcLOkkoiuBaiTdsp5-YYSCBNcpr-RoZFkZIAvFjoGlMhtWMW1dN4earoN2FblAnFMiCugmoNXLD1vg-ZKAn5QFZs1BCQ",
    description: "Efficient and versatile vehicles for local city-wide deliveries, suitable for narrow streets and quick turnarounds.",
    capacity: "Up to 1 Ton",
    idealFor: "E-commerce, Last-mile, Retail"
  },
  {
    id: "specialized-transport",
    name: "Specialized Transport",
    iconName: "Cog",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuByQf6PBJ5VjH-wsMvJwq3h6kG9npdxf1kwDeWVE9mYjLMXfGiGbpmgUJEzAOpiu4APUeU6e1uEW7l2IV1rxu23ipHUfl9q0KU93jYPT-Yfamz6UYEGvaHg8Qi0D3vxDgm7sbv5MQ8Ad-6-de1bwrSL1rdVpgka1Aq4hqDejqM58MqXNUw7BEgcR5xxray4q6NlKU1vojDoQ51gShCArVismRlwYNKil2zlk5ZJeaYyGVOqaPfih0xRWA",
    description: "Custom solutions for out-of-gauge (OOG) cargo, oversized machinery, and sensitive goods requiring specific environmental controls.",
    tags: [
      { name: "Reefers", iconName: "Snowflake" },
      { name: "Flatbeds", iconName: "AlignJustify" }
    ],
    idealFor: "Project Cargo, Cold Chain",
    iconVariant: "HardHat"
  }
];

export const fleetStats = {
  title: "Maintained for Excellence",
  description: "Every vehicle in the Bright Logistics fleet undergoes rigorous preventive maintenance and is equipped with real-time GPS tracking, ensuring your cargo is secure and visible every mile of the journey.",
  features: [
    { label: "GPS Tracked", iconName: "BadgeCheck" },
    { label: "24/7 Serviced", iconName: "Settings" }
  ],
  metrics: [
    { label: "Uptime", value: "99%", strokeDasharray: "95, 100" },
    { label: "Vehicles", value: "50+", strokeDasharray: "100, 100" }
  ]
};
