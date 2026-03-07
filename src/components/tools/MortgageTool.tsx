'use client';

import { useState } from 'react';
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { calculateMortgageAffordability, MortgageAffordabilityResult } from '@/lib/calculations';
import { formatCurrency } from '@/lib/utils';

export function MortgageTool() {
  const [annualIncome, setAnnualIncome] = useState('');
  const [partnerIncome, setPartnerIncome] = useState('');
  const [monthlyDebts, setMonthlyDebts] = useState('');
  const [deposit, setDeposit] = useState('');
  const [result, setResult] = useState<MortgageAffordabilityResult | null>(null);

  const handleCalculate = () => {
    const input = {
      annualIncome: parseFloat(annualIncome) || 0,
      partnerIncome: parseFloat(partnerIncome) || 0,
      monthlyDebts: parseFloat(monthlyDebts) || 0,
      deposit: parseFloat(deposit) || 0,
    };
    setResult(calculateMortgageAffordability(input));
  };

  const handleReset = () => {
    setAnnualIncome('');
    setPartnerIncome('');
    setMonthlyDebts('');
    setDeposit('');
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Your Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Your annual income (gross)"
              type="number"
              placeholder="e.g. 45000"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              min="0"
            />
            <Input
              label="Partner's annual income (optional)"
              type="number"
              placeholder="e.g. 35000"
              value={partnerIncome}
              onChange={(e) => setPartnerIncome(e.target.value)}
              min="0"
            />
            <Input
              label="Monthly debt repayments"
              type="number"
              placeholder="e.g. 200"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(e.target.value)}
              hint="Credit cards, loans, car finance, etc."
              min="0"
            />
            <Input
              label="Deposit saved"
              type="number"
              placeholder="e.g. 30000"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              min="0"
            />
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
        <Card variant="bordered" className="bg-primary/5">
          <CardHeader>
            <CardTitle>Your Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted mb-1">Maximum property price</p>
                <p className="text-3xl font-semibold text-primary">
                  {formatCurrency(result.maxPropertyPrice)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Maximum borrowing</p>
                <p className="text-2xl font-semibold text-foreground">
                  {formatCurrency(result.maxBorrowing)}
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Total household income</span>
                <span className="font-medium">{formatCurrency(result.totalHouseholdIncome)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Income multiplier used</span>
                <span className="font-medium">{result.incomeMultiplier}x</span>
              </div>
              {result.monthlyDebtImpact > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Borrowing reduction (debts)</span>
                  <span className="font-medium text-red-600">-{formatCurrency(result.monthlyDebtImpact)}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-muted mt-6">
              This is an estimate based on a {result.incomeMultiplier}x income multiplier. 
              Actual lending decisions depend on your credit history, outgoings, and lender criteria.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
