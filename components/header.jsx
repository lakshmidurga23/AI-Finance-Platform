import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
const Header =  async () => {
  await checkUser();
  return(
  <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">

    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
        <Image src={"/logo.png"}alt="Nexura logo"  height={100} width={200}
  className="h-20 w-auto object-contain "
        />
        </Link>
    <div className="flex items-center gap-2">
<SignedIn>
<Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
    <Button variant="outline" >
  <LayoutDashboard size={18}  />
  <span className="text-gray-700">Dashboard</span>
</Button>
  </Link>

  <Link href="/transaction/create">
    <Button  className="flex items-center gap-2">
  <PenBox size={18}  />
  <span className="hidden md:inline">Add Transaction</span>
</Button>
  </Link>
</SignedIn>
   
     <SignedOut>
       <SignInButton forceRedirectUrl="/dashboarrd">
      <Button variant="outline" className="mr-2">Login</Button>
             </SignInButton>
              
            </SignedOut>

            <SignedIn>
              <UserButton 
              appearance={{
                elements:{
                  avatarBox:"w-10 h-10",
                },
              }}
              />
            </SignedIn>
 </div>
    </nav>
  </div>
  );
};

export default Header;
