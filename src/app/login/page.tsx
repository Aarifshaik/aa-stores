// 'use client';
// import { useState } from "react";
// import Image from "next/image";
// import SHA256 from "crypto-js/sha256";
// import { useRouter } from "next/navigation";
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
// import { useAuth } from "../../context/authContext";

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu"

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
//   const emh="ea2cddea06e003f5c7d30e668f06b152911c8e1020df805367fdaddffca896d2";
//   const ph="701c502e60dc450ad5f6241130cb3d65b85f64dd58a1a0e0f10d175de358bf85";
//   const { login } = useAuth();
//   const router = useRouter();
//   const { theme,setTheme } = useTheme()

//   // useState(() => {
//   //   console.log(theme)
//   // }
//   // );

//   const changeTheme = () => {
//     // const currentTheme = "dark";
//     if(theme === "dark"){
//     setTheme("light")
//     }
//     else {
//     setTheme("dark")
//     }
//   };


//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email === '' || password === '') {
//       alert('Please fill all the fields');
//       return;
//     }

//     const emHa = SHA256(email).toString();
//     const paHa = SHA256(password).toString();

//     if(emHa === emh && paHa === ph){
//       const user = { email: email , name: "Ayesha" };
//       login(user);
//       router.push('/');
//     } else {
//       alert('Login Failed');
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-end p-4">
//         <Button variant="outline" size="icon" onClick={() => changeTheme()}>
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </div>

//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
//         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-[-70px]">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <h1 className="text-xl font-semibold sm:text-2xl">Please Login, Ayesha Madam..!</h1>
//         <form className="flex flex-col gap-5 w-full max-w-lg" onSubmit={handleLogin}>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-base font-medium text-gray-700 dark:text-gray-300"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-2 block w-full px-4 py-3 bg-white dark:bg-black/[.2] border border-gray-300 dark:border-gray-600 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
//               placeholder="you@example.com"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-base font-medium text-gray-700 dark:text-gray-300"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={passwordVisible ? "text" : "password"} // Toggle input type
//                 id="password"
//                 name="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-2 block w-full px-4 py-3 bg-white dark:bg-black/[.2] border border-gray-300 dark:border-gray-600 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
//                 placeholder="••••••••"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
//                 style={{ background: 'transparent', border: 'none' }} // Make the button transparent
//               >
//                 {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />} {/* Show the correct icon */}
//               </button>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base sm:text-lg h-12 sm:h-14 px-5 sm:px-6"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
//           Forgot Password?{' '} →{' '}   
//           <a
//             onClick={() => alert('Call A², You know the number')}
//             className="text-blue-600 hover:underline dark:text-blue-400"
//           >
//             Ask Aa..!
//           </a>
//         </p>
//       </main>
//     </div>
//     </div>
//   );
// }








// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   password: z.string().min(8, {
//     message: "Password must be at least 8 characters.",
//   }),
// })

// export default function ProfileForm() {
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//       password: "",
//     },
//   })

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }









"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SHA256 from "crypto-js/sha256"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useAuth } from "../../context/authContext";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  // password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  password:z.any(),
});

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const { theme, setTheme } = useTheme();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const emh = "ea2cddea06e003f5c7d30e668f06b152911c8e1020df805367fdaddffca896d2";
  const ph = "701c502e60dc450ad5f6241130cb3d65b85f64dd58a1a0e0f10d175de358bf85";

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const { email, password } = values;
    const emHa = SHA256(email).toString();
    const paHa = SHA256(password).toString();

    if (emHa === emh && paHa === ph) {
      const user = { email, name: "Ayesha" };
      login(user);
      router.push("/product");
    } else {
      alert("Login Failed");
    }
  }

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="flex justify-end p-4">
        <Button variant="outline" size="icon" onClick={changeTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-[-180px]">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-xl font-semibold sm:text-2xl">Please Login....! Madamo</h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5 w-full max-w-lg"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter your registered email address.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={passwordVisible ? "text" : "password"}
                          placeholder="••••••••"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
                        >
                          {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormDescription>Enter your secure password.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base sm:text-lg h-12 sm:h-14 px-5 sm:px-6"
              >
                Login
              </Button>
            </form>
          </Form>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Forgot Password?{' '} →{' '}
            <a
              onClick={() => alert('Call A², You know the number')}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Ask Aa..!
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
