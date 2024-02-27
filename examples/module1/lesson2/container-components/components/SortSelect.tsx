import { Dispatch, SetStateAction } from 'react';

export function SortSelect({
  sortOption,
  setSortOption,
}: {
  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;
}) {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value="name">Name</option>
        <option value="created">Created Date</option>
      </select>
    </label>
  );
}
