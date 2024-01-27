

export const logout = async (router:any) => {
    
  try {
    await fetch("/api/users/logout",{
      method:'GET'
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
