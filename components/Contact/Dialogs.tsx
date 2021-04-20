import { ErrorPayload } from "@formspree/react/dist/types/src/types";
import { useEffect, useState } from "react";

const Dialogs = (props: {
  state: {
    submitting: boolean;
    succeeded: boolean;
    errors: ErrorPayload[];
  };
}): JSX.Element => {
  const { state } = props;
  const [submitting, setSubmitting] = useState(state.submitting);
  const [succeeded, setSucceeded] = useState(state.succeeded);
  const [error, setError] = useState(!!state.errors.length);

  useEffect(() => {
    setSubmitting(state.submitting);
    setSucceeded(state.succeeded);
    setError(!!state.errors.length);
  }, [state.submitting, state.succeeded, state.errors]);

  return (
    <>
      {submitting && (
        <div
          onClick={() => setSubmitting(false)}
          className="cursor-pointer fixed bottom-16 font-semibold bg-blue-300 py-2 pr-3 pl-4 opacity-95 border-2 rounded-xl border-blue-500 z-50 right-50"
        >
          Sending...
        </div>
      )}
      {succeeded && (
        <div
          onClick={() => setSucceeded(false)}
          className=" cursor-pointer fixed bottom-16 font-semibold bg-green-400 py-2 px-4 opacity-95 border-2 rounded-xl border-green-600 z-50 right-50"
        >
          Your message was sent!
        </div>
      )}
      {error && (
        <div className="cursor-pointer fixed bottom-16 font-semibold text-gray-50 bg-red-500 py-2 px-4 opacity-95 border-2 rounded-xl border-red-700 z-50 right-50">
          There was an error while submitting the form
        </div>
      )}
    </>
  );
};

export default Dialogs;
