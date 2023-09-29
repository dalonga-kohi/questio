const Settings = () => {
  return (
    <div className=" flex flex-col ">
      <section className=" flex flex-col mt-10 items-center w-full border-b-2">
        <div className=" pl-5 pr-5 ">
          <img
            className="  rounded-full w-36 h-36 object-cover"
            src="http://194.107.126.10:8080/api/v1/img/111f4091c6cd7d4d9d0eef07f369beea.jpg"
          ></img>{' '}
        </div>
        <div className=" flex-col justify-center text-center">
          <div className=" mt-8 text-2xl">xxxxxxxxxxxxxxxxxxxx</div>
          <button className=" mt-10  mb-10 text-xl bg-accent text-black-light rounded-md p-1 px-5 active:bg-green-500">
            Edit
          </button>
        </div>
      </section>
      <section className=" flex flex-col mt-10 items-center w-full border-b-2 text-sm">
        <div className="flex w-full justify-around mb-5">
          <div className="mr-2">EMAIL</div>
          <div className="mr-2">email@email.com</div>
          <button className=" bg-accent text-black-light rounded-md p-1 px-3 active:bg-green-500">
            CHANGE
          </button>
        </div>
        <div className="flex w-full justify-around mb-10 mt-5">
          <div className="mr-2">PASSWORD</div>
          <div className="mr-2">********</div>
          <button className=" bg-accent text-black-light rounded-md p-1 px-3 active:bg-green-500">
            CHANGE
          </button>
        </div>
      </section>
      <section className=" flex flex-col mt-10 items-center w-full border-b-2">
        <a href="mailto:support@quest.io">
          {' '}
          <button className=" bg-accent text-black-light rounded-md w-40 h-10 active:bg-green-500 mb-10">
            Contact Us
          </button>
        </a>
        <button className=" bg-accent text-black-light rounded-md w-40 h-10 active:bg-green-500 mb-10">
          {' '}
          Sign out
        </button>
        <button className=" bg-red-600 text-white-light rounded-md w-40 h-10 active:bg-green-500 mb-10">
          {' '}
          DELETE ACCOUNT
        </button>
      </section>
    </div>
  )
}

export default Settings
