import { schema } from 'normalizr';

const items = new schema.Entity('items');

export const arrayOfCampaings = { items: [items] };
