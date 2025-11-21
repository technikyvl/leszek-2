"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useDevice, getDeviceOptimizations } from "@/lib/use-device";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    optimizations,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    optimizations: ReturnType<typeof getDeviceOptimizations>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full",
        hovered !== null && hovered !== index && "blur-sm"
      )}
      style={{
        transform: hovered !== null && hovered !== index ? 'scale(0.98) translateZ(0)' : 'scale(1) translateZ(0)',
        transition: 'transform 0.3s ease-out, filter 0.3s ease-out',
        willChange: hovered !== null ? 'transform, filter' : 'auto',
        backfaceVisibility: 'hidden'
      }}
    >
      <Image
        src={card.src || "/placeholder.jpg"}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
        style={card.objectPosition ? { objectPosition: card.objectPosition } : undefined}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={optimizations.images.quality}
        loading="lazy"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end py-8 px-4 transition-opacity duration-300",
          "opacity-100"
        )}
      >
        <div className="text-xl md:text-2xl font-medium text-white drop-shadow-lg">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const device = useDevice();
  const optimizations = getDeviceOptimizations(device);

  // Determine grid columns based on number of cards
  const getGridCols = () => {
    if (cards.length === 2) return 'md:grid-cols-2';
    if (cards.length === 4) return 'md:grid-cols-2 lg:grid-cols-4';
    if (cards.length <= 3) return 'md:grid-cols-3';
    return 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  return (
    <div className={`grid grid-cols-1 gap-6 md:gap-8 max-w-6xl mx-auto md:px-8 w-full ${getGridCols()}`}>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          optimizations={optimizations}
        />
      ))}
    </div>
  );
}
