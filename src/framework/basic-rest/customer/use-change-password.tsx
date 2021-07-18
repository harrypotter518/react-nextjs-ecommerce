// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useMutation } from "react-query";

export interface ChangePasswordInputType {
  newPassword: string;
  oldPassword: string;
}
async function changePassword(input: ChangePasswordInputType) {
  // return http.post(API_ENDPOINTS.ChangePassword, input);
  return input;
}
export const useChangePasswordMutation = () => {
  return useMutation(
    (input: ChangePasswordInputType) => changePassword(input),
    {
      onSuccess: (data) => {
        console.log(data, "ChangePassword success response");
      },
      onError: (data) => {
        console.log(data, "ChangePassword error response");
      },
    }
  );
};
