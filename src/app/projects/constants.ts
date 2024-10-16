import { projectDetailsDataT } from "./types";

export const projectTypeData = [
  {
    name: "All",
    id: "0",
    role: "all",
    hasIcon: true,
  },
  {
    name: "Mobile applications",
    id: "1",
    role: "mobile",
  },
  {
    name: "CRM",
    id: "2",
    role: "crm",
  },
  {
    name: "Logo Development",
    id: "3",
    role: "logo",
  },
  {
    name: "Brend Improvement",
    id: "4",
    role: "brending",
  },
];

export const projectDetailsData: projectDetailsDataT = {
  aktivbux: {
    id: 1,
    type: "mobile",
    name: "Aktivbux",
    brief:
      "Explore our comprehensive suite of innovative digital solutions designed to elevate your online presence.",
    main_image: "/activebux_face.jpg",
    description:
      "Explore our innovative mobile development projects, where creativity meets technical excellence. From sleek interfaces to robust architectures, discover how we craft seamless mobile experiences using the latest technologies. Dive in to witness our commitment to excellence in iOS, Android, and cross-platform development.",
    medias: ["/activebux_face.jpg", "/activebux.jpg", "/activebux_face.jpg"],
    href: "/projects/aktivbux",
    templateMedia: "/activebux_face.jpg",
  },
  carting: {
    id: 2,
    type: "crm",
    name: "Carting",
    brief:
      "Explore our comprehensive suite of innovative digital solutions designed to elevate your online presence.",
    main_image: "/carting_face.jpg",
    description:
      "Discover streamlined business operations with our CRM solutions. Explore our CRM projects, showcasing enhanced customer interactions, process automation, and sustainable growth. See firsthand how our tailored solutions optimize workflows and elevate overall business performance.",
    medias: ["/carting_face.jpg"],
    href: "/projects/carting",
    templateMedia: "/carting_face.jpg",
  },
  personal_driver: {
    id: 3,
    type: "logo",
    name: "Personal Driver",
    brief:
      "Explore our comprehensive suite of innovative digital solutions designed to elevate your online presence.",
    main_image: "/personal_driver_face.jpg",
    description:
      "Elevate your brand with our logo designs. Explore our portfolio for impactful and visually stunning logos that capture the essence of your identity. Let us bring your vision to life with distinctive and memorable branding.",
    medias: [
      "/personal_driver_face.jpg",
      "/personal_driver.jpg",
      "/personal_driver_2.jpg",
    ],
    href: "/projects/personal_driver",
    templateMedia: "/personal_driver_face.jpg",
  },
  mulk: {
    id: 4,
    type: "brending",
    name: "Mulk",
    brief:
      "Explore our comprehensive suite of innovative digital solutions designed to elevate your online presence",
    main_image: "/mulk_face.jpg",
    description:
      "Transform your brand with us. Explore our branding solutions for a powerful and impactful identity. Elevate your presence and connect with your audience through strategic brand improvement.",
    medias: ["/mulk_face.jpg", "/mulk.jpg", "/mulk_face.jpg"],
    href: "/projects/mulk",
    templateMedia: "/mulk_face.jpg",
  },
};
