'use client'

import { SkeletonLoader } from "@/components/ui/SkeletonLoader";
import { signIn, signUp, useSession } from "@/lib/db/auth-client"
import { useState } from "react";

import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function Auth() {
    const {isPending} = useSession();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSingUp = async () => {
        await signUp.email({ email, password, name })
    }

    const handleSingIn = async () => {
        await signIn.email({ email, password })
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-blue-50">
            <div className="bg-white p-5 rounded-3xl shadow-lg w-sm">
                <h1 className="text-3xl font-bold mb-5">Вход / регистрация</h1>

                {isPending ? <SkeletonLoader count={3}/> : 
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
                            placeholder="Введите имя:" 
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
                    <Button 
                        variant="secondary"
                        onClick={handleSingUp}
                        disabled={isPending}
                    >
                        {isPending ? 'Загрузка...' : "Регистрация"}
                    </Button>
                </div>
            </div>
        </div>
    )
}