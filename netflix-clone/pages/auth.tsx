import Input from '@/components/Input'
import { useCallback, useState } from 'react'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((curr) => (curr === 'login' ? 'register' : 'login'))
    }, [])

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/profiles',
            })
        } catch (error) {
            console.log('error: ', error)
        }
    }, [email, password])

    const register = useCallback(async () => {
        try {
            console.log('hi')
            await axios.post('/api/register', {
                email,
                name,
                password,
            })
            login()
        } catch (error) {
            console.log('error: ', error)
        }
    }, [email, name, password, login])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
            <div className='h-full w-full bg-black lg:bg-opacity-75'>
                <nav className='px-12 py-5'>
                    <img src='/images/logo.png' alt='logo' className='h-12' />
                </nav>
                <div className='flex justify-center'>
                    <div className='mt-2 w-full self-center rounded-md bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md'>
                        <h2 className='mb-8 text-4xl font-semibold text-white'>
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className='flex flex-col gap-4'>
                            {variant === 'register' && (
                                <Input
                                    label='Username'
                                    onChange={(ev: Event) =>
                                        setName(
                                            (ev.target as HTMLInputElement)
                                                .value
                                        )
                                    }
                                    id='name'
                                    type='text'
                                    value={name}
                                />
                            )}

                            <Input
                                label='Email'
                                onChange={(ev: Event) =>
                                    setEmail(
                                        (ev.target as HTMLInputElement).value
                                    )
                                }
                                id='email'
                                type='email'
                                value={email}
                            />
                            <Input
                                label='Password'
                                onChange={(ev: Event) =>
                                    setPassword(
                                        (ev.target as HTMLInputElement).value
                                    )
                                }
                                id='password'
                                type='password'
                                value={password}
                            />
                        </div>
                        <button
                            onClick={variant === 'login' ? login : register}
                            className='mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700 '
                        >
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <div className='mt-8 flex flex-row items-center justify-center gap-4'>
                            <div
                                onClick={() =>
                                    signIn('google', {
                                        callbackUrl: '/profiles',
                                    })
                                }
                                className='
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition
                  hover:opacity-80
                  '
                            >
                                <FcGoogle size={30} />
                            </div>
                            <div
                                onClick={() =>
                                    signIn('github', {
                                        callbackUrl: '/profiles',
                                    })
                                }
                                className='
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition
                  hover:opacity-80
                  '
                            >
                                <FaGithub size={30} />
                            </div>
                        </div>
                        <p className='mt-12 text-neutral-500'>
                            {variant === 'login'
                                ? 'First time using Netflix?'
                                : 'Already have an account?'}
                            <span
                                onClick={toggleVariant}
                                className='ml-1 cursor-pointer text-white hover:underline'
                            >
                                {variant === 'login'
                                    ? 'Create an account'
                                    : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
