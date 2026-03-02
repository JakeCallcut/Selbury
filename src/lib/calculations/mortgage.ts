export interface MortgageAffordabilityInput {
  annualIncome: number;
  partnerIncome: number;
  monthlyDebts: number;
  deposit: number;
}

export interface MortgageAffordabilityResult {
  maxBorrowing: number;
  maxPropertyPrice: number;
  totalHouseholdIncome: number;
  incomeMultiplier: number;
  monthlyDebtImpact: number;
}

const INCOME_MULTIPLIER = 4.5;
const MONTHLY_DEBT_ANNUAL_FACTOR = 12; // Convert monthly debts to annual impact

export function calculateMortgageAffordability(
  input: MortgageAffordabilityInput
): MortgageAffordabilityResult {
  const { annualIncome, partnerIncome, monthlyDebts, deposit } = input;
  
  // Total household income
  const totalHouseholdIncome = annualIncome + partnerIncome;
  
  // Annual debt commitments reduce borrowing capacity
  const annualDebtImpact = monthlyDebts * MONTHLY_DEBT_ANNUAL_FACTOR;
  const monthlyDebtImpact = annualDebtImpact * INCOME_MULTIPLIER;
  
  // Calculate max borrowing based on income multiplier
  const baseBorrowing = totalHouseholdIncome * INCOME_MULTIPLIER;
  const maxBorrowing = Math.max(0, baseBorrowing - monthlyDebtImpact);
  
  // Max property price is borrowing plus deposit
  const maxPropertyPrice = maxBorrowing + deposit;
  
  return {
    maxBorrowing: Math.round(maxBorrowing),
    maxPropertyPrice: Math.round(maxPropertyPrice),
    totalHouseholdIncome: Math.round(totalHouseholdIncome),
    incomeMultiplier: INCOME_MULTIPLIER,
    monthlyDebtImpact: Math.round(monthlyDebtImpact),
  };
}
