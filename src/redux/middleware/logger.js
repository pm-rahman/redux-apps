const logger =(store)=>(next)=>(action)=>{
    const currentStore = store.getState();
    next(action);
    console.log("current state =>",currentStore);
    console.log("updated state =>",store.getState());
}
export default logger