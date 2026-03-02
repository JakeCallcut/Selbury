'use client';

import { useState } from 'react';
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { calculateBudget, BudgetResult, DEFAULT_CATEGORIES } from '@/lib/calculations';
import { formatCurrency } from '@/lib/utils';

interface CategoryInput {
  name: string;
  amount: string;
}

export function BudgetPlanner() {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [categories, setCategories] = useState<CategoryInput[]>(
    DEFAULT_CATEGORIES.map(name => ({ name, amount: '' }))
  );
  const [result, setResult] = useState<BudgetResult | null>(null);

  const handleCategoryChange = (index: number, value: string) => {
    const newCategories = [...categories];
    newCategories[index].amount = value;
    setCategories(newCategories);
  };

  const handleCalculate = () => {
    const input = {
      monthlyIncome: parseFloat(monthlyIncome) || 0,
      categories: categories.map(cat => ({
        name: cat.name,
        amount: parseFloat(cat.amount) || 0,
      })),
    };
    setResult(calculateBudget(input));
  };

  const handleReset = () => {
    setMonthlyIncome('');
    setCategories(DEFAULT_CATEGORIES.map(name => ({ name, amount: '' })));
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Monthly Income</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            label="Take-home pay (after tax)"
            type="number"
            placeholder="e.g. 3000"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            min="0"
          />
        </CardContent>
      </Card>

      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Monthly Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <Input
                key={category.name}
                label={category.name}
                type="number"
                placeholder="0"
                value={category.amount}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                min="0"
              />
            ))}
          </div>
          
          <div className="flex gap-3 mt-6">
            <Button onClick={handleCalculate}>
              Calculate
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card variant="bordered" className={result.isDeficit ? 'bg-red-50 dark:bg-red-900/20' : 'bg-primary/5'}>
          <CardHeader>
            <CardTitle>Budget Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-muted mb-1">Total income</p>
                <p className="text-2xl font-semibold">{formatCurrency(result.totalIncome)}</p>
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Total expenses</p>
                <p className="text-2xl font-semibold">{formatCurrency(result.totalExpenses)}</p>
              </div>
              <div>
                <p className="text-sm text-muted mb-1">
                  {result.isDeficit ? 'Monthly deficit' : 'Monthly surplus'}
                </p>
                <p className={`text-2xl font-semibold ${result.isDeficit ? 'text-red-600' : 'text-primary'}`}>
                  {result.isDeficit ? '-' : ''}{formatCurrency(Math.abs(result.remainingBalance))}
                </p>
              </div>
            </div>

            {!result.isDeficit && result.savingsRate > 0 && (
              <div className="mb-6 p-3 bg-accent/10 border border-accent/30">
                <p className="text-sm text-foreground">
                  You&apos;re saving {result.savingsRate}% of your income
                </p>
              </div>
            )}

            {result.isDeficit && (
              <div className="mb-6 p-3 bg-red-100 border border-red-300 dark:bg-red-900/30 dark:border-red-800">
                <p className="text-sm text-foreground">
                  Your expenses exceed your income. Consider reviewing your spending.
                </p>
              </div>
            )}

            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-medium mb-3">Expense breakdown</h4>
              <div className="space-y-2">
                {result.categories
                  .filter(cat => cat.amount > 0)
                  .sort((a, b) => b.amount - a.amount)
                  .map((category) => (
                    <div key={category.name} className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted">{category.name}</span>
                          <span className="font-medium">{formatCurrency(category.amount)}</span>
                        </div>
                        <div className="h-2 bg-border overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${Math.min(category.percentage, 100)}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-muted w-12 text-right">
                        {category.percentage.toFixed(1)}%
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <p className="text-xs text-muted mt-6">
              A common guideline is the 50/30/20 rule: 50% on needs, 30% on wants, 20% on savings.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
