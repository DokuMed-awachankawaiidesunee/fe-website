// import { ReactNode, useState, useEffect } from 'react';
// import { useQuery } from 'react-query';
// import { UserContext } from './UserContext';
// import { User } from '@/utils/interfaces';
// import { getAuthProfile } from '@/services/profile';

// const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User>();
//   const { data, isLoading, refetch } = useQuery({
//     queryKey: ['current'],
//     queryFn: () => getAuthProfile(),
//   });
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setLoading(isLoading);
//     if (!isLoading && data?.data?.body) {
//       setUser(data.data.body);
//     }
//   }, [data, isLoading]);

//     const login = () => {
//       refetch();
//     };
  
//     const logout = async () => {
//       console.log("im in the thick of it");
//       setUser(undefined); 
//     };

//   return (
//     <UserContext.Provider value={{ user, loading, setUser, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;