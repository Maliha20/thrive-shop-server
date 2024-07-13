export type TCheckout = {
  items: string[];
  totalPrice: number;
  paymentMethod: string;
  userInformation: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
};
