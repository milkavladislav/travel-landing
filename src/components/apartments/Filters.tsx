import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { IoIosArrowDown } from "react-icons/io";

interface IOption {
  label: string;
  defaultValue: { value: string; label: string };
  options: { value: string; label: string }[];
}

const formOptions: IOption[] = [
  {
    label: "date",
    defaultValue: { value: "Tue, 3 Nov", label: "Tue, 3 Nov" },
    options: [
      { value: "Tue, 3 Nov", label: "Tue, 3 Nov" },
      { value: "Tue, 4 Nov", label: "Tue, 4 Nov" },
      { value: "Tue, 5 Nov", label: "Tue, 5 Nov" },
    ],
  },
  {
    label: "country",
    defaultValue: { value: "Morocco", label: "Morocco" },
    options: [
      { value: "Morocco", label: "Morocco" },
      { value: "Ukraine", label: "Ukraine" },
      { value: "USA", label: "USA" },
    ],
  },
  {
    label: "place",
    defaultValue: { value: "Reine", label: "Reine" },
    options: [
      { value: "Reine", label: "Reine" },
      { value: "Norway", label: "Norway" },
      { value: "Bergen", label: "Bergen" },
    ],
  },
];

const Filters = () => {
  const { handleSubmit, control, watch } = useForm();

  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formOptions.map(({ label, defaultValue, options }) => (
        <div className="options__element">
          <label>{label}</label>
          <Controller
            name={label}
            control={control}
            render={({ field }) => (
              <Select
                isSearchable={false}
                defaultValue={defaultValue}
                className="form__option"
                {...field}
                components={{
                  IndicatorsContainer: () => (
                    <IoIosArrowDown className="option__arrow" />
                  ),
                }}
                options={options}
              />
            )}
          />
        </div>
      ))}

      <input type="submit" value="Search" className="form__search-button" />
    </form>
  );
};

export default Filters;
