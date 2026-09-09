export type Service = {
  icon:
    | "train"
    | "building"
    | "wrench"
    | "droplets"
    | "fence"
    | "calendar-check"
    | "clipboard-check"
    | "landmark";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "train",
    title: "Railway Infrastructure Construction",
    description:
      "Construction of railway buildings, service structures, platforms, utility buildings and other civil infrastructure in accordance with Indian Railways standards.",
  },
  {
    icon: "building",
    title: "Building Construction",
    description:
      "Construction of staff quarters, office buildings, inspection bungalows, maintenance facilities and other institutional structures.",
  },
  {
    icon: "wrench",
    title: "Repair & Renovation Works",
    description:
      "Structural repairs, alterations, modernization, rehabilitation and maintenance of existing railway and public infrastructure.",
  },
  {
    icon: "droplets",
    title: "Drainage & Utility Infrastructure",
    description:
      "Construction of drainage systems, sewerage networks, culverts, retaining structures and water-management infrastructure.",
  },
  {
    icon: "fence",
    title: "Boundary & Site Development",
    description:
      "Construction of boundary walls, compound walls, pathways, site grading, landscaping and allied civil development works.",
  },
  {
    icon: "calendar-check",
    title: "Annual Maintenance & Zonal Contracts",
    description:
      "Execution of routine maintenance, emergency repairs and civil works under zonal and annual maintenance contracts for government departments.",
  },
  {
    icon: "clipboard-check",
    title: "Turnkey Civil Projects",
    description:
      "End-to-end project execution including planning, estimation, construction, quality control, compliance and final handover.",
  },
  {
    icon: "landmark",
    title: "Government & Private Infrastructure",
    description:
      "Execution of civil construction projects for government organisations, industrial establishments, commercial developments and private clients.",
  },
];
