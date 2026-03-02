export interface StampDutyInput {
  propertyPrice: number;
  isFirstTimeBuyer: boolean;
  isAdditionalProperty: boolean;
}

export interface StampDutyBand {
  threshold: number;
  rate: number;
  taxableAmount: number;
  taxDue: number;
}

export interface StampDutyResult {
  totalTax: number;
  effectiveRate: number;
  bands: StampDutyBand[];
  isFirstTimeBuyer: boolean;
  isAdditionalProperty: boolean;
}

// Standard SDLT bands (England & Northern Ireland) - as of 2024/25
const STANDARD_BANDS = [
  { threshold: 250000, rate: 0 },
  { threshold: 925000, rate: 5 },
  { threshold: 1500000, rate: 10 },
  { threshold: Infinity, rate: 12 },
];

// First-time buyer bands (relief on properties up to £625,000)
const FIRST_TIME_BUYER_BANDS = [
  { threshold: 425000, rate: 0 },
  { threshold: 625000, rate: 5 },
];

// Additional property surcharge
const ADDITIONAL_PROPERTY_SURCHARGE = 3;

export function calculateStampDuty(input: StampDutyInput): StampDutyResult {
  const { propertyPrice, isFirstTimeBuyer, isAdditionalProperty } = input;
  
  // First-time buyers lose relief if property exceeds £625,000
  const eligibleForFTBRelief = isFirstTimeBuyer && propertyPrice <= 625000 && !isAdditionalProperty;
  
  // Select appropriate bands
  const baseBands = eligibleForFTBRelief ? FIRST_TIME_BUYER_BANDS : STANDARD_BANDS;
  
  const calculatedBands: StampDutyBand[] = [];
  let remainingPrice = propertyPrice;
  let previousThreshold = 0;
  let totalTax = 0;
  
  for (const band of baseBands) {
    if (remainingPrice <= 0) break;
    
    const bandSize = band.threshold - previousThreshold;
    const taxableInBand = Math.min(remainingPrice, bandSize);
    
    // Apply additional property surcharge if applicable
    const effectiveRate = isAdditionalProperty 
      ? band.rate + ADDITIONAL_PROPERTY_SURCHARGE 
      : band.rate;
    
    const taxDue = (taxableInBand * effectiveRate) / 100;
    
    if (taxableInBand > 0) {
      calculatedBands.push({
        threshold: band.threshold === Infinity ? propertyPrice : band.threshold,
        rate: effectiveRate,
        taxableAmount: taxableInBand,
        taxDue: Math.round(taxDue),
      });
    }
    
    totalTax += taxDue;
    remainingPrice -= taxableInBand;
    previousThreshold = band.threshold;
  }
  
  // Handle remaining price for first-time buyers exceeding standard bands
  if (eligibleForFTBRelief && propertyPrice > 625000) {
    // This shouldn't happen as FTB relief is lost, but handle edge case
  }
  
  const effectiveRate = propertyPrice > 0 ? (totalTax / propertyPrice) * 100 : 0;
  
  return {
    totalTax: Math.round(totalTax),
    effectiveRate: Math.round(effectiveRate * 100) / 100,
    bands: calculatedBands,
    isFirstTimeBuyer: eligibleForFTBRelief,
    isAdditionalProperty,
  };
}
