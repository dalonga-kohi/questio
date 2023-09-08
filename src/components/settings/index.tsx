const Settings = () => {
    return(
        <div className=" flex flex-col ">
            <section className=" flex flex-col mt-10 items-center w-full border-b-2">
                <div className=" pl-5 pr-5 "><img className="  rounded-full w-52 h-52 object-cover" src="https://i.pinimg.com/originals/30/97/3f/30973fe665a93af8fb6097869565f52e.jpg"></img> </div>
                <div className=" flex-col justify-center text-center">
                    <div className=" mt-8 text-2xl">xxxxxxxxxxxxxxxxxxxx</div>
                    <button className=" mt-10  mb-10 text-xl bg-accent text-black-light rounded-md p-1.5 px-7 active:bg-green-500">Edit</button>
                </div>
            </section>
            <section className=" flex flex-col mt-10 items-center w-full border-b-2 text-sm">
                <div className="flex w-full justify-around mb-5">
                    <div className="mr-2">EMAIL</div>
                    <div className="mr-2">email@email.com</div>
                    <button className=" bg-accent text-black-light rounded-md p-1 px-3 active:bg-green-500">CHANGE</button>
                </div>
                <div className="flex w-full justify-around mb-10 mt-5">
                    <div className="mr-2">PASSWORD</div>
                    <div className="mr-2">********</div>
                    <button className=" bg-accent text-black-light rounded-md p-1 px-3 active:bg-green-500">CHANGE</button>
                </div>
            </section>
            <section className=" flex flex-col mt-10 items-center w-full border-b-2">
              <a href="mailto:support@quest.io">  <button className=" bg-accent text-black-light rounded-md p-2 px-6 active:bg-green-500 mb-10">Contact Us</button></a>
                <button className=" bg-accent text-black-light rounded-md p-2 px-6 active:bg-green-500 mb-10"> About Us</button>
            </section>
            <section>

            </section>
        </div>
    )
}

export default Settings