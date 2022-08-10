import { useStore, component$, Host } from "@builder.io/qwik";

export const App = component$(() => {
  const state = useStore({ value: 0 });

  return (
    <Host class="my-app p-20 space-x-2">
      <h1 class="text-4xl mb-2">Value: {state.value}</h1>
      <button
        class="w-44 h-10 bg-blue-700 text-white font-bold rounded"
        onClick$={() => state.value++}
      >
        Increment
      </button>
      <button
        class="w-44 h-10 bg-red-700 text-white font-bold rounded"
        onClick$={() => state.value--}
      >
        Decrement
      </button>
    </Host>
  );
});
