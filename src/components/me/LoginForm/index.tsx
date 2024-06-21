import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Input } from '../../ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Button } from '../../ui/button'
import { toast } from "sonner"
import Logo from '../../../assets/images/logo/logo-icon.png'
import { AuthenticationService } from '@/services/authenticationSerrvice'
import { sessionService } from '@/services/sessionService'

const LoginFormSchema = z.object({
    email: z.string().trim().min(1, 'Email is required.').email('Invalid email.'),
    password: z.string().trim().min(8, 'Password requires at least 8 characters.')
})

type LoginFormValues = z.infer<typeof LoginFormSchema>

const LoginForm = () => {
    const navigate = useNavigate()
    const [wait, setWait] = useState<boolean>(true)

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(LoginFormSchema),
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmitLoginForm = async (values: LoginFormValues) => {
        console.log("sign in with values: ", values)
        if (values.email === "" || values.password === "") {
            toast("Fill in all fields.")
        } else {
            setWait(false)
            try {
                const res = await AuthenticationService.login(values.email, values.password)
                console.log(res);
                
                // const token = res.data.token
                // const idUser = res.data.user.id
                // const role = res.data.user.Role.id
                // const env = res.data.user.Env.id
                // const idStatus = res.data.user.Status.id
                // setWait(true)
                // if (res.data.user.Status.name !== 'actif') {
                //     toast.error("Accès non authorisé !")
                // } else {
                //     sessionService.saveToken(token, idUser, role, env, idStatus)
                //     navigate("/dashboard")
                // }
            } catch (err) {
                setWait(true)
                console.log(err);
                
                // if (err.response) {
                //     if (err.response.data.name === 'UserAutNotFound') {
                //         toast.error("Email ou mot de passe incorrect !")
                //     } else {
                //         toast.error("Quelque chose a mal tournée.")
                //         toast.error("Oups !")
                //     }
                // } else {
                //     console.log('err', err)
                //     toast.error("Connexion au serveur a échoué !")
                // }
            }
        }
        navigate("/")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitLoginForm)}>
                <Card className=' lg:w-80 shadow-none border-none card'>
                    <div className="flex justify-center align-center">
                        <img src={Logo} alt="logo" width={"50%"} className=" text-center" />
                    </div>
                    <CardHeader>
                        <CardTitle className='text-center'>Login</CardTitle>
                        <CardDescription className='text-center'>Please login to access your account.</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-2'>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
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
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Button className='w-full' type="submit">Login</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}

export default LoginForm