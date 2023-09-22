import platfromList from "../data/platfromList";
// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }
const usePlatform = () => {
  return { data: platfromList };
};

export default usePlatform;
