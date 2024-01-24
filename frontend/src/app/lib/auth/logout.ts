import { useRouter } from "next/navigation";


export const logout = async (router:any) => {
    
  try {
    await fetch("/api/logout",{
        method:'POST'
    });
    router.push("/login");
  } catch (error: any) {
    console.log(error.message);
  }
};
