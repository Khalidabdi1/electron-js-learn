import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function ShowAlert({Title,Description}:{Title:string,Description:string}) {
    return (
        <div>
            <Alert variant="default" className='absolute bottom-0 left-0 w-[40%] m-2'>
                {/* <Terminal /> */}
                <AlertTitle>{Title}</AlertTitle>
                <AlertDescription>
                  {Description}
                </AlertDescription>
            </Alert>
        </div>
    )
}