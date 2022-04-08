export default function Error(props) {

    return props.error == true ?
           <div className="p-3 mt-2 bg-danger text-white"> 
                Enter valid coordinates (lat 1.0, lon 1.0)
            </div> : <div></div>
}