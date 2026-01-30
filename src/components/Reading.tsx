import { useState } from "react";
export const Reading = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			{count}
			<button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
		</>
	);
};
