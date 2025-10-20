

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
    Card,
    // CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"

import axios from "axios"
import { useEffect, useState } from "react"

export default function AfterLogin() {
    let Navigate = useNavigate()
    const [userInfo, SetUserInfo] = useState<{ OTP: string, Email: (string | null) }>({
        OTP: "",
        Email: ""
    })

    function verfiyOTP() {
        axios.post("http://localhost:3000/verfiy", userInfo).then((backend) => {
            console.log(backend.data.massage)

            const access_TOKEN = backend.data.massage.access_token
            // const Confirm_user =backend.data.massage.

            localStorage.setItem("access_TOKEN", access_TOKEN)

            if (backend.data?.found ) {
                Navigate("/Home")
            }




        })
    }

    function Storage() {
        const emails: (string | null) = localStorage.getItem("Email")

        SetUserInfo(prev => ({ ...prev, Email: emails }))
    }


    useEffect(() => {
        Storage()
    }, [])

    return (
        <div>



            <Card>
                <CardHeader>
                    <CardTitle>OTP</CardTitle>
                    <CardDescription>We sand OTP code to your email</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>
                    <InputOTP maxLength={6} onChange={((e) => {
                        console.log(e)
                        SetUserInfo(prev => ({ ...prev, OTP: e }))
                    })} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </CardContent>
                <CardFooter className="flex flex-col">


                    <Button className="w-full" onClick={verfiyOTP}>Login</Button>



                    <p className="text-neutral-300 w-full mt-5">Go back to
                        <Link to={"/"} className="p-2" >

                            <span className="hover:border-b-1 hover:border-white">login page</span>
                        </Link>


                    </p>

                </CardFooter>
            </Card>
        </div>
    )
}