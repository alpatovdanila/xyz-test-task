//@flow

const ORDER_DESC = 'desc';

const ORDER_ASC = 'asc';

export const orders = {ORDER_DESC, ORDER_ASC};

export type Order = $Values<typeof orders>
