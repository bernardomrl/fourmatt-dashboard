'use client';

import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import { useFilters } from '@/context';
import { mainData as data } from '@/data';
import { filterData } from '@/utils';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Most expensive licenses'
    }
  }
};

type GroupedData = Record<string, number>;

export function Licenses() {
  const { filters } = useFilters();
  const [groupedAndSortedData, setGroupedAndSortedData] = useState<
    { application: string; spend: number }[]
  >([]);

  useEffect(() => {
    const filtered = filterData(data, filters);
    const groupedData: GroupedData = filtered.reduce(
      (acc: GroupedData, curr) => {
        if (!acc[curr.application]) {
          acc[curr.application] = 0;
        }
        acc[curr.application] += curr.spend;
        return acc;
      },
      {}
    );

    const sortedData = Object.keys(groupedData).map((application) => ({
      application,
      spend: groupedData[application]
    }));

    sortedData.sort((a, b) => b.spend - a.spend);
    setGroupedAndSortedData(sortedData);
  }, [filters]);

  const chartData = {
    labels: groupedAndSortedData.map((entry) => entry.application),
    datasets: [
      {
        label: 'Licenses',
        data: groupedAndSortedData.map((entry) => entry.spend),
        borderColor: 'rgb(161, 214, 246)',
        backgroundColor: 'rgba(161, 214, 246, 0.5)'
      }
    ]
  };

  return <Bar options={options} data={chartData} className="h-full w-full" />;
}
