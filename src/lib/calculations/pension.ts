export interface PensionGrowthInput {
  currentAge: number;
  retirementAge: number;
  currentPot: number;
  monthlyContribution: number;
  annualGrowthRate: number; // as percentage, e.g., 5 for 5%
}

export interface PensionGrowthResult {
  projectedPot: number;
  totalContributions: number;
  totalGrowth: number;
  yearsToRetirement: number;
  monthsToRetirement: number;
}

export function calculatePensionGrowth(
  input: PensionGrowthInput
): PensionGrowthResult {
  const { currentAge, retirementAge, currentPot, monthlyContribution, annualGrowthRate } = input;
  
  const yearsToRetirement = Math.max(0, retirementAge - currentAge);
  const monthsToRetirement = yearsToRetirement * 12;
  
  // Monthly growth rate
  const monthlyRate = Math.pow(1 + annualGrowthRate / 100, 1 / 12) - 1;
  
  // Future value with compound interest and regular contributions
  // FV = P(1+r)^n + PMT * [((1+r)^n - 1) / r]
  // Where P = current pot, r = monthly rate, n = months, PMT = monthly contribution
  
  let futureValue: number;
  
  if (monthlyRate === 0) {
    // No growth - simple addition
    futureValue = currentPot + (monthlyContribution * monthsToRetirement);
  } else {
    // Compound growth on existing pot
    const potGrowth = currentPot * Math.pow(1 + monthlyRate, monthsToRetirement);
    
    // Future value of regular contributions (annuity)
    const contributionGrowth = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate);
    
    futureValue = potGrowth + contributionGrowth;
  }
  
  const totalContributions = currentPot + (monthlyContribution * monthsToRetirement);
  const totalGrowth = futureValue - totalContributions;
  
  return {
    projectedPot: Math.round(futureValue),
    totalContributions: Math.round(totalContributions),
    totalGrowth: Math.round(totalGrowth),
    yearsToRetirement,
    monthsToRetirement,
  };
}
