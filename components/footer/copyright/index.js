const Copyright = () => {
    return (
        <div className="py-[9px] grid md:grid-cols-2 md:px-3 mx-[15px] justify-center text-center bg-gray-dark w-full text-white">
            <div className="md:flex md:justify-start">
                <p className="text-sm">© Copyright 2021, All Rights Reserved</p>
            </div>
            <div className="md:flex md:justify-end">
                <p className="text-sm mr-6">Terms of Service</p>
                <p className="text-sm">Privacy Policy</p>
            </div>
        </div>
    );
}
 
export default Copyright;