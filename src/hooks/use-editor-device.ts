import { useQuery, useQueryClient } from "@tanstack/react-query";

export const editorDeviceQuery = "editor-device-query" as const;
export type TDevices = "Desktop" | "Tablet" | "Smartphone";
export type TUseEditorDeviceQuery = [TDevices, (newDevice: string) => void];

/**
 * Custom hook to manage the editor device state.
 *
 * @returns {TUseEditorDeviceQuery} A tuple containing the current editor device state and a function to change the editor device.
 *
 * @example
 * const [editorDevice, changeEditorDevice] = useEditorDevice();
 *
 * @remarks
 * This hook uses React Query's `useQuery` and `useQueryClient` to manage the state.
 * The initial state of the editor device is set to `false`.
 *
 * @function
 * @name useEditorDevice
 */
export function useEditorDevice(): TUseEditorDeviceQuery {
  const queryClient = useQueryClient();

  const { data } = useQuery(
    {
      queryKey: [editorDeviceQuery],
      queryFn: async () => {
        return "Desktop" as TDevices;
      },
      initialData: "Desktop" as TDevices,
    },
    queryClient
  );
  const changeEditorDevice = (newDevice: string) => {
    queryClient.setQueryData([editorDeviceQuery], newDevice as TDevices);
  };

  return [data, changeEditorDevice];
}
