import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

const Clock = component$(() => {
  const state = useStore({
    seconds: 0,
  });

  useClientEffect$(() => {
    const interval = setInterval(() => {
      state.seconds++;
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div>Seconds: {state.seconds}</div>
    </>
  );
});

export default Clock;
