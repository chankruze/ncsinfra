export type EquipmentCategory = {
  title: string;
  description: string;
  icon: "excavator" | "loader" | "truck" | "crane" | "compactor" | "mixer";
};

export const equipment: EquipmentCategory[] = [
  {
    title: "Excavators & Backhoe Loaders",
    description:
      "Earthwork, trenching and foundation excavation across civil and railway sites.",
    icon: "excavator",
  },
  {
    title: "Wheel Loaders & Dozers",
    description:
      "Bulk material handling, grading and site levelling for large-scale earthwork.",
    icon: "loader",
  },
  {
    title: "Dump Trucks & Tippers",
    description:
      "Haulage of excavated material, aggregates and construction debris.",
    icon: "truck",
  },
  {
    title: "Mobile Cranes",
    description:
      "Lifting and placement for structural, drainage and utility works.",
    icon: "crane",
  },
  {
    title: "Vibratory Compactors & Rollers",
    description:
      "Soil and sub-grade compaction for stable, durable foundations.",
    icon: "compactor",
  },
  {
    title: "Concrete Mixers & Batching",
    description:
      "On-site concrete production for structural and civil works.",
    icon: "mixer",
  },
];
