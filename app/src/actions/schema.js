import { schema } from 'normalizr';

export const items = new schema.Entity('items');

export const arrayOfCampaings = { items: [items] };
