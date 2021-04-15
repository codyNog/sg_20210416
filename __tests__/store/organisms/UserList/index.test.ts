import { useUserList } from "~/store/organisms/UserList";
import { renderHook } from "@testing-library/react-hooks";
import { mocks } from "__tests__/mocks";
import { spyBackend } from "__tests__/mocks/backend";

describe("useUserList", () => {
  beforeEach(() => {
    spyBackend();
  });
  test("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUserList());
    await waitForNextUpdate();
    expect(result.current.users).toStrictEqual(mocks.users);
  });
});
