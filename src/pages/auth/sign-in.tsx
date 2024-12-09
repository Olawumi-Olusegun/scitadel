import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Volleyball } from "lucide-react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { z } from "zod"

const formSchema = z.object({
    email: z.string().email().min(2, { message: "Email is required" }),
    password: z.string().min(2, { message: "Password is required" }),
});

const SignIn = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        mode: "all",
        resolver: zodResolver(formSchema),
        defaultValues: {

            email: "",
            password: "",
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
                    <p className="text-center">Welcome back!</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-3 place-content-center">

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
                            <div className="w-full col-span-2">
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

                            <Button type="submit" className="w-full col-span-2 bg-green-700 hover:bg-green-600">Submit</Button>
                        </form>
                    </Form>
                    <Link to={"/signup"} className="text-sm text-center text-green-700">Don't have an account? Signup</Link>

                </div>
            </div>
        </>
    )
}

export default SignIn