'use client';

import Picker, { DateValueType } from 'react-tailwindcss-datepicker';

import { useFilters } from '@/context';
import { appData as data } from '@/data';
import { AppModel as Model } from '@/types/models';

export function Filters() {
  const { filters, setFilters } = useFilters();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handlePickerChange = (e: DateValueType) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      date: e
    }));
  };

  const categories = data.reduce((categories: string[], entry: Model) => {
    if (!categories.includes(entry.category)) {
      return [...categories, entry.category];
    }
    return categories;
  }, []);

  const applications =
    filters.category !== 'DEFAULT'
      ? data.filter((entry) => entry.category === filters.category)
      : [];

  const selectedCategoryApps = applications.length === 1 ? applications : [];

  // Determine o valor padrão do aplicativo com base na categoria selecionada
  const defaultAppValue =
    selectedCategoryApps.length === 1
      ? selectedCategoryApps[0].application
      : 'DEFAULT';

  return (
    <>
      <div className="relative h-max w-full max-w-xs font-sans">
        <Picker
          value={filters.date}
          useRange={false}
          onChange={handlePickerChange}
          separator={'~'}
          containerClassName={'w-full max-w-xs'}
          inputClassName={
            'input input-ghost input-primary w-full max-w-xs rounded-lg'
          }
        />
      </div>
      <select
        className="select select-ghost select-primary w-full max-w-xs rounded-lg font-sans"
        defaultValue={'DEFAULT'}
        name="category"
        onChange={handleSelectChange}
      >
        <option value={'DEFAULT'}>Categories</option>
        {categories.map((entry, index) => (
          <option key={index} value={entry} className="font-sans">
            {entry}
          </option>
        ))}
      </select>
      <select
        className="select select-ghost select-primary w-full max-w-xs rounded-lg font-sans"
        defaultValue={defaultAppValue}
        name="application"
        onChange={handleSelectChange}
      >
        <option value={'DEFAULT'}>Applications</option>
        {applications.map((entry, index) => (
          <option key={index} value={entry.application}>
            {entry.application}
          </option>
        ))}
      </select>
    </>
  );
}
