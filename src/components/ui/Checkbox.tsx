'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <label
        htmlFor={checkboxId}
        className="flex items-center gap-3 cursor-pointer"
      >
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={cn(
            'w-5 h-5 border-2 border-border bg-card text-primary',
            'focus:ring-2 focus:ring-primary focus:ring-offset-2',
            'checked:bg-primary checked:border-primary',
            'cursor-pointer',
            className
          )}
          {...props}
        />
        <span className="text-sm text-foreground">{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
