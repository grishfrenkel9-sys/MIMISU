export type AdvertiserCount = 1 | 2 | 4;

export interface PriceTier {
  min: number;
  max: number;
  advertiserPrice: number;
  bottlePrice: number;
}

export interface CampaignResult {
  advertiserPrice: number;
  bottlePrice: number;
  designPrice: number;
  advertiserBudget: number;
  totalCampaignCost: number;
  estimatedReach: number;
  qrScans: number;
  cpm: number;
}
