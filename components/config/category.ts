interface CategoryItem {
  label: string;
  href:string;
  value: string;
  featured: {
    name: string;
    href: string;
    imageSrc?: string;
  }[];
}

export const PRODUCT_CATEGORIES:CategoryItem[] = [
  {
    label: "Home",
      href: `/products?category=ui_kits`,
    value: "home" as const,
    featured: [
      {
        name: "Fire And Ice Pizzeria",
        href: `/products?category=ui_kits`,
         imageSrc: "/nav/juice.jpg",
      },
      {
        name: "Hard drinks",
        href: "/products?category=ui_kits&sort=desc",
        imageSrc: "/nav/vodks.jpg",
      },
      {
        name: "Soft Drinks",
        href: "/products?category=ui_kits",
        imageSrc: "/nav/juice.jpg"
      },
    ],
  },
  {
    label: "Our Menus",
      href: `/products?category=ui_kits`,
    value: "icons" as const,
    featured: [
      {
        name: "Momos",
        href: `/products?category=icons`,
        imageSrc: "/nav/momos.jpeg",
      },
      {
        name: "Fruits Recipe",
        href: "/products?category=icons&sort=desc",
        imageSrc: "/nav/veg.jpg",
      },
      {
        name: "Fish Items",
        href: "/products?category=icons",
        imageSrc: "/Assets/welcome.png",
      },
    ],
  },
   {
    label: "Gallery",
      href: `/products?category=ui_kits`,
    value: "gallery" as const,
    featured: [
      {
        name: "Fire And Ice Pizzeria",
        href: `/products?category=ui_kits`,
         imageSrc: "/Assets/welcome.png",
      },
      {
        name: "New Arrivals",
        href: "/products?category=ui_kits&sort=desc",
        imageSrc: "/Assets/welcome.png",
      },
      {
        name: "Bestsellers",
        href: "/products?category=ui_kits",
        imageSrc: "/Assets/welcome.png",
      },
    ],
  },
];
