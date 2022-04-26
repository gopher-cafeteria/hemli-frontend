import { setActivePinia, createPinia } from "pinia";
import { useCounterStore } from "../counter";

describe("Counter Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("increments", () => {
    const counter = useCounterStore();
    expect(counter.counter).toBe(0);
    counter.increment();
    counter.increment();
    counter.increment();
    expect(counter.counter).toBe(3);
  });

  it("shows double count", () => {
      const counter = useCounterStore();
      counter.increment();
      counter.increment();
      counter.increment();
      expect(counter.doubleCount).toBe(6)
  })
});
