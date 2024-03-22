'use client';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { useFilters } from '@/context';
import { mainData as data } from '@/data';
import { DataModel as Model } from '@/types/models';
import { formatDate, filterData } from '@/utils';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Invoice spend overtime'
    }
  }
};

export function Invoices() {
  const { filters } = useFilters();
  const [filteredData, setFilteredData] = useState<Model[]>([]);

  useEffect(() => {
    const filtered = filterData(data, filters);
    const groupedData = groupDataByDate(filtered);
    setFilteredData(groupedData);
  }, [filters]);

  const groupDataByDate = (data: Model[]): Model[] => {
    const groupedData: { [key: string]: Model } = {};
    data.forEach((entry) => {
      const formattedDate = formatDate(entry.date);
      if (!groupedData[formattedDate]) {
        groupedData[formattedDate] = { ...entry };
      } else {
        groupedData[formattedDate].spend += entry.spend;
      }
    });
    return Object.values(groupedData);
  };

  const chartData = {
    labels: filteredData.map((entry) => formatDate(entry.date)),
    datasets: [
      {
        label: 'Invoice Spend',
        data: filteredData.map((entry) => entry.spend),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };

  return (
    <Line
      options={options}
      data={chartData}
      height={40}
      width={200}
      className="h-full w-full"
    />
  );
}
