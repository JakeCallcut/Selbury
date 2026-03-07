'use client';

import { useState } from 'react';
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { calculatePensionGrowth, PensionGrowthResult } from '@/lib/calculations';
import { formatCurrency } from '@/lib/utils';

export function PensionCalculator() {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('67');
  const [currentPot, setCurrentPot] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [annualGrowthRate, setAnnualGrowthRate] = useState('5');
  const [result, setResult] = useState<PensionGrowthResult | null>(null);

  const handleCalculate = () => {
    const input = {
      currentAge: parseInt(currentAge) || 30,
      retirementAge: parseInt(retirementAge) || 67,
      currentPot: parseFloat(currentPot) || 0,
      monthlyContribution: parseFloat(monthlyContribution) || 0,
      annualGrowthRate: parseFloat(annualGrowthRate) || 5,
    };
    setResult(calculatePensionGrowth(input));
  };

  const handleReset = () => {
    setCurrentAge('');
    setRetirementAge('67');
    setCurrentPot('');
    setMonthlyContribution('');
    setAnnualGrowthRate('5');
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
              label="Your current age"
              type="number"
              placeholder="e.g. 30"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              min="18"
              max="75"
            />
            <Input
              label="Target retirement age"
              type="number"
              placeholder="e.g. 67"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              min="55"
              max="75"
            />
            <Input
              label="Current pension pot"
              type="number"
              placeholder="e.g. 25000"
              value={currentPot}
              onChange={(e) => setCurrentPot(e.target.value)}
              hint="Total value of your existing pension(s)"
              min="0"
            />
            <Input
              label="Monthly contribution"
              type="number"
              placeholder="e.g. 400"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              hint="Your contributions plus employer match"
              min="0"
            />
            <Input
              label="Expected annual growth rate (%)"
              type="number"
              placeholder="e.g. 5"
              value={annualGrowthRate}
              onChange={(e) => setAnnualGrowthRate(e.target.value)}
              hint="Typically 4-7% for diversified funds"
              min="0"
              max="15"
              step="0.5"
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
            <CardTitle>Projected Pension at Retirement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-sm text-muted mb-1">Estimated pension pot at age {parseInt(retirementAge) || 67}</p>
              <p className="text-3xl font-semibold text-primary">
                {formatCurrency(result.projectedPot)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-t border-b border-border">
              <div>
                <p className="text-sm text-muted mb-1">Years to retirement</p>
                <p className="text-xl font-semibold">{result.yearsToRetirement}</p>
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Total contributions</p>
                <p className="text-xl font-semibold">{formatCurrency(result.totalContributions)}</p>
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Investment growth</p>
                <p className="text-xl font-semibold text-accent">{formatCurrency(result.totalGrowth)}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Current pot</span>
                <span className="font-medium">{formatCurrency(parseFloat(currentPot) || 0)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Future contributions</span>
                <span className="font-medium">{formatCurrency((parseFloat(monthlyContribution) || 0) * result.monthsToRetirement)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Compound growth</span>
                <span className="font-medium text-accent">{formatCurrency(result.totalGrowth)}</span>
              </div>
            </div>

            <p className="text-xs text-muted mt-6">
              This projection assumes a constant growth rate of {annualGrowthRate}% per year. 
              Actual returns will vary and past performance is not a guide to future returns. 
              This does not account for inflation or fees.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
