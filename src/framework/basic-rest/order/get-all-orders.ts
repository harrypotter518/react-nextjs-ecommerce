import { QueryOptionsType, Order } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchOrders = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.ORDERS);
  return { orders: { data: data as Order[] } };
};
export const useOrdersQuery = (options: QueryOptionsType) => {
  return useQuery<{ orders: { data: Order[] } }, Error>(
    [API_ENDPOINTS.ORDERS, options],
    fetchOrders
  );
};
