'use client'

import { signIn, signUp, useSession } from "@/lib/db/auth-client"
import { useState } from "react";

export function Auth() {
    const {data: session, isPending} = useSession();

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
        <div>
        
        </div>
    )
}