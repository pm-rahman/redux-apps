import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue } from "../redux/features/counter/Counter";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center gap-3 mt-5">
      <button
        onClick={() => dispatch(decrement())}
        className="border px-4 py-2 bg-red-500"
      >
        Decrement
      </button>
      <h2>{count}</h2>
      <button
         onClick={() =>dispatch(increment())}
        className="border px-4 py-2 bg-green-500"
      >
        Increment
      </button>
      <button
         onClick={() =>dispatch(incrementByValue(3))}
        className="border px-4 py-2 bg-green-500"
      >
        2*
      </button>
    </div>
  );
};

export default Counter;
