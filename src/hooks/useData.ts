import { useEffect, useState } from "react";
import ApiClients from "../services/ApiClients";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchData<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      ApiClients.get<FetchData<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );
  return { error, isLoading, data };
};
export default useData;
