import { Filters, Invoices, Licenses } from '@/components/dashboard';

import { FiltersProvider } from '@/context';

export default function Page() {
  return (
    <FiltersProvider>
      <div className="h-[calc(100vh-10rem)] w-full space-y-8 px-4">
        <div className="flex items-center justify-start gap-4">
          <Filters />
        </div>
        <div className="w-full space-y-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 flex h-60 items-center justify-center">
              <Invoices />
            </div>
            <span className="skeleton col-span-4 h-60 opacity-20" />
          </div>
          <div className="grid grid-cols-12 gap-4">
            <span className="skeleton col-span-5 h-60 opacity-20" />
            <span className="skeleton col-span-3 h-60 opacity-20" />
            <div className="col-span-4 flex h-60 items-center justify-center">
              <Licenses />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <span className="skeleton col-span-8 h-60 opacity-20" />
          </div>
        </div>
      </div>
    </FiltersProvider>
  );
}
