import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Volleyball } from "lucide-react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { z } from "zod"

const formSchema = z.object({
    firstName: z.string().min(2, { message: "Firstname is required" }).max(50),
    lastName: z.string().min(2, { message: "Lastname is required" }).max(50),
    email: z.string().email().min(2, { message: "Email is required" }),
    password: z.string().min(2, { message: "Password is required" }),
    confirmPassword: z.string().min(2, { message: "Confirm password is required" }),
});

const SignUp = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        mode: "all",
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-dvh">
                <div className="hidden lg:block">
                    <img src="./assets/images/kano-pillars.jpg" alt="Kano pillars" className="w-full h-full object-cover object-center pointer-events-none" />
                </div>
                <div className="w-full place-self-center p-5 flex flex-col gap-5">
                    <div className="flex items-center justify-center">
                        <Link to={"/"} className={`flex items-center space-x-2 text-green-500`}>
                            <Volleyball />
                            <h1 className="font-bold text-xl">Scitadel</h1>
                        </Link>
                    </div>
                    <p className="text-center">Create an account</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-3 place-content-center">
                            <div className="w-full col-span-2 lg:col-span-1">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel>Firstname</FormLabel>
                                            <FormControl>
                                                <Input className="focus-visible:outline-none focus-visible:border-none focus-visible:ring-green-500" placeholder="Enter firstname" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full col-span-2 lg:col-span-1">
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Lastname</FormLabel>
                                            <FormControl>
                                                <Input className="focus-visible:outline-none focus-visible:border-none focus-visible:ring-green-500" placeholder="Enter lastname" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full col-span-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input className="focus-visible:outline-none focus-visible:border-none focus-visible:ring-green-500" type="email" placeholder="Enter email" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full col-span-2 lg:col-span-1">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input className="focus-visible:outline-none focus-visible:border-none focus-visible:ring-green-500" type="password" placeholder="Enter password" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full col-span-2 lg:col-span-1">
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm password</FormLabel>
                                            <FormControl>
                                                <Input className="focus-visible:outline-none focus-visible:border-none focus-visible:ring-green-500" type="password" placeholder="Enter confirm password" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" className="w-full col-span-2 bg-green-700 hover:bg-green-600">Submit</Button>
                        </form>
                    </Form>
                    <span className="text-sm">Already have an account? <Link to={"/signin"} className="text-green-700">Signin</Link> </span>
                </div>
            </div>
        </>
    )
}

export default SignUp