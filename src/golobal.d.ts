export {}


declare global{
    interface Window {
        electronAPI: {
            test: () => void,
            CreateFile: (fileName: string, content: string) => void,
            fileResponse: (callBack: (massage: string) => void) => void,

        }
    }
}