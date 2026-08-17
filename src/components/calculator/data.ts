import type {
  AdvertiserCount,
  PriceTier,
} from "./types";

export const PRICE_TABLE: Record<
  AdvertiserCount,
  PriceTier[]
> = {
  // =========================================
  // 1 РЕКЛАМОДАТЕЛЬ
  // =========================================

  1: [
    {
      min: 1000,
      max: 1999,
      advertiserPrice: 310,
      bottlePrice: 310,
    },
    {
      min: 2000,
      max: 4000,
      advertiserPrice: 300,
      bottlePrice: 300,
    },
    {
      min: 5000,
      max: 7000,
      advertiserPrice: 290,
      bottlePrice: 290,
    },
    {
      min: 8000,
      max: Infinity,
      advertiserPrice: 280,
      bottlePrice: 280,
    },
  ],

  // =========================================
  // 2 РЕКЛАМОДАТЕЛЯ
  // =========================================

  2: [
    {
      min: 1000,
      max: 1999,
      advertiserPrice: 175,
      bottlePrice: 175,
    },
    {
      min: 2000,
      max: 4000,
      advertiserPrice: 170,
      bottlePrice: 170,
    },
    {
      min: 5000,
      max: 7000,
      advertiserPrice: 165,
      bottlePrice: 165,
    },
    {
      min: 8000,
      max: Infinity,
      advertiserPrice: 160,
      bottlePrice: 160,
    },
  ],

  // =========================================
  // 4 РЕКЛАМОДАТЕЛЯ
  // =========================================

  4: [
    {
      min: 1000,
      max: 1999,
      advertiserPrice: 90,
      bottlePrice: 90,
    },
    {
      min: 2000,
      max: 4000,
      advertiserPrice: 85,
      bottlePrice: 85,
    },
    {
      min: 5000,
      max: 7000,
      advertiserPrice: 80,
      bottlePrice: 80,
    },
    {
      min: 8000,
      max: Infinity,
      advertiserPrice: 75,
      bottlePrice: 75,
    },
  ],
};
