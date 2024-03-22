import { mainData as data } from '@/data';
import { AppModel as Model } from '@/types/models';

const appData: Model[] = [];

data.forEach((entry) => {
  const matchedEntry = appData.find(
    (existing) =>
      entry.category === existing.category &&
      entry.application === existing.application
  );
  if (!matchedEntry) {
    appData.push({
      category: entry.category,
      application: entry.application
    });
  }
});

export { appData };
