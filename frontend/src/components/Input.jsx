export const Input = ({ icon: Icon, ...props }) => {
  return (
    // <div className=' bord relative mb-6'>
		// 	<div className='bord absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
		// 		<Icon className='size-5 text-green-500' />
		// 	</div>
		// 	<input
		// 		{...props}
		// 		className='bord w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200'
		// 	/>
		// </div>
    <div className="relative mx-7 mt-7 flex items-center">
      <Icon size={20} className = "absolute ml-3"></Icon>
      <input {...props} 
      className=" w-full py-2 pl-11 outline-2 outline outline-white hover:outline-[#6F85DF] cursor-pointer rounded-lg duration-500"/>
    </div>
  )
}