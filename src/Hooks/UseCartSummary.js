import { CartSummary } from "../Api/CartSummary";

export const UseCartSummary = () => {
  return useQuery({
    queryKey: ["cartSummary"],
    queryFn: CartSummary, 
  });
};
