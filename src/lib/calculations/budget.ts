export interface BudgetCategory {
  name: string;
  amount: number;
}

export interface BudgetInput {
  monthlyIncome: number;
  categories: BudgetCategory[];
}

export interface BudgetCategoryResult {
  name: string;
  amount: number;
  percentage: number;
}

export interface BudgetResult {
  totalIncome: number;
  totalExpenses: number;
  remainingBalance: number;
  savingsRate: number;
  categories: BudgetCategoryResult[];
  isDeficit: boolean;
}

export const DEFAULT_CATEGORIES: string[] = [
  'Housing (rent/mortgage)',
  'Bills & utilities',
  'Transport',
  'Food & groceries',
  'Insurance',
  'Debt repayments',
  'Subscriptions',
  'Personal & leisure',
  'Savings & investments',
  'Other',
];

export function calculateBudget(input: BudgetInput): BudgetResult {
  const { monthlyIncome, categories } = input;
  
  const totalExpenses = categories.reduce((sum, cat) => sum + cat.amount, 0);
  const remainingBalance = monthlyIncome - totalExpenses;
  const isDeficit = remainingBalance < 0;
  
  // Savings rate (positive remaining balance as percentage of income)
  const savingsRate = monthlyIncome > 0 
    ? Math.max(0, (remainingBalance / monthlyIncome) * 100) 
    : 0;
  
  // Calculate percentage for each category
  const categoriesWithPercentage: BudgetCategoryResult[] = categories.map(cat => ({
    name: cat.name,
    amount: cat.amount,
    percentage: monthlyIncome > 0 ? (cat.amount / monthlyIncome) * 100 : 0,
  }));
  
  return {
    totalIncome: monthlyIncome,
    totalExpenses: Math.round(totalExpenses),
    remainingBalance: Math.round(remainingBalance),
    savingsRate: Math.round(savingsRate * 10) / 10,
    categories: categoriesWithPercentage,
    isDeficit,
  };
}
