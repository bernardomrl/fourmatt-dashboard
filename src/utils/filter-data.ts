import { DataModel as Model } from '@/types/models';
import { FiltersProps as Props } from '@/types/props';

export function filterData(data: Model[], filters: Props) {
  let filteredData = [...data];

  const convertDate = (dateString: string) => {
    const [month, day, year] = dateString.split('-');
    return `${year}-${month}-${day}`;
  };

  filteredData.sort((a, b) => {
    const dateA = new Date(convertDate(a.date)).getTime();
    const dateB = new Date(convertDate(b.date)).getTime();
    return dateA - dateB;
  });

  if (filters.date?.startDate && filters.date?.endDate) {
    if (filters.date.endDate === filters.date.startDate) {
      const selectedDate = new Date(filters.date.startDate);
      const selectedDateString = selectedDate.toISOString().slice(0, 10);

      filteredData = filteredData.filter((entry) => {
        const entryDate = new Date(entry.date);
        const entryDateString = entryDate.toISOString().slice(0, 10);
        return entryDateString === selectedDateString;
      });
    } else {
      const startDate = new Date(filters.date.startDate);
      const endDate = new Date(filters.date.endDate);
      filteredData = filteredData.filter((entry) => {
        const entryDate = new Date(entry.date);
        return entryDate >= startDate && entryDate <= endDate;
      });
    }
  } else if (filters.date?.startDate && !filters.date?.endDate) {
    const startDate = new Date(filters.date.startDate);
    filteredData = filteredData.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate;
    });
  } else if (!filters.date?.startDate && filters.date?.endDate) {
    const endDate = new Date(filters.date.endDate);
    filteredData = filteredData.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate <= endDate;
    });
  }

  if (filters.category !== 'DEFAULT') {
    filteredData = filteredData.filter(
      (entry) => entry.category === filters.category
    );
  }

  if (filters.application !== 'DEFAULT') {
    filteredData = filteredData.filter(
      (entry) => entry.application === filters.application
    );
  }
  return filteredData;
}
