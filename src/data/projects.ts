export type Project = {
  name: string;
  client: string;
  period?: string;
  value?: string;
  scope: string;
  rating: "Good" | "Very Good" | "Ongoing";
};

export const projects: Project[] = [
  {
    name: "Tomka–Jaroli Railway Section",
    client: "East Coast Railway",
    period: "2019 – 2020",
    value: "₹90.90 Lakh",
    scope: "Civil infrastructure and associated railway works.",
    rating: "Very Good",
  },
  {
    name: "Rail Vihar Drainage System",
    client: "East Coast Railway · Bhubaneswar",
    period: "2015 – 2017",
    value: "₹92.90 Lakh",
    scope: "Construction of drainage infrastructure and associated civil works.",
    rating: "Very Good",
  },
  {
    name: "Staff Quarters, Baudpur–Tomka",
    client: "East Coast Railway",
    period: "2017 – 2018",
    value: "₹80.10 Lakh",
    scope: "Construction of railway staff residential quarters.",
    rating: "Good",
  },
  {
    name: "Palasa Railway Section",
    client: "East Coast Railway",
    period: "2024 – Present",
    value: "Up to ₹60.03 Lakh",
    scope: "Civil maintenance and infrastructure works under the current zonal contract.",
    rating: "Ongoing",
  },
  {
    name: "Keonjhar–Jenapur Railway Section",
    client: "East Coast Railway",
    scope: "Civil engineering and infrastructure development works under railway contracts.",
    rating: "Good",
  },
  {
    name: "Ranital–Jajpur Railway Section",
    client: "East Coast Railway",
    scope: "Railway civil construction and maintenance works.",
    rating: "Very Good",
  },
];
