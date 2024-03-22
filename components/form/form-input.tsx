"use client";

import { forwardRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormErrors } from "@/components/form/form-errors";

interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      className,
      defaultValue,
      disabled,
      errors,
      label,
      onBlur,
      placeholder,
      required,
      type,
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        {label ? (
          <div className="space-y-1">
            <Label htmlFor={id}>{label}</Label>
          </div>
        ) : null}
        <Input
          onBlur={onBlur}
          defaultValue={defaultValue}
          ref={ref}
          required={required}
          name={id}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          className={cn("text-sm px-2 py-1 h-7", className)}
          aria-describedby={`${id}-error`}
        />

        <FormErrors id={id} errors={errors} />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
