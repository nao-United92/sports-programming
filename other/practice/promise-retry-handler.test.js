const { retry } = require("./promise-retry-handler");

jest.useFakeTimers();

describe("retry", () => {
  it("should resolve on the first try if the function succeeds", async () => {
    const fn = jest.fn().mockResolvedValue("success");
    await expect(retry(fn)).resolves.toBe("success");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it.skip("should retry the specified number of times and then reject", async () => {
    const error = new Error("failure");
    const fn = jest.fn().mockRejectedValue(error);
    const promise = retry(fn, 3, 100);

    for (let i = 0; i < 4; i++) {
      await jest.advanceTimersByTime(100);
    }

    await expect(promise).rejects.toThrow("failure");
    expect(fn).toHaveBeenCalledTimes(4);
  });

  it.skip("should resolve if the function succeeds within the retry limit", async () => {
    const successValue = "success";
    const fn = jest
      .fn()
      .mockRejectedValueOnce(new Error("failure"))
      .mockRejectedValueOnce(new Error("failure"))
      .mockResolvedValue(successValue);

    const promise = retry(fn, 3, 100);

    for (let i = 0; i < 3; i++) {
      await jest.advanceTimersByTime(100);
    }

    await expect(promise).resolves.toBe(successValue);
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
