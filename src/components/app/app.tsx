import { component$, Host } from "@builder.io/qwik";
import Clock from "../clock/clock";

export const App = component$(() => {
  return (
    <Host class="my-app p-20 space-x-2">
      <Clock />
    </Host>
  );
});
