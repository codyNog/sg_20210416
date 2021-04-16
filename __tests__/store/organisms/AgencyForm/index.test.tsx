import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { spyBackend } from "__tests__/mocks/backend";
import { MockedRouter } from "__tests__/mocks/router";
import { mocks } from "__tests__/mocks";
import { useAgencyForm } from "~/store/organisms/AgencyForm";

const wrapper = ({ children }) => {
  return <MockedRouter>{children}</MockedRouter>;
};

const wrapperHasUserId = ({ children }) => {
  return (
    <MockedRouter router={{ query: { agencyId: "foo" } }}>
      {children}
    </MockedRouter>
  );
};

describe("useAgencyForm", () => {
  beforeEach(() => {
    spyBackend();
  });
  test("初期状態", async () => {
    const { result } = renderHook(() => useAgencyForm(), {
      wrapper
    });
    expect(result.current.agency).toBeUndefined;
  });
  test("パスにagencyIdがある場合の初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAgencyForm(), {
      wrapper: wrapperHasUserId
    });
    await waitForNextUpdate();
    expect(result.current.agency).toStrictEqual(mocks.agency);
  });
});
