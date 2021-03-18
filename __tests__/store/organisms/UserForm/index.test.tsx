import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { spyBackend } from "__tests__/mocks/backend";
import { MockedRouter } from "__tests__/mocks/router";
import { useUserForm } from "~/store/organisms/UserForm";
import { mocks } from "__tests__/mocks";

const wrapper = ({ children }) => {
  return <MockedRouter>{children}</MockedRouter>;
};

const wrapperHasUserId = ({ children }) => {
  return (
    <MockedRouter router={{ query: { userId: "foo" } }}>
      {children}
    </MockedRouter>
  );
};

describe("useUserForm", () => {
  beforeEach(() => {
    spyBackend();
  });
  test("初期状態", async () => {
    const { result } = renderHook(() => useUserForm(), {
      wrapper
    });
    expect(result.current.user).toBeUndefined;
  });
  test("パスにuserIdがある場合の初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUserForm(), {
      wrapper: wrapperHasUserId
    });
    await waitForNextUpdate();
    expect(result.current.user).toStrictEqual(mocks.user);
  });
  test("初期状態", async () => {
    const { result } = renderHook(() => useUserForm(), {
      wrapper
    });
    expect(result.current.user).toBeUndefined;
  });
});
