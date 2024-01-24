

export const logout = async (router:any) => {
    
  try {
    await fetch("/api/logout",{
      method:'GET'
    });
    
  } catch (error: any) {
    console.log(error.message);
  }
};
