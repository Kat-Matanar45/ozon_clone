'use client'

import { SkeletonLoader } from "@/components/ui/SkeletonLoader";
import { signIn, signUp, useSession } from "@/lib/db/auth-client"
import { Dispatch, RefObject, useState } from "react";

import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { CircleAlert } from "lucide-react";

interface Props {
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
    ref: RefObject<HTMLDivElement | null>
}

export function Auth({setIsOpen, ref}: Props) {
    const {isPending} = useSession();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [error, setError] = useState<string | null>(null)

    const handleSingUp = async () => {
        const {error} = await signUp.email({ email, password, name })

        if (error?.message) {
            setError(error.message)
        }
    }

    const handleSingIn = async () => {
        await signIn.email({ email, password })
    }

    return (
        <Modal 
            onClose={() => setIsOpen(false)}
            ref={ref}
        >
                <h1 className="text-3xl font-bold mb-5">Вход / регистрация</h1>

                {error && (
                    <div className="text-red-500 flex items-center mb-4 gap-1.5">
                        <CircleAlert/>
                        <p className="italic">{error}</p>
                    </div>
                )}

                {isPending ? <SkeletonLoader count={3} className="mb-3 w-full h-13.25"/> : 
                    <>
                        <Field 
                            type='email' 
                            placeholder="Введите адрес электронной почты:" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Field
                            type='password' 
                            placeholder="Введите пароль:" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Field 
                            type='text' 
                            placeholder="Введите имя*:" 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                        />
                    </>
                }

                <div className="flex gap-2 mt-4">
                    <Button 
                        onClick={handleSingIn}
                        disabled={isPending}
                    >
                        {isPending ? 'Загрузка...' : "Войти"}
                    </Button>
                    {
                        isPending ? null :
                        <Button 
                            variant="secondary"
                            onClick={handleSingUp}
                            disabled={isPending}
                        >
                            Регистрация
                        </Button>
                    }
                </div>
            </Modal>
    )
}