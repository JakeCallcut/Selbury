'use client';

import { useState } from 'react';
import { Button, Input, Card, CardHeader, CardTitle, CardContent, Checkbox } from '@/components/ui';
import { calculateStampDuty, StampDutyResult } from '@/lib/calculations';
import { formatCurrency } from '@/lib/utils';

export function StampDutyTool() {
  const [propertyPrice, setPropertyPrice] = useState('');
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false);
  const [isAdditionalProperty, setIsAdditionalProperty] = useState(false);
  const [result, setResult] = useState<StampDutyResult | null>(null);

  const handleCalculate = () => {
    const input = {
      propertyPrice: parseFloat(propertyPrice) || 0,
      isFirstTimeBuyer: isFirstTimeBuyer && !isAdditionalProperty,
      isAdditionalProperty,
    };
    setResult(calculateStampDuty(input));
  };

  const handleReset = () => {
    setPropertyPrice('');
    setIsFirstTimeBuyer(false);
    setIsAdditionalProperty(false);
    setResult(null);
  };

  const handleFirstTimeBuyerChange = (checked: boolean) => {
    setIsFirstTimeBuyer(checked);
    if (checked) {
      setIsAdditionalProperty(false);
    }
  };

  const handleAdditionalPropertyChange = (checked: boolean) => {
    setIsAdditionalProperty(checked);
    if (checked) {
      setIsFirstTimeBuyer(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              label="Property price"
              type="number"
              placeholder="e.g. 350000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(e.target.value)}
              min="0"
            />
            
            <div className="space-y-3 pt-2">
              <Checkbox
                label="I am a first-time buyer"
                checked={isFirstTimeBuyer}
                onChange={(e) => handleFirstTimeBuyerChange(e.target.checked)}
              />
              <Checkbox
                label="This is an additional property (second home or buy-to-let)"
                checked={isAdditionalProperty}
                onChange={(e) => handleAdditionalPropertyChange(e.target.checked)}
              />
            </div>
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
            <CardTitle>Stamp Duty Land Tax</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-sm text-muted mb-1">Total stamp duty payable</p>
              <p className="text-3xl font-semibold text-primary">
                {formatCurrency(result.totalTax)}
              </p>
              <p className="text-sm text-muted mt-1">
                Effective rate: {result.effectiveRate}%
              </p>
            </div>

            {result.isFirstTimeBuyer && (
              <div className="mb-4 p-3 bg-accent/10 border border-accent/30">
                <p className="text-sm text-foreground">
                  First-time buyer relief applied
                </p>
              </div>
            )}

            {result.isAdditionalProperty && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800">
                <p className="text-sm text-foreground">
                  3% additional property surcharge applied
                </p>
              </div>
            )}
            
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-medium mb-3">Tax breakdown by band</h4>
              <div className="space-y-2">
                {result.bands.map((band, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted">
                      {formatCurrency(band.taxableAmount)} @ {band.rate}%
                    </span>
                    <span className="font-medium">{formatCurrency(band.taxDue)}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted mt-6">
              Rates shown are for properties in England and Northern Ireland. 
              Scotland and Wales have different tax systems.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
