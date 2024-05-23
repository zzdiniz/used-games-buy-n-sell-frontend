import bus from "../utils/bus";

const useFlashMessage = () =>{
    const setFlashMessage = (message:string,type:string) =>{
        bus.emit('flash',{
            message,
            type
        })
    }
    return {setFlashMessage}
}

export default useFlashMessage