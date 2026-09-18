import React, { useState } from "react";

const FormField = ({
  label,
  name,
  placeholder,
  error,
  textarea,
  select,
  options,
  value,
  onChange,
  required,
  ...props
}) => {
  // Render form field based on the prop types
  if (!textarea && !select && options) {
    console.error("Options can only be used with a select field.");
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-1 relative">
      <label htmlFor={name} className="ml-2 mb-0.5 text-sm">
        {label} {required && "*"}
      </label>

      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={5}
          className="w-full !outline-none focus:border-main focus:ring-2 focus:ring-main/20 placeholder:text-slate-400 resize-none bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm sm:text-base text-dark transition-all duration-200"
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      ) : select ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full !outline-none focus:border-main focus:ring-2 focus:ring-main/20 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm sm:text-base text-dark transition-all duration-200"
          required={required}
          {...props}
        >
          <option value="" disabled className="text-slate-400">
            {placeholder}
          </option>
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="w-full !outline-none focus:border-main focus:ring-2 focus:ring-main/20 placeholder:text-slate-400 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm sm:text-base text-dark transition-all duration-200"
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      )}

      <small className="text-red-500 text-xs p-1 absolute top-full left-0 w-full text-right">
        {error}
      </small>
    </div>
  );
};

export default FormField;
