import type {
  AdvertiserCount,
  CampaignResult,
} from "./types";

import { PRICE_TABLE } from "./data";

const DESIGN_PRICE = 10_000;

const DISTRIBUTION_PER_1000 = 35_000;

// =========================================
// PRICE TIER
// =========================================

export function getPriceTier(
  printRun: number,
  advertisers: AdvertiserCount
) {
  const tiers = PRICE_TABLE[advertisers];

  return (
    tiers.find(
      (tier) =>
        printRun >= tier.min &&
        printRun <= tier.max
    ) ?? tiers[tiers.length - 1]
  );
}

// =========================================
// CAMPAIGN CALCULATOR
// =========================================

export function calculateCampaign(
  advertisers: AdvertiserCount,
  printRun: number,
  includeDesign: boolean,
  includeDistribution: boolean
): CampaignResult {
  const tier = getPriceTier(
    printRun,
    advertisers
  );

  // =========================================
  // БУТЫЛКИ
  // =========================================

  const bottlePrice =
    tier.advertiserPrice * printRun;

  // =========================================
  // ДИЗАЙН
  // =========================================

  const designPrice = includeDesign
    ? DESIGN_PRICE
    : 0;

  // =========================================
  // РАЗДАЧА
  //
  // 999   → 0 ₸
  // 1000  → 35 000 ₸
  // 1500  → 35 000 ₸
  // 1999  → 35 000 ₸
  // 2000  → 70 000 ₸
  // 2500  → 70 000 ₸
  // 3000  → 105 000 ₸
  //
  // Только полные тысячи.
  // =========================================

  const distributionPrice =
    includeDistribution
      ? Math.floor(printRun / 1000) *
        DISTRIBUTION_PER_1000
      : 0;

  // =========================================
  // СТОИМОСТЬ ДЛЯ ОДНОГО РЕКЛАМОДАТЕЛЯ
  // =========================================

  const advertiserBudget =
    bottlePrice +
    designPrice +
    distributionPrice;

  // =========================================
  // ОБЩАЯ СТОИМОСТЬ КАМПАНИИ
  // =========================================

  const totalCampaignCost =
    advertiserBudget * advertisers;

  // =========================================
  // ОХВАТ
  // =========================================

  const estimatedReach = Math.round(
    printRun * 2.6
  );

  // =========================================
  // QR
  // =========================================

  const qrScans = Math.round(
    estimatedReach * 0.04
  );

  // =========================================
  // CPM
  // =========================================

  const cpm =
    estimatedReach > 0
      ? Math.round(
          advertiserBudget /
            (estimatedReach / 1000)
        )
      : 0;

  return {
    advertiserPrice:
      tier.advertiserPrice,

    bottlePrice,

    designPrice,

    distributionPrice,

    advertiserBudget,

    totalCampaignCost,

    estimatedReach,

    qrScans,

    cpm,
  };
}

// =========================================
// NUMBER FORMAT
// =========================================

export function formatNumber(
  value: number
) {
  return new Intl.NumberFormat(
    "ru-RU"
  ).format(Math.round(value));
}

// =========================================
// PRICE FORMAT
// =========================================

export function formatPrice(
  value: number
) {
  return `${formatNumber(value)} ₸`;
}