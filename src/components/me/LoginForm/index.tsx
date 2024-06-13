import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Input } from '../../ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Button } from '../../ui/button'
import Logo from '../../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'

const LoginFormSchema = z.object({
    email: z.coerce.string().trim().min(1, 'Email is required.').email('Invalid email.'),
    password: z.coerce.string().trim().min(8, 'Password requires at least 8 characters.'),
})

type LoginFormValues = z.infer<typeof LoginFormSchema>


const LoginForm = () => {
    const Navigate = useNavigate()

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(LoginFormSchema),
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmitLoginForm = (values: LoginFormValues) => {
        console.log("sign in with values: ", values)
        Navigate("/")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitLoginForm)}>
                <Card className=' lg:w-80 shadow-none border-none card'>
                    <div className="flex justify-center align-center">
                        <img src={Logo} alt="logo" width={"50%"} className=" text-center" />
                    </div>
                    <CardHeader >
                        <CardTitle className='text-center'>Login</CardTitle>
                        <CardDescription className='text-center'>Please login to access your account.</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-2'>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel >Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" placeholder='example@example.com' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel >Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Button className='w-full'>Login</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}

export default LoginForm