import { DataModel } from '@/types/models';

export interface AppModel extends Pick<DataModel, 'category' | 'application'> {}
