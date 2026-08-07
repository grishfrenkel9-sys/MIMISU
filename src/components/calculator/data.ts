import type { AdvertiserCount, PriceTier } from "./types";

export const PRICE_TABLE: Record<AdvertiserCount, PriceTier[]> = {
  1: [
    {
      min: 1000,
      max: 2499,
      advertiserPrice: 230,
      bottlePrice: 230,
    },
    {
      min: 2500,
      max: 4999,
      advertiserPrice: 225,
      bottlePrice: 225,
    },
    {
      min: 5000,
      max: 7499,
      advertiserPrice: 215,
      bottlePrice: 215,
    },
    {
      min: 7500,
      max: Infinity,
      advertiserPrice: 200,
      bottlePrice: 200,
    },
  ],

  2: [
    {
      min: 1000,
      max: 2499,
      advertiserPrice: 140,
      bottlePrice: 280,
    },
    {
      min: 2500,
      max: 4999,
      advertiserPrice: 137,
      bottlePrice: 274,
    },
    {
      min: 5000,
      max: 7499,
      advertiserPrice: 131,
      bottlePrice: 262,
    },
    {
      min: 7500,
      max: Infinity,
      advertiserPrice: 122,
      bottlePrice: 244,
    },
  ],

  4: [
    {
      min: 1000,
      max: 2499,
      advertiserPrice: 80,
      bottlePrice: 320,
    },
    {
      min: 2500,
      max: 4999,
      advertiserPrice: 78,
      bottlePrice: 312,
    },
    {
      min: 5000,
      max: 7499,
      advertiserPrice: 75,
      bottlePrice: 300,
    },
    {
      min: 7500,
      max: Infinity,
      advertiserPrice: 70,
      bottlePrice: 280,
    },
  ],
};
