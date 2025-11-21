"use client";

import { DeviceInfo, DeviceType } from "./use-device";

// Device breakpoints and screen sizes
export const DEVICE_BREAKPOINTS = {
  mobile: {
    small: { min: 0, max: 374 },      // iPhone SE, small Android
    medium: { min: 375, max: 413 },   // iPhone 12/13/14, standard Android
    large: { min: 414, max: 767 },    // iPhone Pro Max, large Android
  },
  tablet: {
    small: { min: 768, max: 1023 },   // iPad Mini, small tablets
    large: { min: 1024, max: 1279 },  // iPad Pro, large tablets
  },
  desktop: {
    small: { min: 1280, max: 1439 },  // Small laptops
    medium: { min: 1440, max: 1919 }, // Standard desktops
    large: { min: 1920, max: Infinity }, // Large monitors
  },
};

// Section size configurations per device
export interface SectionSizes {
  hero: {
    height: string;
    padding: string;
    fontSize: { title: string; subtitle: string };
  };
  about: {
    minHeight: string;
    padding: string;
    fontSize: { title: string; text: string };
  };
  featured: {
    minHeight: string;
    padding: string;
    imageHeight: string;
    fontSize: { title: string; text: string };
  };
  gallery: {
    minHeight: string;
    padding: string;
    fontSize: { title: string; text: string };
  };
  promo: {
    height: string;
    fontSize: { title: string; text: string };
  };
  contact: {
    minHeight: string;
    padding: string;
  };
  footer: {
    minHeight: string;
    padding: string;
    fontSize: { title: string; text: string };
  };
}

export function getSectionSizes(device: DeviceInfo): SectionSizes {
  const { type, screenWidth, isLowEnd } = device;
  
  if (type === "mobile") {
    if (screenWidth < 375) {
      // Small phones (iPhone SE, etc.)
      return {
        hero: {
          height: "100vh",
          padding: "px-4 py-8",
          fontSize: { title: "text-2xl", subtitle: "text-sm" },
        },
        about: {
          minHeight: "auto",
          padding: "px-4 py-12",
          fontSize: { title: "text-3xl", text: "text-sm" },
        },
        featured: {
          minHeight: "auto",
          padding: "px-4 py-12",
          imageHeight: "h-[250px]",
          fontSize: { title: "text-xl", text: "text-base" },
        },
        gallery: {
          minHeight: "auto",
          padding: "px-4 py-12",
          fontSize: { title: "text-3xl", text: "text-sm" },
        },
        promo: {
          height: "100vh",
          fontSize: { title: "text-sm", text: "text-lg" },
        },
        contact: {
          minHeight: "auto",
          padding: "px-4 py-12",
        },
        footer: {
          minHeight: "300px",
          padding: "px-4 py-8",
          fontSize: { title: "text-[16vw]", text: "text-xs" },
        },
      };
    } else if (screenWidth < 414) {
      // Medium phones (iPhone 12/13/14, standard Android)
      return {
        hero: {
          height: "100vh",
          padding: "px-6 py-10",
          fontSize: { title: "text-3xl", subtitle: "text-base" },
        },
        about: {
          minHeight: "auto",
          padding: "px-6 py-16",
          fontSize: { title: "text-4xl", text: "text-base" },
        },
        featured: {
          minHeight: "auto",
          padding: "px-6 py-16",
          imageHeight: "h-[300px]",
          fontSize: { title: "text-2xl", text: "text-lg" },
        },
        gallery: {
          minHeight: "auto",
          padding: "px-6 py-16",
          fontSize: { title: "text-4xl", text: "text-base" },
        },
        promo: {
          height: "100vh",
          fontSize: { title: "text-base", text: "text-xl" },
        },
        contact: {
          minHeight: "auto",
          padding: "px-6 py-16",
        },
        footer: {
          minHeight: "350px",
          padding: "px-6 py-10",
          fontSize: { title: "text-[16vw]", text: "text-sm" },
        },
      };
    } else {
      // Large phones (iPhone Pro Max, large Android)
      return {
        hero: {
          height: "100vh",
          padding: "px-6 py-12",
          fontSize: { title: "text-4xl", subtitle: "text-lg" },
        },
        about: {
          minHeight: "auto",
          padding: "px-6 py-20",
          fontSize: { title: "text-5xl", text: "text-base" },
        },
        featured: {
          minHeight: "auto",
          padding: "px-6 py-20",
          imageHeight: "h-[350px]",
          fontSize: { title: "text-3xl", text: "text-xl" },
        },
        gallery: {
          minHeight: "auto",
          padding: "px-6 py-20",
          fontSize: { title: "text-5xl", text: "text-base" },
        },
        promo: {
          height: "100vh",
          fontSize: { title: "text-lg", text: "text-2xl" },
        },
        contact: {
          minHeight: "auto",
          padding: "px-6 py-20",
        },
        footer: {
          minHeight: "400px",
          padding: "px-6 py-12",
          fontSize: { title: "text-[16vw]", text: "text-sm" },
        },
      };
    }
  } else if (type === "tablet") {
    if (screenWidth < 1024) {
      // Small tablets (iPad Mini, etc.)
      return {
        hero: {
          height: "100vh",
          padding: "px-8 py-16",
          fontSize: { title: "text-5xl", subtitle: "text-xl" },
        },
        about: {
          minHeight: "100vh",
          padding: "px-8 py-24",
          fontSize: { title: "text-5xl", text: "text-lg" },
        },
        featured: {
          minHeight: "100vh",
          padding: "px-8 py-24",
          imageHeight: "h-[500px]",
          fontSize: { title: "text-4xl", text: "text-xl" },
        },
        gallery: {
          minHeight: "100vh",
          padding: "px-8 py-24",
          fontSize: { title: "text-5xl", text: "text-lg" },
        },
        promo: {
          height: "100vh",
          fontSize: { title: "text-xl", text: "text-3xl" },
        },
        contact: {
          minHeight: "auto",
          padding: "px-8 py-24",
        },
        footer: {
          minHeight: "500px",
          padding: "px-8 py-16",
          fontSize: { title: "text-[14vw]", text: "text-base" },
        },
      };
    } else {
      // Large tablets (iPad Pro, etc.)
      return {
        hero: {
          height: "100vh",
          padding: "px-12 py-20",
          fontSize: { title: "text-6xl", subtitle: "text-2xl" },
        },
        about: {
          minHeight: "100vh",
          padding: "px-12 py-32",
          fontSize: { title: "text-6xl", text: "text-xl" },
        },
        featured: {
          minHeight: "100vh",
          padding: "px-12 py-32",
          imageHeight: "h-[600px]",
          fontSize: { title: "text-5xl", text: "text-2xl" },
        },
        gallery: {
          minHeight: "100vh",
          padding: "px-12 py-32",
          fontSize: { title: "text-6xl", text: "text-xl" },
        },
        promo: {
          height: "100vh",
          fontSize: { title: "text-2xl", text: "text-4xl" },
        },
        contact: {
          minHeight: "auto",
          padding: "px-12 py-32",
        },
        footer: {
          minHeight: "550px",
          padding: "px-12 py-20",
          fontSize: { title: "text-[14vw]", text: "text-base" },
        },
      };
    }
  } else {
    // Desktop
    if (screenWidth < 1440) {
      // Small desktops
      return {
        hero: {
          height: "100vh",
          padding: "px-16 py-24",
          fontSize: { title: "text-6xl", subtitle: "text-2xl" },
        },
        about: {
          minHeight: "100vh",
          padding: "px-16 py-40",
          fontSize: { title: "text-6xl", text: "text-xl" },
        },
        featured: {
          minHeight: "100vh",
          padding: "px-16 py-40",
          imageHeight: "h-[700px]",
          fontSize: { title: "text-5xl", text: "text-2xl" },
        },
        gallery: {
          minHeight: "100vh",
          padding: "px-16 py-40",
          fontSize: { title: "text-6xl", text: "text-xl" },
        },
        promo: {
          height: "100vh",
          fontSize: { title: "text-2xl", text: "text-5xl" },
        },
        contact: {
          minHeight: "auto",
          padding: "px-16 py-40",
        },
        footer: {
          minHeight: "600px",
          padding: "px-16 py-24",
          fontSize: { title: "text-[14vw]", text: "text-base" },
        },
      };
    } else if (screenWidth < 1920) {
      // Medium desktops
      return {
        hero: {
          height: "100vh",
          padding: "px-20 py-32",
          fontSize: { title: "text-7xl", subtitle: "text-3xl" },
        },
        about: {
          minHeight: "100vh",
          padding: "px-20 py-48",
          fontSize: { title: "text-7xl", text: "text-2xl" },
        },
        featured: {
          minHeight: "100vh",
          padding: "px-20 py-48",
          imageHeight: "h-[800px]",
          fontSize: { title: "text-6xl", text: "text-3xl" },
        },
        gallery: {
          minHeight: "100vh",
          padding: "px-20 py-48",
          fontSize: { title: "text-7xl", text: "text-2xl" },
        },
        promo: {
          height: "100vh",
          fontSize: { title: "text-3xl", text: "text-6xl" },
        },
        contact: {
          minHeight: "auto",
          padding: "px-20 py-48",
        },
        footer: {
          minHeight: "650px",
          padding: "px-20 py-32",
          fontSize: { title: "text-[14vw]", text: "text-lg" },
        },
      };
    } else {
      // Large desktops
      return {
        hero: {
          height: "100vh",
          padding: "px-24 py-40",
          fontSize: { title: "text-8xl", subtitle: "text-4xl" },
        },
        about: {
          minHeight: "100vh",
          padding: "px-24 py-56",
          fontSize: { title: "text-8xl", text: "text-3xl" },
        },
        featured: {
          minHeight: "100vh",
          padding: "px-24 py-56",
          imageHeight: "h-[900px]",
          fontSize: { title: "text-7xl", text: "text-4xl" },
        },
        gallery: {
          minHeight: "100vh",
          padding: "px-24 py-56",
          fontSize: { title: "text-8xl", text: "text-3xl" },
        },
        promo: {
          height: "100vh",
          fontSize: { title: "text-4xl", text: "text-7xl" },
        },
        contact: {
          minHeight: "auto",
          padding: "px-24 py-56",
        },
        footer: {
          minHeight: "700px",
          padding: "px-24 py-40",
          fontSize: { title: "text-[14vw]", text: "text-xl" },
        },
      };
    }
  }
}

// Export device list for reference
export const DEVICE_LIST = {
  mobile: {
    small: [
      "iPhone SE (1st, 2nd, 3rd gen)",
      "iPhone 8",
      "Small Android phones (< 375px)",
    ],
    medium: [
      "iPhone 12",
      "iPhone 13",
      "iPhone 14",
      "iPhone 15",
      "Standard Android phones (375-413px)",
    ],
    large: [
      "iPhone 12 Pro Max",
      "iPhone 13 Pro Max",
      "iPhone 14 Pro Max",
      "iPhone 15 Pro Max",
      "iPhone 16 Pro Max",
      "Large Android phones (414-767px)",
    ],
  },
  tablet: {
    small: [
      "iPad Mini",
      "Small Android tablets (768-1023px)",
    ],
    large: [
      "iPad",
      "iPad Air",
      "iPad Pro",
      "Large Android tablets (1024-1279px)",
    ],
  },
  desktop: {
    small: [
      "Small laptops (1280-1439px)",
      "13\" MacBook",
    ],
    medium: [
      "Standard desktops (1440-1919px)",
      "15\" MacBook Pro",
      "Standard monitors",
    ],
    large: [
      "Large desktops (1920px+)",
      "4K monitors",
      "Ultrawide monitors",
    ],
  },
};

