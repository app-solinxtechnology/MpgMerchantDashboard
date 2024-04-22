import { useSafeState } from "ahooks";

export const useMemoryClick = (value?:any) => {
  const [state, setstate] = useSafeState(value);

  return [state, setstate];
};
