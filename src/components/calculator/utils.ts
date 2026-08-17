import type {
  AdvertiserCount,
  CampaignResult,
} from "./types";

import { PRICE_TABLE } from "./data";

const DESIGN_PRICE = 9_900;

// =========================================
// PRICE TIER
// =========================================

export function getPriceTier(
  printRun: number,
  advertisers: AdvertiserCount
) {
  const tiers = PRICE_TABLE[advertisers];

  return (
    [...tiers]
      .reverse()
      .find((tier) => printRun >= tier.min) ??
    tiers[0]
  );
}

// =========================================
// CAMPAIGN CALCULATOR
// =========================================

export function calculateCampaign(
  advertisers: AdvertiserCount,
  printRun: number,
  includeDesign: boolean
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
  // СТОИМОСТЬ ДЛЯ ОДНОГО РЕКЛАМОДАТЕЛЯ
  // =========================================

  const advertiserBudget =
    bottlePrice +
    designPrice;

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
