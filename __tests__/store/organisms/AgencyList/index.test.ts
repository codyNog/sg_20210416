import { renderHook } from "@testing-library/react-hooks";
import { mocks } from "__tests__/mocks";
import { spyBackend } from "__tests__/mocks/backend";
import { useAgencyList } from "~/store/organisms/AgencyList";

describe("useUserList", () => {
  beforeEach(() => {
    spyBackend();
  });
  test("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAgencyList());
    await waitForNextUpdate();
    expect(result.current.agencies).toStrictEqual(mocks.agencies);
  });
});
