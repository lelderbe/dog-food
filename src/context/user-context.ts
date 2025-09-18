import { createContext, useContext } from 'react';

export const UserContext = createContext<IUser | null>(null);

UserContext.displayName = 'UserContext';

export const useCurrentUser = () => useContext(UserContext);
