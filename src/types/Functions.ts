export type UpdatingFunction = (
  id: number,
  updatedTitle?: string | null,
) => Promise<void> | void;

export type DeletingFunction = (itemID: number) => void;
