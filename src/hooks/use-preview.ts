import { useQuery, useQueryClient } from "@tanstack/react-query";

export const previewQuery = "preview-query" as const;
type TUsePreviewQuery = [boolean, () => void, () => void];

/**
 * Custom hook to manage preview mode state.
 *
 * @returns {TUsePreviewQuery} A tuple containing:
 * - `isPreviewMode` (boolean): The current state of preview mode.
 * - `enterPreviewMode` (function): Function to enable preview mode.
 * - `exitPreviewMode` (function): Function to disable preview mode.
 */
export function usePreview(): TUsePreviewQuery {
  const queryClient = useQueryClient();

  const { data } = useQuery(
    {
      queryKey: [previewQuery],
      queryFn: async () => {
        return false;
      },
      initialData: false,
    },
    queryClient
  );
  const enterPreviewMode = () => {
    queryClient.setQueryData([previewQuery], true);
  };
  const exitPreviewMode = () => {
    queryClient.setQueryData([previewQuery], false);
  };

  return [data, enterPreviewMode, exitPreviewMode];
}
