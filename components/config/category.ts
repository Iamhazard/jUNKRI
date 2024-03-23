interface CategoryItem {
  label: string;
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
    value: "home" as const,
    featured: [
      {
        name: "Fire And Ice Pizzeria",
        href: `/products?category=ui_kits`,
         imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=ui_kits&sort=desc",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=ui_kits",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Our Menus",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        href: `/products?category=icons`,
        // imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=icons&sort=desc",
        // imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Icons",
        href: "/products?category=icons",
        // imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
