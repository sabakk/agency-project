import { createSelector } from "reselect";

const usersSelector = state => state.users.users;

export const getSortUsers = createSelector(
  [usersSelector],
  users =>
    users.sort((a, b) =>
      a.registration_timestamp < b.registration_timestamp ? 1 : -1
    )
);
