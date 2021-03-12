import * as Sentry from "@sentry/node";
import { SENTRY_DSN, ENV } from "~/constants/env";
import { ErrorInfo } from "react";

export const initSentry = () => {
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
      environment: ENV,
      ignoreErrors: ["ResizeObserver loop limit exceeded"],
      beforeSend(event, hint) {
        if (hint && String(hint.originalException).includes("401")) return null;
        return event;
      }
    });
  }
};

// eslint-disable-next-line
export const catchWithSentry = (error: Error, errorInfo: ErrorInfo | any) => {
  if (SENTRY_DSN) {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }
};

export const sentryConfig = (uid: string, name: string, loginId: string) => {
  Sentry.configureScope((scope) => {
    scope.setUser({ id: uid, username: name, email: loginId });
  });
};
