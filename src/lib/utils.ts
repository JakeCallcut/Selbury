import { clsx, type ClassValue } from 'clsx';

// Simple class name merger (no need for external package)
export function cn(...classes: ClassValue[]): string {
  return clsx(classes);
}

// Format currency for display
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format number with commas
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-GB').format(num);
}

// Format percentage
export function formatPercentage(num: number, decimals: number = 1): string {
  return `${num.toFixed(decimals)}%`;
}
