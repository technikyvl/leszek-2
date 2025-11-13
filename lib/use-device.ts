"use client";

import { useEffect, useState } from "react";

export type DeviceType = "desktop" | "mobile" | "tablet";
export type OS = "ios" | "android" | "windows" | "macos" | "linux" | "unknown";
export type DeviceCategory = 
  | "iphone"
  | "ipad" 
  | "android-phone"
  | "android-tablet"
  | "windows-pc"
  | "mac"
  | "linux-pc"
  | "unknown";

export interface DeviceInfo {
  type: DeviceType;
  os: OS;
  category: DeviceCategory;
  isLowEnd: boolean;
  isHighEnd: boolean;
  hasGPU: boolean;
  pixelRatio: number;
  screenWidth: number;
  screenHeight: number;
}

// Most common devices list for optimization
const COMMON_DEVICES = {
  // iPhone models (most common)
  iphone: [
    "iPhone 16 Pro", "iPhone 16", "iPhone 15 Pro", "iPhone 15", 
    "iPhone 14 Pro", "iPhone 14", "iPhone 13 Pro", "iPhone 13",
    "iPhone 12 Pro", "iPhone 12", "iPhone 11 Pro", "iPhone 11",
    "iPhone XS", "iPhone XR", "iPhone X", "iPhone 8", "iPhone SE"
  ],
  // iPad models
  ipad: [
    "iPad Pro", "iPad Air", "iPad Mini", "iPad"
  ],
  // Android phones (most common brands)
  androidPhone: [
    "Samsung Galaxy", "Google Pixel", "OnePlus", "Xiaomi", 
    "Huawei", "Oppo", "Vivo", "Realme", "Motorola", "Nokia"
  ],
  // Android tablets
  androidTablet: [
    "Samsung Galaxy Tab", "Lenovo Tab", "Huawei MediaPad"
  ],
  // Desktop
  desktop: [
    "Windows PC", "Mac", "Linux PC"
  ]
};

function detectDevice(): DeviceInfo {
  if (typeof window === "undefined") {
    return {
      type: "desktop",
      os: "unknown",
      category: "unknown",
      isLowEnd: false,
      isHighEnd: true,
      hasGPU: true,
      pixelRatio: 1,
      screenWidth: 1920,
      screenHeight: 1080,
    };
  }

  const ua = navigator.userAgent;
  const uaLower = ua.toLowerCase();
  
  // Detect OS
  let os: OS = "unknown";
  if (/iphone|ipod/.test(uaLower)) os = "ios";
  else if (/ipad/.test(uaLower)) os = "ios";
  else if (/android/.test(uaLower)) os = "android";
  else if (/win/.test(uaLower)) os = "windows";
  else if (/mac/.test(uaLower)) os = "macos";
  else if (/linux/.test(uaLower)) os = "linux";

  // Detect device type
  let type: DeviceType = "desktop";
  let category: DeviceCategory = "unknown";
  
  if (/iphone|ipod/.test(uaLower)) {
    type = "mobile";
    category = "iphone";
  } else if (/ipad/.test(uaLower)) {
    type = "tablet";
    category = "ipad";
  } else if (/android/.test(uaLower)) {
    if (/mobile/.test(uaLower)) {
      type = "mobile";
      category = "android-phone";
    } else {
      type = "tablet";
      category = "android-tablet";
    }
  } else if (os === "windows") {
    category = "windows-pc";
  } else if (os === "macos") {
    category = "mac";
  } else if (os === "linux") {
    category = "linux-pc";
  }

  // Detect screen size for additional type detection
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  if (type === "desktop" && width < 1024) {
    // Could be tablet in desktop mode
    if (width >= 768) type = "tablet";
    else type = "mobile";
  }

  // Detect device capabilities
  const pixelRatio = window.devicePixelRatio || 1;
  const screenWidth = width;
  const screenHeight = height;
  
  // Detect GPU availability
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  const hasGPU = !!gl;
  
  // Detect if low-end device (heuristic based on common indicators)
  const isLowEnd = 
    (type === "mobile" && screenWidth < 375) || // Small screen
    (pixelRatio < 2 && type === "mobile") || // Low DPI
    (!hasGPU && type === "mobile") || // No GPU
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4 && type === "mobile"); // Low CPU cores
  
  // Detect if high-end device
  const isHighEnd = 
    (type === "desktop") ||
    (type === "tablet" && os === "ios") || // iPad
    (category === "iphone" && pixelRatio >= 3) || // Retina iPhone
    (hasGPU && navigator.hardwareConcurrency && navigator.hardwareConcurrency >= 6);

  return {
    type,
    os,
    category,
    isLowEnd,
    isHighEnd,
    hasGPU,
    pixelRatio,
    screenWidth,
    screenHeight,
  };
}

export function useDevice(): DeviceInfo {
  const [device, setDevice] = useState<DeviceInfo>(() => {
    if (typeof window === "undefined") {
      return {
        type: "desktop",
        os: "unknown",
        category: "unknown",
        isLowEnd: false,
        isHighEnd: true,
        hasGPU: true,
        pixelRatio: 1,
        screenWidth: 1920,
        screenHeight: 1080,
      };
    }
    return detectDevice();
  });

  useEffect(() => {
    const updateDevice = () => {
      setDevice(detectDevice());
    };

    // Update on resize (orientation change, etc.)
    window.addEventListener("resize", updateDevice);
    window.addEventListener("orientationchange", updateDevice);

    return () => {
      window.removeEventListener("resize", updateDevice);
      window.removeEventListener("orientationchange", updateDevice);
    };
  }, []);

  return device;
}

// Get optimized settings based on device
export function getDeviceOptimizations(device: DeviceInfo) {
  return {
    // Lenis settings
    lenis: {
      duration: 
        device.isLowEnd ? 1.0 :
        device.type === "mobile" ? 0.8 :
        device.type === "tablet" ? 0.7 :
        0.5, // desktop
      touchMultiplier:
        device.isLowEnd ? 1.0 :
        device.os === "ios" ? 1.2 :
        device.os === "android" ? 1.3 :
        2.0, // desktop
      wheelMultiplier: 1,
    },
    
    // Animation settings
    animations: {
      parallaxIntensity:
        device.isLowEnd ? 0.3 :
        device.type === "mobile" ? 0.5 :
        device.type === "tablet" ? 0.7 :
        1.0, // desktop
      enableParallax: !device.isLowEnd,
      animationDuration:
        device.isLowEnd ? 0.3 :
        device.type === "mobile" ? 0.4 :
        0.5, // desktop/tablet
      springStiffness:
        device.isLowEnd ? 120 :
        device.type === "mobile" ? 160 :
        180, // desktop/tablet
    },
    
    // Image quality
    images: {
      quality:
        device.isLowEnd ? 75 :
        device.type === "mobile" ? 85 :
        device.pixelRatio >= 2 ? 90 :
        85,
      enableLazyLoading: true,
      priorityCount: device.isLowEnd ? 1 : 2,
    },
    
    // Performance settings
    performance: {
      useWillChange: !device.isLowEnd && device.hasGPU,
      throttleScroll: device.isLowEnd || device.type === "mobile",
      reduceMotion: device.isLowEnd,
    },
  };
}

