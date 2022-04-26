import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import PiniaCounter from "../PiniaCounter.vue";
import { useCounterStore } from "@/stores/counter";

const wrapper = mount(PiniaCounter, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn(),
      }),
    ],
  },
});
const counterStore = useCounterStore();

describe("PiniaCounter Test", () => {
  it("should exist", () => {
    // has entire component
    expect(PiniaCounter).toBeTruthy();

    // has h1
    expect(wrapper.find("h3").exists()).toBeTruthy();
    // has button
    expect(wrapper.find("button").exists()).toBeTruthy();
  });

  it("should increment counter", async () => {
    // arrange
    const spy = vi.spyOn(counterStore, "increment");
    const button = await wrapper.find("button");
    const result = await wrapper.find("h3");

    // act
    await button.trigger("click");
    await button.trigger("click");
    await button.trigger("click");

    // assert
    expect(spy).toHaveBeenCalled();
    expect(counterStore.increment).toHaveBeenCalledTimes(3)
  });
});
